---
layout: posts
title:  "mybatis의 OGNL기반 표현식 분석"
date:   2018-09-02 01:22:21 +0900
comments: true
categories:
  - java
tags:
  - mybatis
  - ognl
  - spring
redirect_from:
  - /mybatis/2018/09/01/mybatis_ognl/
  - /mybatis/mybatis_ognl/
---

mybatis는 동적SQL처리를 지원하기 위해 지정된 엘리먼트들을 제공합니다. 그리고 기존 ibatis에서 제공되어지던 다수의 엘리먼트들은 **OGNL기반의 표현식이 도입**됨으로써 많이 사라지고 다음과 같은것들로 대체 됨으로써 개발자가 알아야할 엘리먼트의 개수는 줄었다는 장점이 존재합니다.
- if
- choose (when, otherwise)
- trim (where, set)
- foreach

아마 이중에 개발자들이 OGNL 표현식을 적극적으로 사용하고있는 엘리먼트들은 if와 choose의 test 속성이며 아래와 같은 방식으로 자주 사용 될거라고 생각합니다.
```xml
<if test=" property != '' and property != null ">
  WHERE COL1 = #{property}
</if>
```

여기에서 `" property != '' and property != null "` 이 부분이 OGNL 표현식입니다.
OGNL이 대체 뭘까요? 위키에서 OGNL(Object-Graph Navigation Language)의 뜻을 확인해보면 객체에 접근하기 위한 언어라고 명시하고있습니다.

그럼 mybatis는 OGNL을 어떻게 지원하고 있을까요? 아주 기본적인 것부터 분석해보니 **and**와 **or**처럼 **test 연산**을 위한 **예약어**를 제외하고는 싱글쿼테이션이나 더블쿼테이션 없이 **문자열**이 들어오게되면 어떤 객체라고 판단을 하고 해당 객체에 접근하기 위한 다양한 처리가 수행되어 객체로 접근하게 된다는걸 우리는 경험을 통해 알 수 있습니다.
추가적으로 객체에서 제공되는 메소드 호출또한 가능합니다.

즉 mybatis에서 제공하는 OGNL기반의 표현식을 통해 개발자는 아무렇지 않게 어떤 객체값을 확인하고 분기처리하는게 쉬워졌죠.
근데 여기서 주의해야될 점이 있습니다. mybatis에서 객체값을 비교할 경우 싱글쿼테이션으로 감싸주어서 사용하는 경우가 있는데 mybatis에게 "**이건 property가 아니고 어떤 값이야**" 라고 알려 주는거지 **문자열이라고 명시해 주는게 아니라는 점** 입니다. <br>
이렇게 설명하면 이해가 잘 안가실테니 간단한 UnitTest를 통해 설명해 보겠습니다.

__sql맵에 아래와 같이 code에 따라 분기처리되는 sql이 있습니다.__
```xml
<select id="parseTest3" resultType="string">
  <choose>
    <when test="code == '5'">
      SELECT 'OK' FROM DUAL
    </when>
    <otherwise>
      SELECT 'FAIL' FROM DUAL
    </otherwise>
  </choose>
</select>
```
__해당 sql맵과 맵핑시킨 인터페이스에 메소드를 등록합니다.__
```java
@Mapper
public interface TestMapper {
  String parseTest3(Map<String, Object> map);
}
```

__해당 메소드를 호출합니다.__
```java
@Test
public void case2() {
  Map<String, Object> map = new HashMap<String, Object>();
  map.put("code", "5");
  mapper.parseTest3(map);
}
```
여기서 개발자의 의도는 `SELECT 'OK' FROM DUAL` 쿼리가 실행되는 것이였을 겁니다. 하지만 실제 실행된 쿼리를 확인해보면 아래와 같습니다.

