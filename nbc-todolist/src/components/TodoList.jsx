import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.modules.css';

export default function TodoList({ todos, handleUpdate, handleDelete }) {
  const { doingTodos, doneTodos } = filterTodos(todos);

  return (
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
  );
}

const filterTodos = (todos) => {
  const doingTodos = todos.filter((todo) => todo.isDone === false);
  const doneTodos = todos.filter((todo) => todo.isDone === true);
  return { doingTodos, doneTodos };
};
