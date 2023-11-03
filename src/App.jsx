import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import './App.css';

const filterTodos = (todos) => {
  const doingTodos = todos.filter((todo) => todo.isDone === false);
  const doneTodos = todos.filter((todo) => todo.isDone === true);
  return { doingTodos, doneTodos };
};

export default function App() {
  const [todos, setToDos] = useState([
    { id: 0, title: '제목', body: '내용', isDone: false },
  ]);
  const { doingTodos, doneTodos } = filterTodos(todos);

  const deleteTodo = (todoId) => {
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
    <div className="container">
      <h1>"나의 할 일 목록"</h1>
      <section>
        <AddTodo setToDos={setToDos} />
      </section>
      <section className="todo">
        <div className="todo-box">
          <h3>🔥 진행중</h3>
          <ul className="todo-list">
            {doingTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodoState={toggleTodoState}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
        </div>
        <div className="todo-box">
          <h3>✅ 완료</h3>
          <ul className="todo-list">
            {doneTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodoState={toggleTodoState}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
