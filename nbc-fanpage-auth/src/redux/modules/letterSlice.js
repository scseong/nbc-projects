import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiWithLetter } from 'apis/api';

const initialState = {
  letters: [],
  isLoading: false,
  error: null,
};

export const __getLetters = createAsyncThunk(
  'getLetters',
  async (_, thunkAPI) => {
    try {
      const { data } = await apiWithLetter.get(
        '/letters?_sort=createdAt&_order=desc',
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __createLetter = createAsyncThunk(
  'createLetter',
  async (payload, thunkAPI) => {
    try {
      const { data } = await apiWithLetter.post('/letters', payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __deleteLetter = createAsyncThunk(
  'deleteLetter',
  async (payload, thunkAPI) => {
    try {
      await apiWithLetter.delete(`/letters/${payload}`);
      thunkAPI.dispatch(__getLetters());
      return thunkAPI.fulfillWithValue();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __updateLetter = createAsyncThunk(
  'updateLetter',
  async (payload, thunkAPI) => {
    try {
      const { data } = await apiWithLetter.patch(
        `/letters/${payload.letterId}`,
        {
          content: payload.editContent,
        },
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const letterSlice = createSlice({
  name: 'letter',
  initialState,
  reducers: {},
  extraReducers: {
    // __getLetters
    [__getLetters.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [__getLetters.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.letters = action.payload;
    },
    [__getLetters.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // __createLetter
    [__createLetter.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [__createLetter.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.letters.push(action.payload);
    },
    [__createLetter.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // __deleteLetter
    [__deleteLetter.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [__deleteLetter.fulfilled]: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    [__deleteLetter.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // __updateLetter
    [__updateLetter.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [__updateLetter.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const targetIndex = state.letters.findIndex(
        (letter) => letter.id === action.payload.id,
      );
      state.letters[targetIndex] = action.payload;
    },
    [__updateLetter.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { createLetter, deleteLetter, updateLetter } = letterSlice.actions;
export default letterSlice.reducer;
