import React, { useState } from 'react';
import './AddTodo.modules.css';

export default function AddTodo({ setToDos }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleInputChange = (e) => setTitle(e.target.value);
  const handleBodyInputChange = (e) => setBody(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title,
      body,
      isDone: false,
    };

    setTitle('');
    setBody('');
    setToDos((prev) => [...prev, newTodo]);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <h2>할 일을 추가하세요.</h2>
      <label htmlFor="title">제목</label>
      <input
        id="title"
        type="text"
        placeholder="제목을 입력하세요."
        value={title}
        onChange={handleTitleInputChange}
        required
      />
      <label htmlFor="body">내용</label>
      <input
        id="body"
        type="text"
        placeholder="할 일을 입력하세요."
        value={body}
        onChange={handleBodyInputChange}
        required
      />
      <button type="submit" className="form-btn">
        만들기
      </button>
    </form>
  );
}
