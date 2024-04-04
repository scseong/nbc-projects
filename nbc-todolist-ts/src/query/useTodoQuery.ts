import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addTodoItem,
  completeTodoItem,
  deleteTodoItem,
  getTodos,
} from 'src/api/todos';

const QUERY_KEY = 'todos';

export default function useTodoQuery() {
  const queryClient = useQueryClient();
  const {
    isLoading,
    isError,
    isFetching,
    data: todos = [],
  } = useQuery<Todo[]>({
    queryKey: [QUERY_KEY],
    queryFn: getTodos,
    staleTime: 1000,
    refetchOnMount: true,
  });

  const addTodoMutatation = useMutation({
    mutationFn: addTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  const deleteTodoMutatation = useMutation({
    mutationFn: deleteTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  const completeTodoMutatation = useMutation({
    mutationFn: completeTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  return {
    isLoading,
    isError,
    isFetching,
    todos,
    addTodoMutatation,
    deleteTodoMutatation,
    completeTodoMutatation,
  };
}
