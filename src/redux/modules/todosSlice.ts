import { createSlice } from '@reduxjs/toolkit';
import { Todo } from 'src/types/db';

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push(action.payload);
    },
    remove: (state, action) => {
      state.todos = state.todos.splice(action.payload, 1);
    },
    complete: (state, action) => {
      const targetIdx = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos[targetIdx].isDone = !state.todos[targetIdx].isDone;
    },
  },
});

export const { add, remove, complete } = todosSlice.actions;
export default todosSlice.reducer;
