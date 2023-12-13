import React from 'react';
import TodoInput from './TodoInput';
import useTodo from 'src/hooks/useTodo';
import TodoItem from './TodoItem';
import { Todo } from 'src/types/db';

export default function TodoList() {
  const { todos } = useTodo();

  return (
    <>
      <h1>TODOLIST 만들기</h1>
      <TodoInput />
      <h2>진행중</h2>
      {todos
        ?.filter((todo) => !todo.isDone)
        .map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            content={todo.content}
            isDone={todo.isDone}
          />
        ))}
      <h2>완료</h2>
      {todos
        ?.filter((todo) => todo.isDone)
        .map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            content={todo.content}
            isDone={todo.isDone}
          />
        ))}
    </>
  );
}
