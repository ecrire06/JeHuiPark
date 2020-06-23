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
        "title": "[JAVA] 제네릭(Generic)이란",
        "excerpt":"List&lt;Interger&gt; list1 = new ArrayList&lt;&gt;(); List list2 = new ArrayList&lt;&gt;(); Map&lt;String, String&gt; map = new ArrayList&lt;&gt;(); 우리는 위와같이 꺽쇠안에 클래스 타입이 명시된 패턴을 자주 발견할 수 있다. 이걸 제네릭(Generic) 이라고 부르며, 제네릭 파라미터는 꺽쇠안에 포함하여 전달한다. 제네릭이 하는게 무엇이고, 왜 사용할까? 라는 물음에서 시작하되어 포스팅을 시작한다. JAVA에서 제네릭이란? 파라미터 타입이나...","categories": ["java"],
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
        "teaser":null},{
        "title": "Springboot 시작하기 쉬운 Database H2",
        "excerpt":"Springboot에서 가장 빠르게 접근할 수 있는 RDBMS H2를 TCP모드로 셋업하는 과정을 공유합니다. Springboot + 데모수준 앱 + 관계형 데이터베이스(RDBMS) + 인텔리제이(IntelliJ) 이 4가지가 충족 된다면 H2 데이터베이스를 추천합니다. 인텔리제이의 경우에 H2를 선택한다면 무설치에 가까운 행위로 손쉽게 데이타소스 설정이 가능합니다. 위키에 따르면 H2는 JAVA로 작성된 RDBMS로 JAVA앱에 임베디드 되거나 클라이언트-서버모드로 구동이...","categories": ["java"],
        "tags": ["spring","h2"],
        "url": "https://jehuipark.github.io/java/springboot-h2-tcp-setup",
        "teaser":null},{
        "title": "Load Time Weaving 적용기 - Spring LTW",
        "excerpt":"스프링 환경에서 IOC 대상이 아닌 일반객체도 별도의 코드 작성없이 스프링 컨테이너로부터 DI 받을 수 있는 방법을 공유합니다. 전체소스는 깃허브 에 존재합니다. 의문점에서 시작 Spring환경에서 개발을 진행하던중 문득 일반객체도 스프링 컨테이너에 빈으로 등록된 객체들을 별도의 코드작성없이 Autowired와 같은 어노테이션을 이용하여 DI받을 수는 없을까란 의문점이 생겼습니다. 즉, 제가 하고싶었던 것은 객체에 대한...","categories": ["java"],
        "tags": ["spring","ltw"],
        "url": "https://jehuipark.github.io/java/generic-object-di-try-with-spring",
        "teaser":null},{
        "title": "트랜잭션이 동작하지 않는다.",
        "excerpt":"팀장님으로부터 어떤 업무를 처리할 서버앱을 데모형태로 먼저 개발해달란 요청이 들어왔고, 여느때와 다름없이 springboot를 이용하여 빠르게 구축하였다. 프로젝트에서 사용될 핵심 의존성은 대충 아래와 같았다. 의존성 querydsl web spring-data-jpa mariadb 문제는 데이터 레이어 개발을 끝내고 테스트 진행중에 발생하였다……ㅠㅠ 이슈 발견 Test를 위해 스프링부트에서 지원하는 DataJpaTest 어노테이션을 이용하여 슬라이싱 테스트를 진행하였고 몇번의 시행착오를...","categories": ["note"],
        "tags": ["database"],
        "url": "https://jehuipark.github.io/note/transaction-do-not-work-issue",
        "teaser":null},{
        "title": "책봐라 제희야",
        "excerpt":"제목 저자 이펙티브 자바 조슈아 블로 클린코드 애자일 소프트웨어 장인정신 로버트C. 마틴 도메인 주도 설계 에릭 에반스 자바 ORM 표준 JPA 프로그래밍 김영한 오브젝트 조양호 헤드퍼스트 디자인패턴   GOF의 디자인패턴   켄트 벡의 구현 패턴   피플 웨어   알고리즘 로버트 세지윅 데이터 중심 애플리케이션 설계 마틴 클레프만 컴퓨팅 사고...","categories": ["note"],
        "tags": [],
        "url": "https://jehuipark.github.io/note/book-read-plan",
        "teaser":null},{
        "title": "오브젝트",
        "excerpt":"오브젝트 책을 보기위한 기본소양을 갖추기 위하여 아래와 같은 내용을 소개 개발자들은 코딩을 왜 할까? motivation = 돈 왜 그렇게 짰어? 돈이 덜드니까.. 이렇게 하면 돈을 버니까 왜 ??? Philosophy 철학에 관한 이야기 켄트백은 생각하는 코드의 틀로 3가지를 제안 Value 가치 Communication 소통하기 쉬운 코드 Simplicity 간단한 코드 Flexibility 유연한 코드...","categories": ["study"],
        "tags": [],
        "url": "https://jehuipark.github.io/study/object-chapter1",
        "teaser":null},{
        "title": "Github 블로그 개발 환경을 Docker로 구성하자",
        "excerpt":"블로그를 방치했던 가장 큰 이유 환경 구성이 귀찮았던 이유 내 블로그 살리자 계획 실행 (고군분투기) 보너스 마치며 앞으로 할 일 몇 가지 이유로 나는 이 블로그를 거의 1년간 방치하고 있었다. (사실 핑계) 2019년 06월 이직 지킬 블로그 개발환경 구성이 너무나 귀찮다 올바른 객체지향 설계를 위한 개념 잡기에 몰두 블로그를 방치했던...","categories": ["blog"],
        "tags": ["jekyll"],
        "url": "https://jehuipark.github.io/blog/blog-env-setting-with-docker",
        "teaser":null},{
        "title": "Github 다중계정 관리",
        "excerpt":"깃헙 계정이 여러개일 땐 어떻게 해야할까? ssh 키 생성 ssh 공개키를 깃헙 설정에 추가 ssh 비공개키를 ssh-agent에 등록 ssh-agent 설정에 Github 호스트 추가 remote 저장소 등록 무엇이 다른가? 참조 깃헙 계정이 여러개일 땐 어떻게 해야할까? Basic Credentials 방식을 이용할 할 때는 레파지토리별로 로그인이 가능하기 때문에 별문제가 되지 않는다. 하지만, ssh...","categories": ["note"],
        "tags": ["ssh"],
        "url": "https://jehuipark.github.io/note/github-multiple-accounts-manage",
        "teaser":null},{
        "title": "Github Action 을 이용하여 Github 블로그 배포하기",
        "excerpt":"시작하기 전에 Github Action 이 딱이네 Github Action 은 Github Action 을 만들어보자 Github Action 생성 Github Action 몸빵으로 배우기 완성된 Github Action DSL 깃헙액션 동작 결과 시작하기 전에 Github Action을 이용하기 전에 나는 블로그를 이런식으로 운영하고 있었다. 블로그의 빌드방식을 github 의존 방식이 아닌 로컬 빌드방식을 이용 블로그를 배포하는 방법으로...","categories": ["note"],
        "tags": ["github"],
        "url": "https://jehuipark.github.io/note/blog-publish-with-github-action",
        "teaser":null},{
        "title": "3항 연산자와 Unboxing 그리고 NullPointException",
        "excerpt":"떡밥 왜 NullPointException ? 어떻게 알아내었는가 unboxing 의 동작방식이 궁금해 1짤 요약 후기 떡밥 얼마전에 팀 내에서 재밌는 이슈가 나왔다. 대충 아래와 같은 방식으로 리턴하는 메소드가 존재하였는데. Integer exampleMethod() { return booleanExpression ? primitiveValue : integerObj; } booleanExpression 의 값이 false 일 때, integerObj 의 값이 null 이면 NullPointException 오류가...","categories": ["java"],
        "tags": ["java"],
        "url": "https://jehuipark.github.io/java/java-conditional-operator",
        "teaser":null},{
        "title": "JPA 에서 UUID 삽질기록",
        "excerpt":"UUID로 조회가 안된다. 혼란이 온다. 성공적인 구글링 왜 그럴까? 한줄 요약 확인 해보자 UUID로 조회가 안된다. 최근에 엔티티를 만들면서 Id 컬럼의 타입을 UUID 로 지정하면서 경험했던 이슈가 있다. 평소처럼 엔티티를 클래스를 작성하고, 기본적인 비즈니스 로직(1번 로직)을 구현하고, 비즈니스 로직에 대응하는 TC 를 작성하고 문제없이 동작하는 것을 확인한 후에 나는 다음...","categories": ["java"],
        "tags": ["mysql","uuid"],
        "url": "https://jehuipark.github.io/java/my-sql-binary-reference",
        "teaser":null},{
        "title": "Vim 어린이가 만든 GitHub Co-Author Vim Plugin",
        "excerpt":"GitHub Co-Author? 난 이 기능이 좋다. Co-Author 표시하기 막상 작성을 해보려고 하면? vim 을 이용하자 기획 사전학습 vimscript 연습 배열 다루기 파일 읽기 키맵핑 하기 개발완료 참고자료 GitHub Co-Author? Co-Author 의 사전적 의미를 네이버에 검색하면 공동저자라고 나온다. GitHub 는 이렇게 하나의 커밋에 2명 이상의 기여자가 존재할 경우에 누가 이 커밋에...","categories": ["note"],
        "tags": ["vim","github"],
        "url": "https://jehuipark.github.io/note/vim-plugin-create",
        "teaser":null},{
        "title": "디자인 패턴 : 추상 팩토리",
        "excerpt":"정의 특징 구조 예제코드 예제코드 클래스 다이어그램 관련 패턴 참고자료 정의 객체 생성과 구성(협력관계)을 추상화 시킨 패턴으로 서버 코드와 클라이언트 코드의 결합도를 낮춘 디자인 패턴 클라이언트 코드에서는 구현체가 아닌 인터페이스에 의존한다. 특징 클라이언트는 추상화 레이어에 의존하기 때문에 구현체와의 결합도가 낮아진다. 구현체를 교체하는 비용이 낮아진다. 대부분의 행위가 동적 바인딩으로 이루어지기 때문에...","categories": ["study"],
        "tags": ["디자인 패턴"],
        "url": "https://jehuipark.github.io/study/abstract-factory-pattern",
        "teaser":null},{
        "title": "JUnit5 DisplayName 이 동작하지 않을 때",
        "excerpt":"@DisplayName 이 동작하지 않아요 해결 @DisplayName of junit5 in intellij do not working @DisplayName 이 동작하지 않아요 JUnit5 를 이용하여 아래와 같은 테스트를 작성하고 @DisplayName(\"example\") class JunitExample { @DisplayName(\"when coding enjoy\") @Nested class Context_Sample { @Test @DisplayName(\"i am happy\") void test1() { } } } 이런 결과를 기대했지만? 이런 화면이...","categories": ["note"],
        "tags": [],
        "url": "https://jehuipark.github.io/note/displayname-do-not-work-in-intellij",
        "teaser":null},{
        "title": "디자인 패턴 : 팩토리 메소드",
        "excerpt":"정의 내 생각 정의 GoF의 디자인 패턴(p156)에서는 팩토리 메소드에 대한 패턴을 이렇게 정의한다. 객체 생성을 위한 인터페이스를 정의하지만, 어떤 클래스의 인스턴스를 생성할 지에 대한 결정은 서브클래스가 내리도록 한다. 내 생각 이 문구를 보고 이상한 점을 느꼈다. 그렇다면 팩토리 메소드 패턴과 추상 팩토리 패턴의 차이는 뭐지? 말장난인가? 아직 나의 식견이 좁아서...","categories": ["study"],
        "tags": ["디자인 패턴"],
        "url": "https://jehuipark.github.io/study/factory-method",
        "teaser":null},{
        "title": "IntelliJ 잘 쓰기 Tip",
        "excerpt":"No newline at end of file 보일러 플레이트 해결하기 LiveTemplate 템플릿 만들기 템플릿 적용위치 설정하기 사용 예시 FileTemplate Vue Template Blog Template 터미널에서 Intellij 실행하기 No newline at end of file intelliJ 에서는 커맨드 + N 단축키를 이용하여 테스트 클래스를 자동생성할 수 있는데, 이 기능을 그냥 이용하게 되면 거슬리는게 하나...","categories": ["note"],
        "tags": [],
        "url": "https://jehuipark.github.io/note/use-intellij-more-well",
        "teaser":null},{
        "title": "디자인 패턴 : Prototype Design Pattern",
        "excerpt":"정의 효과 구조 적용예시 고려 사항 참고자료 정의 원본 객체를 사용하여 새로운 사본 객체를 생성하는 패턴 복사 객체의 타입은 서브 클래스에서 정의 효과 클라이언트에서 같은 상태의 객체를 생성하기 위해 알아야 할 정보가 줄어든다. 팩토리 메소드와 다르게 객체 생성에 대한 책임을 클라이언트에게 일부 위임하기 때문에 인스턴스를 쉽게 다양화 시킬 수 있다....","categories": ["study"],
        "tags": ["디자인 패턴"],
        "url": "https://jehuipark.github.io/study/prototype_design_pattern",
        "teaser":null},{
        "title": "디자인 패턴 : Singleton",
        "excerpt":"정의 특징 예제코드 참고자료 정의 클래스에 대한 인스턴스를 하나로 제한하는 패턴 특징 인스턴스의 개수가 1개임을 보장 access point 제한 유일한 인스턴스이면서 서브 클래싱으로 확장을 지원 예제코드 생성자를 은닉시키고, 객체 생성을 제한하여 인스턴스가 1개임을 보장하는 것에 초점을 맞춘다. 간단한 싱글톤 thread-safe 요구사항이 없다면 아래와 같은 구현으로 충분하다. final class BasicSingleton {...","categories": ["study"],
        "tags": ["디자인 패턴"],
        "url": "https://jehuipark.github.io/study/singleton-pattern",
        "teaser":null},{
        "title": "디자인 패턴 : Builder Pattern",
        "excerpt":"정의 특징 예제코드 참고자료 정의 복잡한 객체를 생성하는 방법과 표현하는 방법을 정의하는 클래스를 분리하는 패턴 특징 빌더에 의해 객체 생성방법이 추상화 되기 때문에 객체 생성 난이도가 낮아지며, 객체 생성방법이 클라이언트로 부터 어느정도 자유로워 질 수 있다. 외부에는 간결한 인터페이스를 제공하고, 내부적으로는 복잡한 생성로직을 처리한다. 예제코드 객체 생성을 위해 필요한 정보를...","categories": ["study"],
        "tags": ["디자인 패턴"],
        "url": "https://jehuipark.github.io/study/builder-pattern",
        "teaser":null},{
        "title": "Java 로깅전략 with MDC",
        "excerpt":"MDC 예제코드 참고자료 어플리케이션에서 이루어지는 어떤 행위에는 보통 Context(문맥) 가 존재한다. 그렇기에 로그정보를 Context 단위로 볼 수 있다면, 더 유의미한 로그가 될 것이다. MDC Java 로깅 프레임워크에서는 관련 기능을 MDC 라는 이름으로 제공하고 있다. MDC 는 key/value 저장소를 지원하며, 이 저장소는 ThreadContext 에 의존한다. 예제코드 의존성 dependencies { compile group:...","categories": ["java"],
        "tags": [],
        "url": "https://jehuipark.github.io/java/java-logging-mdc",
        "teaser":null},{
        "title": "MS Excel csv 한글깨짐",
        "excerpt":"증상 원인 해결 예제코드 매직넘버 적용결과 증상 특정 편집기로는 CSV 파일을 열어볼 때는 글자 깨짐 현상 없음 MS Excel 편집기로 CSV 파일을 열어볼 때는 글자 깨짐 현상 발생 원인 MS Excel 에 파일의 인코딩을 알리는 BOM 누락 (매직넘버라고 부른다.) 아래는 위키피디아의 문서의 내용을 발췌 마이크로소프트의 컴파일러와 인터프리터 그리고 노트패드와 같은...","categories": ["note"],
        "tags": [],
        "url": "https://jehuipark.github.io/note/ms-excel-utf8",
        "teaser":null}]
