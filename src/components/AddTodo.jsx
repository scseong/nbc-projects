import React, { useState } from 'react';
import './AddTodo.modules.css';

export default function AddTodo({ setToDos }) {
  const [todo, setTodo] = useState({
    title: '',
    body: '',
  });

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDos((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: todo.title,
        body: todo.body,
        isDone: false,
      },
    ]);
    setTodo({ title: '', body: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <h2>할 일을 추가하세요.</h2>
      <label htmlFor="title">제목</label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="제목을 입력하세요."
        value={todo.title}
        onChange={handleChange}
        required
      />
      <label htmlFor="body">내용</label>
      <input
        id="body"
        type="text"
        name="body"
        placeholder="할 일을 입력하세요."
        value={todo.body}
        onChange={handleChange}
        required
      />
      <button type="submit" className="form-btn">
        만들기
      </button>
    </form>
  );
}
