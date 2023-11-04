import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import './TodoList.modules.css';

const filterTodos = (todos) => {
  const doingTodos = todos.filter((todo) => todo.isDone === false);
  const doneTodos = todos.filter((todo) => todo.isDone === true);
  return { doingTodos, doneTodos };
};

export default function TodoList() {
  const [todos, setToDos] = useState([]);
  const { doingTodos, doneTodos } = filterTodos(todos);

  const deleteTodo = (todoId) => {
    const result = window.confirm('정말로 삭제하시겠습니까?');
    if (!result) return;

    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setToDos(filteredTodos);
  };

  const toggleTodoState = (todoId) => {
    const copyTodos = [...todos];
    const targetIndex = copyTodos.findIndex((todo) => todo.id === todoId);
    copyTodos[targetIndex].isDone = !copyTodos[targetIndex].isDone;
    setToDos(copyTodos);
  };

  return (
    <main className="container">
      <h1>"나의 할 일 목록"</h1>
      <section>
        <AddTodo setToDos={setToDos} />
      </section>
      <section className="todo">
        <div className="todo-box">
          <h3>🔥 진행중</h3>
          <TodoItem
            todos={doingTodos}
            deleteTodo={deleteTodo}
            toggleTodoState={toggleTodoState}
          />
        </div>
        <div className="todo-box">
          <h3>✅ 완료</h3>
          <TodoItem
            todos={doneTodos}
            deleteTodo={deleteTodo}
            toggleTodoState={toggleTodoState}
          />
        </div>
      </section>
    </main>
  );
}
