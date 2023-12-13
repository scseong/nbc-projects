import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addTodoItem,
  completeTodoItem,
  deleteTodoItem,
  getTodos,
} from 'src/api/todos';
import { Todo } from 'types/db';

export default function useTodo() {
  const queryClient = useQueryClient();
  const { data: todos } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  const { mutate: addTodoMutate } = useMutation({
    mutationFn: addTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const { mutate: deleteTodoMutate } = useMutation({
    mutationFn: deleteTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const { mutate: completeTodoMutate } = useMutation({
    mutationFn: completeTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return { todos, addTodoMutate, deleteTodoMutate, completeTodoMutate };
}
