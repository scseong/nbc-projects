import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

export default function App() {
  const [todos, setToDos] = useState([]);

  const handleAdd = (inserted) => setToDos([...todos, inserted]);
  const handleUpdate = (updated) => {
    updated.isDone = !updated.isDone;
    setToDos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  const handleDelete = (deleted) => {
    const result = window.confirm('정말로 삭제하시겠습니까?');
    if (!result) return;

    setToDos(todos.filter((todo) => todo.id !== deleted.id));
  };

  return (
    <main className="container">
      <h1>"나의 할 일 목록"</h1>
      <AddTodo onAddTodo={handleAdd} />
      <TodoList
        todos={todos}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </main>
  );
}
