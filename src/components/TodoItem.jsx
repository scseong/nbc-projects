import React from 'react';
import './TodoItem.modules.css';

export default function TodoItem({ todos, deleteTodo, toggleTodoState }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className="todo-item" key={todo.id}>
          <p className="todo-title" title={todo.title}>
            {todo.title}
          </p>
          <p className="todo-body">{todo.body}</p>
          <div>
            <button onClick={() => deleteTodo(todo.id)} className="todo-btn">
              삭제
            </button>
            <button
              onClick={() => toggleTodoState(todo.id)}
              className="todo-btn"
            >
              {todo.isDone ? '취소' : '완료'}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
