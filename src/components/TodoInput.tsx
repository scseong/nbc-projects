import React from 'react';
import useInput from 'src/hooks/useInput';
import useTodo from 'src/hooks/useTodo';
import styles from './TodoInput.module.css';

export default function TodoInput() {
  const [title, onChangeTitle, setTitleValue] = useInput('');
  const [content, onChangeContent, setContentValue] = useInput('');
  const { addTodoMutate } = useTodo();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newTodo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };

    addTodoMutate(newTodo);
    setTitleValue('');
    setContentValue('');
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2 className={styles['form-title']}>할 일 추가</h2>
      <label htmlFor="title" />
      <input
        className={styles.input}
        value={title}
        onChange={onChangeTitle}
        type="text"
        id="title"
        placeholder="할 일 제목"
      />
      <label htmlFor="content" />
      <input
        className={styles.input}
        value={content}
        onChange={onChangeContent}
        type="text"
        id="content"
        placeholder="할 일 내용"
      />
      <button className={styles['add-btn']}>추가</button>
    </form>
  );
}
