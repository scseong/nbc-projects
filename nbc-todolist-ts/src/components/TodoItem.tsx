import React from 'react';
import Swal from 'sweetalert2';
import styles from './TodoItem.module.css';
import { useTodos } from 'src/hooks';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { title, content, id, isDone } = todo;
  const { deleteTodo, completeTodo } = useTodos();

  const handleDeleteTodo = () => {
    Swal.fire({
      title: '정말로 삭제하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '삭제',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#888',
      cancelButtonText: '취소',
      focusCancel: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('삭제 완료', '', 'success');
        deleteTodo(id);
      }
    });
  };
  const handleToggleComplete = () => completeTodo({ ...todo, isDone: !isDone });

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Todo: {title}</h3>
      <p className={styles.content}>Content: {content}</p>
      <button className={styles.progress_btn} onClick={handleToggleComplete}>
        {isDone ? '완료' : '진행중'}
      </button>
      <button className={styles.del_btn} onClick={handleDeleteTodo}>
        삭제
      </button>
    </div>
  );
}
