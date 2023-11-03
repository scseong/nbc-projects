import React from 'react';
import './TodoItem.modules.css';

export default function TodoItem({ todo, deleteTodo, toogleTodoState }) {
  const { id, title, body, isDone } = todo;

  const handleClickDeleteBtn = () => {
    const result = window.confirm('정말로 삭제하시겠습니까?');
    if (result) deleteTodo(id);
  };
  const handleClickToggleBtn = () => toogleTodoState(id);

  return (
    <li className="todo-item">
      <p className="todo-title">{title}</p>
      <p className="todo-body">{body}</p>
      <div>
        <button onClick={handleClickDeleteBtn} className="todo-btn">
          삭제
        </button>
        <button onClick={handleClickToggleBtn} className="todo-btn">
          {isDone ? '취소' : '완료'}
        </button>
      </div>
    </li>
  );
}
