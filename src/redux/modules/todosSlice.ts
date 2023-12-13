import { createSlice } from '@reduxjs/toolkit';
import { Todo } from 'types/db';

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export const counterSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;
export default counterSlice.reducer;
