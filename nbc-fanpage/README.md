# 내배캠 React 3기 숙련주차 개인 과제

그룹 아티스트 팬레터함 만들기

## 🚩 과제 개요

**23. 11. 10 - 23. 11. 20**

- React를 사용해 그룹 아티스트 팬레터함 만들기
- styled-components을 이용한 컴포넌트 스타일링
- react-router-dom을 활용한 페이지 이동
- context API, redux를 이용한 전역 상태 관리

## 🚩 요구사항

### 필수요구사항

- 팬레터 CRUD 구현 (작성, 조회, 수정, 삭제)
- 아티스트별 게시물 조회 기능 구현 (Home - Read)
- 원하는 아티스트에게 팬레터 등록 구현 (Home - Create)
- 팬레터 상세 화면 구현 (Detail - Read)
- 상세화면에서 팬레터 내용 수정 구현 (Detail - Update)
- 상세화면에서 팬레터 삭제 구현 (Detail - Delete)
- styled-components만을 이용한 스타일링 & 조건부 스타일링
- reset.css 적용 & box-sizing: border-box 적용
- id는 uuid [라이브러리](https://www.npmjs.com/package//uuid) 이용

## 🚩 구현 

| 멤버별 팬레터 필터링                                         | 팬레터 CRUD                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![스크린 캡처_20231120_102331](https://github.com/scseong/nbc-fanpage/assets/82589401/c69cfd14-8cfa-449c-8e24-4cc2e8434e8a)| ![스크린 캡처_20231120_105043](https://github.com/scseong/nbc-fanpage/assets/82589401/64d43950-0cae-405a-a48a-c8c4644c5cc8) |

- 멤버 카드를 선택하면 해당 멤버별로 작성된 팬레터 표시
- 해당 멤버에게 팬 레터 작성
- 화면의 팬 레터를 클릭하면 상세페이지로 이동
- 상세페이지에서 버튼을 눌러 수정/삭제 가능
