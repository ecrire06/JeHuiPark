---
layout: posts
title:  "Springframework 단위테스트"
date:   2018-02-12 17:50:21 +0900
comments: true
categories:
- java
tags:
- junit
redirect_from:
- /egovframework/2018/02/12/egov_unit_test/
- /egovframework/egov_unit_test
---

1. **pom.xml** 에 의존성 라이브러리 추가  


``` xml
<!-- JUnit -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>${spring.maven.artifact.version}</version>
    <scope>test</scope>
</dependency>
```


2. **/src/test/java** 경로에 테스트 클래스 생성 및 테스트 소스작성  


``` java
// 유닛테스트를 스프링환경에서 실행
@RunWith(SpringJUnit4ClassRunner.class)
/**
 * JUnit 테스트환경에서는 web.xml이 로드되지 않기때문에
 * contextConfigLocation위치를 직접 잡아줘야함
 */
@ContextConfiguration(locations = {
        "classpath*:egovframework/spring/**/context-*.xml"
      })
public class JHTest {


    @Resource(name="mhScheduleJob")
    MhScheduleJob mhScheduleJob;

    @Test
    public void ss() throws Exception {
        mhScheduleJob.sendSMS();
        // Assert 클래스 활용하여 다양한 테스트 수행
    }

}

```
