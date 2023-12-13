import React from 'react';
import useTodo from 'src/hooks/useTodo';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Todo } from 'src/types/db';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { title, content, id, isDone } = todo;
  const MySwal = withReactContent(Swal);
  const { deleteTodoMutate, completeTodoMutate } = useTodo();

  const handleDeleteTodo = () => {
    MySwal.fire({
      title: '정말로 삭제하시겠습니까?',
      showCancelButton: true,
      confirmButtonText: '삭제',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('삭제 완료', '', 'success');
        deleteTodoMutate(id);
      }
    });
  };
  const handleToggleComplete = () =>
    completeTodoMutate({ ...todo, isDone: !isDone });

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Todo: {title}</h3>
      <p className={styles.content}>Content: {content}</p>
      <button className={styles['progress-btn']} onClick={handleToggleComplete}>
        {isDone ? '완료' : '진행중'}
      </button>
      <button className={styles['del-btn']} onClick={handleDeleteTodo}>
        삭제
      </button>
    </div>
  );
}
