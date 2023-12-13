import { Todo } from 'types/db';
import { todoApi } from './base';

export const getTodos = async () => {
  const res = await todoApi.get('/todos');
  return res.data;
};

export const addTodoItem = async (newTodo: Todo) => {
  const res = await todoApi.post('/todos', newTodo);
  return res.data;
};

export const deleteTodoItem = async (id: number) => {
  const res = await todoApi.delete(`/todos/${id}`);
  return res.data;
};

export const completeTodoItem = async (todo: Todo) => {
  const res = await todoApi.patch(`/todos/${todo.id}`, todo);
  return res.data;
};
