import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import './TodoList.modules.css';

export default function TodoList() {
  const [todos, setToDos] = useState([]);
  const { doingTodos, doneTodos } = filterTodos(todos);

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
      <section>
        <AddTodo onAddTodo={handleAdd} />
      </section>
      <section className="todo">
        <div className="todo-box">
          <h3>🔥 진행중</h3>
          <ul className="todo-list">
            {doingTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
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
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

const filterTodos = (todos) => {
  const doingTodos = todos.filter((todo) => todo.isDone === false);
  const doneTodos = todos.filter((todo) => todo.isDone === true);
  return { doingTodos, doneTodos };
};