![테스트 수행결과1](https://user-images.githubusercontent.com/25237661/44947977-7e09fa80-ae50-11e8-97f6-114b52943036.PNG)


앞서 말한 것 처럼 mybatis OGNL 구문에서 싱글쿼테이션으로 어떤 값을 감싼경우 이건 property가 아니라고 명시해주는 거지 문자열이라고 명시하는게 아닙니다.
_ps. 물론 내부적으로 싱글쿼테이션으로 감싸진 값을 분석하여 값에 맞는 적당한 자료형으로 대체되기 때문에 아래와 같은 분기처리에서는 무리없이 사용 될 수 있습니다._
```xml
<when test=" code=='test' ">
  SELECT 'code is test' FROM DUAL
</when>
```

다시 본론으로 돌아가서 sql맵의 parseTest3을 좀 더 정확한 분기처리를 하려면 어떻게 해야될까요.
아주 간단합니다. 싱글쿼테이션이 아닌 더블쿼테이션으로 감싸주어서 이건 명확하게 자료형이 문자열이라고 mybatis에게 힌트를 주는겁니다.
mybatis에게 **"이건 자료형이 문자열이야"** 라고 힌트를 주는 방법에는 두 가지가 있습니다.
1. **test** 를 싱글쿼테이션으로 묶고 더블쿼테이션으로 그대로 사용
`<when test=' code=="5" '>`
2. **xml escape** 활용
`<when test=" code==&quot;5&quot; >`

이제 방법을 알았으니 sql을 수정하고 테스트를 수행해볼까요?

**sql맵을 아래와 같이 등록하고 테스트를 수행합니다.**
```xml
<select id="parseTest4" resultType="string">
  <if test=" code ==&quot;5&quot; ">/* ok */</if>
  <choose>
    <when test=' code=="5" '>
      SELECT 'OK' FROM DUAL
    </when>
    <otherwise>
      SELECT 'FAIL' FROM DUAL
    </otherwise>
  </choose>
</select>
```

**테스트 수행결과**

![테스트 수행결과2](https://user-images.githubusercontent.com/25237661/44947978-7e09fa80-ae50-11e8-81ef-008e5e420820.PNG)
<br>
<br>


#### test expression case

```xml
<select id="parseTest1" resultType="hashMap" >
/* parseTest1 */
<trim prefix="SELECT" suffix="FROM DUAL">
  <trim suffixOverrides=",">
    <if test=" intParam.equals(1) ">#{intParam} AS INT_CASE1,</if>
    <if test=" intParam.equals(&quot;1&quot;) " >#{intParam} AS INT_CASE2,</if>
    <if test=" intParam.equals('1') ">#{intParam} AS INT_CASE3,</if>
    <if test=" intParam == 1 ">#{intParam} AS INT_CASE4,</if>
    <if test=" intParam == &quot;1&quot; ">#{intParam} AS INT_CASE5,</if>
    <if test=" intParam == '1' ">#{intParam} AS INT_CASE6,</if>
    <if test=" stringParam.equals(2) ">#{stringParam} AS STRING_CASE1,</if>
    <if test=" stringParam.equals(&quot;2&quot;) " >#{stringParam} AS STRING_CASE2,</if>
    <if test=" stringParam.equals('2') ">#{stringParam} AS STRING_CASE3,</if>
    <if test=" stringParam == 2 ">#{stringParam} AS STRING_CASE4,</if>
    <if test=" stringParam == &quot;2&quot; ">#{stringParam} AS STRING_CASE5,</if>
    <if test=" stringParam == '2' ">#{stringParam} AS STRING_CASE6,</if>
  </trim>
</trim>
</select>

<select id="parseTest2" resultType="hashMap" >
/* parseTest2 */
<trim prefix="SELECT" suffix="FROM DUAL">
  <trim suffixOverrides=",">
    <if test=' intParam.equals(1) '>#{intParam} AS INT_CASE1,</if>
    <if test=' intParam.equals(&quot;1&quot;) ' >#{intParam} AS INT_CASE2,</if>
    <if test=' intParam.equals("1") '>#{intParam} AS INT_CASE3,</if>
    <if test=' intParam == 1 '>#{intParam} AS INT_CASE4,</if>
    <if test=' intParam == &quot;1&quot; '>#{intParam} AS INT_CASE5,</if>
    <if test=' intParam == "1" '>#{intParam} AS INT_CASE6,</if>
    <if test=' stringParam.equals(2) '>#{stringParam} AS STRING_CASE1,</if>
    <if test=' stringParam.equals(&quot;2&quot;) ' >#{stringParam} AS STRING_CASE2,</if>
    <if test=' stringParam.equals("2") '>#{stringParam} AS STRING_CASE3,</if>
    <if test=' stringParam == 2 '>#{stringParam} AS STRING_CASE4,</if>
    <if test=' stringParam == &quot;2&quot; '>#{stringParam} AS STRING_CASE5,</if>
    <if test=' stringParam == "2" '>#{stringParam} AS STRING_CASE6,</if>
  </trim>
</trim>
</select>
```

```java
@Test
public void case1() {
  Map<String, Object> map = new HashMap<String, Object>();
  map.put("intParam", 1);
  map.put("stringParam", "2");
  mapper.parseTest1(map);
  mapper.parseTest2(map);
}
```

**실행해보니 결과는 다음과 같습니다**  
![테스트 수행결과3](https://user-images.githubusercontent.com/25237661/44947979-7e09fa80-ae50-11e8-8bc3-704bafe3f257.PNG)

일관성이 없는 모습이다.  
일단 test 구문은 싱글 쿼테이션으로 묶는게 정답일 듯  
