import React from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';
import { useTodos } from 'src/hooks';
import Loading from './Loading';

export default function TodoList() {
  const { isLoading, isFetching, todoList, doneList } = useTodos();

  if (isLoading || isFetching) {
    return <Loading />;
  }

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>TODOLIST 만들기</h1>
      <TodoInput />
      <section>
        <h2 className={styles.progress}>진행중</h2>
        {todoList.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </section>
      <section>
        <h2 className={styles.progress}>완료</h2>
        {doneList.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </section>
    </main>
  );
}
