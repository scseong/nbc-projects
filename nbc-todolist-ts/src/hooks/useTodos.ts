import { useEffect, useState } from 'react';
import useTodoQuery from 'src/query/useTodoQuery';

export default function useTodos() {
  const {
    isLoading,
    isError,
    isFetching,
    todos,
    addTodoMutatation,
    deleteTodoMutatation,
    completeTodoMutatation,
  } = useTodoQuery();

  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [doneList, setDoneList] = useState<Todo[]>([]);

  useEffect(() => {
    if (isLoading) return;

    const filtedTodos = todos.filter((todo) => todo.isDone);
    const filteredDoneTodos = todos.filter((todo) => !todo.isDone);

    setTodoList(filtedTodos);
    setDoneList(filteredDoneTodos);
  }, [isLoading, todos]);

  const addTodo = (newTodo: Todo) => {
    addTodoMutatation.mutate(newTodo);
  };

  const deleteTodo = (id: number) => {
    deleteTodoMutatation.mutate(id);
  };

  const completeTodo = (updatedTodo: Todo) => {
    completeTodoMutatation.mutate(updatedTodo);
  };

  return {
    isLoading,
    isError,
    isFetching,
    todoList,
    doneList,
    addTodo,
    deleteTodo,
    completeTodo,
  };
}
