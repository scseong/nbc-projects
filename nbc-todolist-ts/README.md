## 내배캠 React 3기 TypeScript 개인 과제

### 📢 과제 개요

**23. 12. 13 - 23. 12. 13**

- 과제: Typescript를 사용해 투두리스트 만들기 
- 내용: Level 1 ~ 5 중 하나를 선택하여, Typescript 버전으로 작성

```
- 레벨1 : React 이용 Todolist
- 레벨2 : RTK 이용 Todolist
- 레벨3 : RTK + json-server 이용 Todolist
- 레벨4 : RTK + redux thunk 이용 Todolist
- 레벨5 : RTK + react-query 이용 Todolist
```

### 🎨 구현 화면

![React App - Chrome 2023-12-13 18-10-04](https://github.com/nbcamp-a3/my-best-project/assets/82589401/e6ddd481-28d4-477e-8806-37b66bc57d7c)

### 📑 사용 기술

- React - 사용자와 상호작용할 수 있는 UI를 효율적으로 구현
- postcss - JS 플러그인을 사용하여 스타일을 변환하는 도구
- Redux Toolkit - 전역 상태 관리 도구
- React Query - 비동기 관련 로직과 상태 관리
- Json Server - 클라이언트의 HTTP 요청에 대해 JSON 파일을 기반으로 API 제공

### 💡 필수 구현 사항

- Todo 항목 추가 하기
  - 사용자가 새로운 Todo 항목을 입력하고 추가
- Todo 항목 목록 표시 기능
  - 각 Todo 항목은 고유 식별자를 가짐
- Todo 삭제 하기
  - 삭제 시 사용자에게 삭제 확인 요청
- Todo 완료 상태 표시 기능
  - 사용자가 Todo 항목을 완료했음을 표시
- 제출을 위한 GIT 관련 내용
  - 선택한 레벨에 맞는 branch명을 생성

### 📌 요구 사항 

- 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성
- Todo의 **isDone 상태가 true이면, 상태 버튼의 라벨을 `취소`, isDone이 false 이면 라벨을 `완료`** 로 조건부 렌더링
- Todo의 상태가 `Working` 이면 위쪽에 위치하고, `Done`이면 아래쪽에 위치하도록 구현
- Layout의 최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한하고, 전체 화면의 가운데로 정렬
- 컴포넌트 구조는 자유롭게

### 📂 디렉토리 구조

```
📦nbc-todolist-ts
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂api 
 ┃ ┃ ┣ 📜base.ts - API 호출을 위한 기본 설정 파일
 ┃ ┃ ┗ 📜todos.ts - 투두리스트 관련 API 요청 정의
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜TodoInput.module.css
 ┃ ┃ ┣ 📜TodoInput.tsx - 투두 입력 컴포넌트
 ┃ ┃ ┣ 📜TodoItem.module.css
 ┃ ┃ ┣ 📜TodoItem.tsx - 투두 아이템 컴포넌트
 ┃ ┃ ┣ 📜TodoList.module.css
 ┃ ┃ ┗ 📜TodoList.tsx - 투두 목록 컴포넌트
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜useInput.ts - 입력을 처리하는 커스텀 훅
 ┃ ┃ ┗ 📜useTodo.ts - 투두리스트 데이터 관리, 상태 업데이트하는 커스텀 훅
 ┃ ┣ 📂redux
 ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┗ 📜store.ts - redux store 설정 파일
 ┃ ┃ ┗ 📂modules
 ┃ ┃ ┃ ┗ 📜todosSlice.ts - 투두리스트 관련 redux slice 정의
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜db.ts - 모델 정의
 ┃ ┃ ┗ 📜hooks.ts - 커스텀 훅에서 사용되는 타입 정의
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜react.d.ts
 ┣ 📜.gitignore
 ┣ 📜db.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock
```
