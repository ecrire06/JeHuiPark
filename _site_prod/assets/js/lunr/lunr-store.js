var store = [{
        "title": "블로그를 생성한 이유",
        "excerpt":"개발자로써 일을 시작한지 이제 만 1년이 지났고 최근들어 이런저런 생각이 들기 시작했다. 본래 프로그래밍 하는것이 재밌었고, 높은 경지에 오르고 싶어서 시작한 일인데 1년을 뒤돌아보니 한것에 비해 남는게 없는것 같아 허전한감이 없지 않아있는 기분이다. (사실 나만 도태되는것 같은 기분…) 그래서 나만의 블로그를 개설하고 포스팅을 통해 흔적을 남기자고 결심하게 되었다. 내가 생각하는...","categories": ["blog"],
        "tags": ["jekyll"],
        "url": "https://jehuipark.github.io/blog/blog_start",
        "teaser":null},{
        "title": "마이바티스 옵션",
        "excerpt":"insert, update, delete 요청에서 selectKey추출 &lt;insert id=\"id\" parameterType=\"HashMap\" &gt; &lt;selectKey keyProperty=\"seq\" resultType=\"Integer\" order=\"BEFORE\"&gt; (SELECT SEQUNCE_NAME.NEXTVAL FROM DUAL) &lt;/selectKey&gt; INSERT INTO TABLE_NAME VALUES(#{seq}, #{data}) &lt;/insert&gt; serviceImpl.java reqMap.get(\"seq\") // null dao.insert(id, reqMap); reqMap.get(\"seq\") // SEQUNCE_NAME.NEXTVAL 반복문 &lt;delete id=\"id\" parameterType=\"HashMap\"&gt; DELETE TABLE_NAME WHERE COL = #{key} &lt;if test=\"cttNums != null \"&gt; &lt;foreach collection=\"cttNums\"...","categories": ["java"],
        "tags": ["mybatis","spring"],
        "url": "https://jehuipark.github.io/java/mybatis_option",
        "teaser":null},{
        "title": "Springframework 단위테스트",
        "excerpt":"pom.xml 에 의존성 라이브러리 추가 &lt;!-- JUnit --&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework&lt;/groupId&gt; &lt;artifactId&gt;spring-test&lt;/artifactId&gt; &lt;version&gt;${spring.maven.artifact.version}&lt;/version&gt; &lt;scope&gt;test&lt;/scope&gt; &lt;/dependency&gt; /src/test/java 경로에 테스트 클래스 생성 및 테스트 소스작성 // 유닛테스트를 스프링환경에서 실행 @RunWith(SpringJUnit4ClassRunner.class) /** * JUnit 테스트환경에서는 web.xml이 로드되지 않기때문에 * contextConfigLocation위치를 직접 잡아줘야함 */ @ContextConfiguration(locations = { \"classpath*:egovframework/spring/**/context-*.xml\" }) public class JHTest { @Resource(name=\"mhScheduleJob\") MhScheduleJob...","categories": ["java"],
        "tags": ["junit"],
        "url": "https://jehuipark.github.io/java/egov_unit_test",
        "teaser":null},{
        "title": "SQL 튜닝",
        "excerpt":"서론 DBMS는 오라클 10g를 사용했습니다. 다음 진행하게될 A프로젝트와 현재 종료직전인 B프로젝트의 유사한점 많다는 이유로 B프로젝트에 투입되어 관리자시스템 수정 및 개선 작업을 하게 되었다. 그중 기억에 남고 재밌었던 작업을 꼽으라면 SQL 튜닝이였다. 학생때부터 디비에 관심이 있어서 DB자격증 시험을 보기도 했지만 실무에서 SQL작성은 하더라도 SQL튜닝은 해본적이 없기에 골머리 앓았던 만큼 유익한 시간이였다....","categories": ["database"],
        "tags": ["oracle"],
        "url": "https://jehuipark.github.io/database/sql_upgrade",
        "teaser":null},{
        "title": "카카오 코딩테스트",
        "excerpt":"심심해서 해본 2017 카카오 신입공채 1차 코딩 스트 제한시간 5시간으로 잡고 카페에서 생각날때마다 풀이를 해봤다. 결과는 처참….. 4번 문제에서 접근을 잘못해서 시간낭비를 어마어마하게 함 ㅜㅜㅜㅜㅜ 1번 비밀 지도(난이도: 하) 정답률 : 81.78% function exam1(len, arr1, arr2){ var i=0; var arr = []; function validCheck(num){ var maxValue = Math.pow(2, len)-1; var...","categories": ["study"],
        "tags": ["카카오 코딩테스트"],
        "url": "https://jehuipark.github.io/study/kakao_test",
        "teaser":null},{
        "title": "mybatis의 OGNL기반 표현식 분석",
        "excerpt":"mybatis는 동적SQL처리를 지원하기 위해 지정된 엘리먼트들을 제공합니다. 그리고 기존 ibatis에서 제공되어지던 다수의 엘리먼트들은 OGNL기반의 표현식이 도입됨으로써 많이 사라지고 다음과 같은것들로 대체 됨으로써 개발자가 알아야할 엘리먼트의 개수는 줄었다는 장점이 존재합니다. if choose (when, otherwise) trim (where, set) foreach 아마 이중에 개발자들이 OGNL 표현식을 적극적으로 사용하고있는 엘리먼트들은 if와 choose의 test 속성이며 아래와...","categories": ["java"],
        "tags": ["mybatis","ognl","spring"],
        "url": "https://jehuipark.github.io/java/mybatis_ognl",
        "teaser":null},{
        "title": "GoogleAnalytics Report API 연계",
        "excerpt":"GoogleAnalytics를 들어보셨나요. GoogleAnalytics는 개발자가 약간의 노력만으로 특정 서비스를 이용하는 사용자들의 활동을 추적할 수 있게 도와주는 아주 유용한 도구입니다. 물론 추적 데이터 또한 구글 자체서버에 저장되고 있으니 기본적인 기능만 이용할꺼라면 개발자는 정말 아무것도 할 게 없게 만들어주는 강력한 도구이죠. 이러한 추적데이터를 GoogleAnalytics 공홈에서 확인 할 수도 있지만 구글은 고맙게도 추적데이터를 개발자가...","categories": ["study"],
        "tags": ["googleanalytics"],
        "url": "https://jehuipark.github.io/study/ga_report_api_guide",
        "teaser":null},{
        "title": "LongPolling(지연응답) 구현",
        "excerpt":"이론 얼마전에 개발팀 팀장님을 통해 실시간 프로토콜을 흉내 낸 Polling과 LongPolling(지연응답)이라는 기술을 알게되었고 이에 대해 궁금증이 생겨서 훑어본 내용과 실제 작성한 소스를 공유하고자 합니다. 폴링과 롱폴링 두 가지다 앞서 말한것 처럼 실시간 프로토콜을 흉내 낸 기술 이기때문에 웹 소켓과 다르게 서버와 클라이언트 간의 연결이 유지되는 방식이 아니며 HTTP프로토콜 기반으로 요청을...","categories": ["study"],
        "tags": ["longpolling"],
        "url": "https://jehuipark.github.io/study/long_polling",
        "teaser":null},{
        "title": "윈도우에서 지킬(jekyll)블로그 환경 구축",
        "excerpt":"기존에 사용하던 블로그 테마가 맘에들지 않아 테마변경을 진행하기로 결정하였다. 현재 사용중인 장비가 예전에 블로그를 운영하던 장비가 아니라 새로 환경을 구축했어야 됬는데 오랜만에 하려니 많은 시간이 소요되어 추후에 시간절약을 하기위해 메모한다. Ruby 설치 (지킬 패키지를 개발한 언어) 다운로드주소 루비와 루비 개발자킷을 같이 다운받는다 (루비로 개발된 패키지들은 버전 디펜던시 이슈가 상당히 많기때문에...","categories": ["blog"],
        "tags": ["jekyll"],
        "url": "https://jehuipark.github.io/blog/jekyll_blog_setup",
        "teaser":null},{
        "title": "지킬 블로그를 깃헙 페이지로 배포하기",
        "excerpt":"지킬 패키지로 작성된 블로그를 깃허브에 배포하는 방법에는 두 가지가 있습니다. master 브랜치로 빌드전 소스를 commit - push 하기 master 브랜치로 빌드완료된 정적 페이지 소스를 commit - push 하기 원래는 첫번째 방법으로 배포를 수행하다가 불편한점이 한 두가지가 아니여서, 두번째 방법으로 배포하는것으로 방법을 변경했습니다. root경로에 Rakefile이 존재한다면 아래와 같이 작성해주세요. (Rakefile이 없다면...","categories": ["blog"],
        "tags": ["jekyll"],
        "url": "https://jehuipark.github.io/blog/blog-publish",
        "teaser":null},{
        "title": "[JAVA] 제너릭(Generic)이란",
        "excerpt":"List&lt;Interger&gt; list1 = new ArrayList&lt;&gt;(); List list2 = new ArrayList&lt;&gt;(); Map&lt;String, String&gt; map = new ArrayList&lt;&gt;(); 우리는 위와같이 꺽쇠안에 클래스 타입이 명시된 패턴을 자주 발견할 수 있다. 이걸 제너릭(Generic) 이라고 부르며, 제너릭 파라미터는 꺽쇠안에 포함하여 전달한다. 제너릭이 하는게 무엇이고, 왜 사용할까? 라는 물음에서 시작하되어 포스팅을 시작한다. JAVA에서 제너릭이란? 파라미터 타입이나...","categories": ["java"],
        "tags": ["generic"],
        "url": "https://jehuipark.github.io/java/java-generic",
        "teaser":null},{
        "title": "지킬 블로그 RSS Feed 설정하기",
        "excerpt":"저는 지킬 블로그를 개설하면서 구글 웹마스터와, 네이버 웹마스터 두곳에 현 블로그를 등록하여 검색엔진에 노출되도록 설정했었습니다. 구글 웹마스터 도구는 무리없이 사이트 등록이 깔끔하게 완료되었지만, 이상하게 NAVER 웹마스터에서만 RSS를 제출하려고 하면 서비스 거부를 당해서 방치; 지킬 블로그에서 RSS 피드를 생성하는 방법은 두 가지가 있습니다. 플러그인 사용 RSS 피드 생성문 직접작성 저는 편하게...","categories": ["blog"],
        "tags": ["jekyll"],
        "url": "https://jehuipark.github.io/blog/without-plugin-rss-feed",
        "teaser":null},{
        "title": "리퀴드 문법 탈출하기 liquid escape",
        "excerpt":"지킬 블로그에서 글을 작성하다보면 코드블럭에 리퀴드문법을 작성하는 경우가 있는데, 그냥 작성하게 되면 코드블럭에 포함된 리퀴드코드가 빌드하는 과정에서 의도치 않게 리퀴드 코드가 실행될 수 있습니다. 예를들어서 리퀴드문법에 소개하는 글을 아래처럼 작성하고 --- layout: posts title: \"제목\" --- **리퀴드 문법에서 변수선언은 이렇게합니다 !!** ``` {% assign var=\"어떤값을 저장할까.\" %} ``` 빌드후 실제로...","categories": ["blog"],
        "tags": ["jekyll"],
        "url": "https://jehuipark.github.io/blog/markdown-liquid-escape",
        "teaser":null}]