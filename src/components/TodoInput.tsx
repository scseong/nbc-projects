import React from 'react';
import useInput from 'src/hooks/useInput';
import useTodo from 'src/hooks/useTodo';

export default function TodoInput() {
  const [title, onChangeTitle, setTitleValue] = useInput('');
  const [content, onChangeContent, setContentValue] = useInput('');
  const { addTodo } = useTodo();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newTodo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };

    addTodo(newTodo);
    setTitleValue('');
    setContentValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title" />
      <input
        value={title}
        onChange={onChangeTitle}
        type="text"
        id="title"
        placeholder="할 일 제목"
      />
      <label htmlFor="content" />
      <input
        value={content}
        onChange={onChangeContent}
        type="text"
        id="content"
        placeholder="할 일 내용"
      />
      <button>추가</button>
    </form>
  );
}
