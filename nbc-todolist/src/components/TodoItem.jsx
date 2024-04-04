import React from 'react';
import './TodoItem.modules.css';

export default function TodoItem({ todo, onDelete, onUpdate }) {
  const { id, title, body, isDone } = todo;

  const handleDelete = () => onDelete(todo);
  const handleUpdate = () => onUpdate(todo);

  return (
    <li className="todo-item" key={id}>
      <p className="todo-title" title={title}>
        {title}
      </p>
      <p className="todo-body">{body}</p>
      <div>
        <button onClick={handleDelete} className="todo-btn">
          삭제
        </button>
        <button onClick={handleUpdate} className="todo-btn">
          {isDone ? '취소' : '완료'}
        </button>
      </div>
    </li>
  );
}
