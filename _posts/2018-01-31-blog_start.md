---
layout: posts
title:  "블로그를 생성한 이유"
date:   2018-01-31 17:50:21 +0900
comments: true
categories: blog
tags:
  - jekyll
redirect_from:
  - /jekyll/2018/01/31/blog_start/
  - /jekyll/blog_start
---

개발자로써 일을 시작한지 이제 만 1년이 지났고 최근들어 이런저런 생각이 들기 시작했다.
본래 프로그래밍 하는것이 재밌었고, 높은 경지에 오르고 싶어서 시작한 일인데 1년을 뒤돌아보니 한것에 비해 남는게 없는것 같아 허전한감이 없지 않아있는 기분이다. (_사실 나만 도태되는것 같은 기분..._)
그래서 나만의 블로그를 개설하고 포스팅을 통해 흔적을 남기자고 결심하게 되었다.
**내가 생각하는 블로그는 커스터마이징이 가능하며 소스공유가 편리하며 가벼워야했다** 따라서 네이버등 타플랫폼에 가입하여 사용하는 블로그는 모조리 배제시켰다.
이것저것 알아보다 jekyll이란 녀석으로 **최종결정**

<br/>

### **선정이유**
 - **블로그 개설이 쉽다**
      - 지킬생태계는 방대하기 때문에 그만큼 공개된 [지킬테마](http://jekyllthemes.org/)가 풍부하며 자신이 원하는 테마를 골라 손쉽게 적용할수 있다.
      - 다양하게 제공되는 지킬플러그인을 활용하여 HTML에 무지한사람도 약간의 노력만 한다면 META태그 최적화가 가능하다.

<br/>

 - **소스공유 기능이 편리**

<br/>

 - **가볍다**
     - 지킬블로그는 타블로그와 달리 정적인(변동이없는)페이지이기 때문에 가볍고 빠르다.
     - 정적이기 때문에 데이터베이스가 없다

<br/>

### **블로그 생성 진행과정**
 __*윈도우환경에서 진행하였으며 지금부터는 지극히 주관적인 내용이라 잘못된 정보가 포홤되어 있을수 있음*__
1. #### ~~로컬설치~~
    1. 지킬은 루비소프트웨어를 통해 배포및 관리됨 >>> 윈도우용 루비설치
    1. 루비설치후 터미널에서 gem키워드를 통해 지킬패키지 설치
    1. 지킬서버 실행 (기본 페이지 성공)
    1. 지킬테마 다운로드후 해당 디렉토리에서 지킬서버 실행(네임드 에러 발생)  
        *ps)업무중이라 시간도 부족하고 짱나서 __일단포기__*

<br/>

1. #### **깃허브 블로그 생성**
    1. [깃허브](https://github.com/) 회원가입
    1. [레파지토리 생성](https://github.com/new) ( _주의사항 : 레파지토리 명칭은 무조건 계정명.github.io로 명명_ )
    1. [깃허브 데스크탑](https://desktop.github.com/) 설치
_ps) GIT을 사용할 줄 안다면 필요없으며 지금부터 깃데스크탑 기준으로 설명._
    1. 깃허브 데스크탑을 이용해 2번에서 생성한 레파지토리를 가져온다. (로그인 후 클론 레파지토리 선택)
    1. [지킬테마](http://jekyllthemes.org/)에서 원하는 테마를 선택하여 **깃저장소와 연결된 로컬경로에 다운**
    1. 깃허브 데스크탑에서 블로그레파지토리 선택하면 커밋리스트가 나열된다 Summary와 Descipition작성 후 Commit 실행하면 상단에 push버튼이 생긴다 push명령 실행
    1. https://github.com/계정명/ 에 접속하면 지킬블로그테마 파일이 업로드된것을 확인할수 있다.
    _ps) 약 1분정도 지난후 본인 블로그주소로 접속하면 블로그가 생성된것을 확인할 수 있었다.
    블로그 주소 > https://계정명.github.io_