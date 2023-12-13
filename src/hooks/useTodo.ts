import { add, complete, remove } from 'src/redux/modules/todosSlice';
import { useAppDispatch, useAppSelector } from '../types/hooks';
import { Todo } from 'types/db';

export default function useTodo() {
  const todos = useAppSelector(({ todosReducer }) => todosReducer.todos);
  const dispatch = useAppDispatch();

  const addTodo = (newTodo: Todo) => dispatch(add(newTodo));
  const deleteTodo = (id: number) => dispatch(remove(id));
  const completeTodo = (id: number) => dispatch(complete(id));

  return { todos, addTodo, deleteTodo, completeTodo };
}
