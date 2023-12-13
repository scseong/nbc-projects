import React from 'react';
import useTodo from 'src/hooks/useTodo';
import { Todo } from 'src/types/db';

interface TodoItemProps {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
}

export default function TodoItem({
  id,
  title,
  content,
  isDone,
}: TodoItemProps) {
  const { deleteTodo, completeTodo } = useTodo();
  const handleDeleteTodo = () => deleteTodo(id);
  const handleToggleComplete = () => completeTodo(id);

  return (
    <div>
      <p>Todo: {title}</p>
      <p>Content: {content}</p>
      <button onClick={handleToggleComplete}>
        {isDone ? '완료' : '진행중'}
      </button>
      <button onClick={handleDeleteTodo}>삭제</button>
    </div>
  );
}
