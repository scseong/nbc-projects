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
- TodoItem Component - todo 배열을 전달 받아 순회하며 할 일 보여주는 UI
- TodoList Component - todo 상태관리, 이벤트 처리 등 작업 수행하는 컨테이너
- App Component - root에 표시되는 메인 컴포넌트.

## 🚩 질문

### 1.JSX 문법이란 무엇일까요?

React 컴포넌트 작성을 손쉽게 하는 구문. 자바스크립트 코드 내에서 HTML처럼 보이는 문법을 사용할 수 있다. JSX는 React 엘리먼트(element)를 생성한다.

### 2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이들과 같은 애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요?

`useState` React Hook을 사용했다.

### 3. 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?

부모 컴포넌트에서 자식 컴포넌트로 props로 전달하였다. 부모 컴포넌트에서 전달한 속성 이름으로 자식 컴포넌트에서 같은 이름으로 받아서 사용했다.

### 4. 기능 구현을 위해 **불변성 유지가** 필요한 부분이 있었다면 하나만 설명해 주세요.

Todo의 완료 상태를 변경하기 위해 선택한 todo의 isDone을 변경해야 했다. 상태로 관리하고 있던 `todos`은 여러 개의 객체를 포함한 배열이다. 배열 내의 객체 프로퍼티의 값을 변경하더라도 객체 참조 값은 변하지 않기 때문에 리액트는 상태 변화로 간주하지 않는다.

스프레드 연산자를 사용해 `todos`의 복사본을 생성하였고 id값을 전달 받아 해당 todo의 isDone 값을 변경시켜 setState 함수인 `setToDos`의 매개변수로 복사본을 전달해서 상태를 변경했다.

```jsx
const toggleTodoState = (todoId) => {
  const copyTodos = [...todos];
  const targetIndex = copyTodos.findIndex((todo) => todo.id === todoId);
  copyTodos[targetIndex].isDone = !copyTodos[targetIndex].isDone;
  setToDos(copyTodos);
};
```

### 5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?** 그렇다면 **어떠한 이점이 있었나요?**

ul 태그 아래에 Todo 목록들을 보여주는 li 태그들을 컴포넌트로 만들어 분리했다. todo가 5개가 있다고 하면 li 태그를 다섯 번 반복해서 작성했어야 했다. `todos`를 순회하며 컴포넌트에 props로 데이터를 전달하니 코드가 간결해졌고 파일이 분리되어 유지보수가 더 쉬웠다.
