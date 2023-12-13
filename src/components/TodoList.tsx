import React from 'react';
import TodoInput from './TodoInput';
import useTodo from 'src/hooks/useTodo';
import TodoItem from './TodoItem';
import { Todo } from 'src/types/db';
import styles from './TodoList.module.css';

export default function TodoList() {
  const { todos } = useTodo();

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>TODOLIST 만들기</h1>
      <TodoInput />
      <h2 className={styles.progress}>진행중</h2>
      {todos
        ?.filter((todo) => !todo.isDone)
        .map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      <h2 className={styles.progress}>완료</h2>
      {todos
        ?.filter((todo) => todo.isDone)
        .map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </main>
  );
}
