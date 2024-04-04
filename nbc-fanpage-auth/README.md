# 내배캠 React 3기 심화주차 개인과제

인증 서비스가 들어간 그룹 아티스트 팬레터함 만들기

## 🚩 과제 개요

**23. 11. 29 - 23. 12. 04**

## 🚩 요구사항

### 필수요구사항

- 홈 화면
  - 팬레터 추가폼에서 회원가입된 사용자 유저 닉네임 적용
- 상세 화면
  - 본인이 작성한 팬레터에서만 수정, 삭제
- 로그인/회원가입
  - 로그인해야 팬레터 서비스 이용 가능
- 프로필관리
  - 프로필 이미지, 닉네임 변경 기능
- 사용 기술
  - API 통신은 json-server 이용
  - 인증과 프로필 관리를 위한 API 통신은 제공된 jwt 인증서버 이용
  - fetch 대신 axios
  - Redux Toolkit 사용

### 선택요구사항

- Custom Hook 구현
- 로컬스토리지 이용



## 🚩 개발 내용

### 💻 개발 환경

- IDE: Visual Studio Code
- OS: windows, Mac
- Package Manager: Yarn Classic (v1.22.19)
- React boilerplate: create-react-app

### 📌 사용 기술
- React - 사용자와 상호작용할 수 있는 UI를 효율적으로 구현
- Styled-components - 자바스크립트로 스타일 관리. 재사용이 쉬운 컴포넌트를 만들고 동적 스타일링 용이
- Redux Toolkit - 전역 상태 관리 도구, 비동기 통신 처리
- React-router-dom - 클라이언트 사이드 라우팅. URL에 맞는 컴포넌트 렌더링
- Json-server: REST API를 생성하여 실제 데이터 없이 개발 및 테스트
- Glitch: 무료로 프로젝트를 호스팅할 수 있는 플랫폼. json-server 배포.

### 🌐 페이지
- `/`: 메인 페이지
- `/login`: 로그인 페이지
- `/detail/:id/`: 팬레터 상세 페이지
- `/profile`: 프로필 페이지

### 📷 화면

| 로그인                                                       | 회원가입                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image](https://github.com/scseong/nbc-fanpage-server/assets/82589401/f4f75ee5-bbec-438c-b626-d921ec3e75e4) | ![image](https://github.com/scseong/nbc-fanpage-server/assets/82589401/5917c4ef-9f1b-495e-bba6-0084690088ca) |

| 프로필                                                       |       상세페이지                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image](https://github.com/scseong/nbc-fanpage-auth/assets/82589401/974357a1-b1dd-4d5e-b66a-db3440baafc3) |       ![image](https://github.com/scseong/nbc-fanpage-server/assets/82589401/6b4e2596-b690-4078-aa7f-76ded8eadb8d) |

| 메인페이지                                                   |      
| ------------------------------------------------------------ |
| ![image](https://github.com/scseong/nbc-fanpage-server/assets/82589401/f9c24f74-c02a-4fab-a893-a06473635eb0) |      |

### 🎯개발 중점 사항

- 비동기 작업
  - API 응답 데이터를 가져오고 async/await를 사용하여 응답을 기다리고 상태를 Redux로 관리해 UI를 실시간으로 업데이트
- 상태 관리
  - Redux Toolkit을 사용하여 애플리케이션 전역 상태를 효율적으로 관리
- 라우팅
  - 인가된 사용자만 서비스를 이용할 수 있도록 동적으로 페이지 라우팅
- REST API
  - json-server와 실제 서버를 활용하여 API 요청과 응답 처리
