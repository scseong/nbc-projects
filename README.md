# 내배캠 React 3기 React 개인 과제

Todo List 만들기

## 🚩 과제 개요

**23. 11. 03 - 23. 11. 06**

```
- 리액트를 사용해 Todo List 만들기
- vercel을 이용한 배포
- 질문 답변 후 제출
```

## 🚩 요구사항

- 제목과 내용을 입력받아 추가하면 Working에 새로운 ToDo 생성
  - input 값은 빈 값으로 초기화
- 조건부 렌더링
  - isDon 상태가 true이면 상태 버튼의 라벨을 취소, false이면 완료
- Todo의 상태가 Working이면 화면 상단에 위치, Done이면 화면 하단에 위치
- Layout: 최대 넓이 1200px, 최소 넓이 800px, 전체 화면의 가운데 정렬
- 컴포넌트 구조는 자유롭게. 이후 분리한 컴포넌트는 README에 작성

## 🚩 컴포넌트

```
📦nbc-todolist
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜AddTodo.jsx
 ┃ ┃ ┣ 📜AddTodo.modules.css
 ┃ ┃ ┣ 📜TodoItem.jsx
 ┃ ┃ ┣ 📜TodoItem.modules.css
 ┃ ┃ ┣ 📜TodoList.jsx
 ┃ ┃ ┗ 📜TodoList.modules.css
 ┃ ┣ 📂static
 ┃ ┃ ┗ 📂fonts
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.js
 ┃ ┣ 📜reset.css
 ┃ ┗ 📜variables.css
```

- AddTodo Component - 사용자의 입력을 받아 ToDo를 생성
- TodoItem Component - todo 배열을 전달 받아 순회하며 목록을 보여주는 UI 컴포넌트
- TodoList Component - todolist 전체 UI 컴포넌트
- App Component - 애플리케이션 구조 담당, todo 상태관리, 이벤트 처리 메인 컴포넌트.
