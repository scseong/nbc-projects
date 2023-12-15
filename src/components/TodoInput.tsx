import React, { memo } from 'react';
import styles from './TodoInput.module.css';
import { useInput, useTodos } from 'src/hooks';
import Swal from 'sweetalert2';

function TodoInput() {
  const [title, onChangeTitle, setTitleValue] = useInput('');
  const [content, onChangeContent, setContentValue] = useInput('');
  const { addTodo } = useTodos();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: 'warning',
        title: '제목과 내용 모두 입력해주세요.',
      });
      return;
    }

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
    <form className={styles.form} onSubmit={onSubmit}>
      <h2 className={styles.form_title}>할 일 추가</h2>
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
      <button className={styles.add_btn}>추가</button>
    </form>
  );
}

export default memo(TodoInput);
