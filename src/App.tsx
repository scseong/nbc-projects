import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TodoList from './components/TodoList';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
    </QueryClientProvider>
  );
}
