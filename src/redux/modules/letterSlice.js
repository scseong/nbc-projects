import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  letters: JSON.parse(localStorage.getItem('letters')) || [],
};

const letterSlice = createSlice({
  name: 'letter',
  initialState,
  reducers: {
    createLetter: (state, action) => {
      localStorage.setItem(
        'letters',
        JSON.stringify([...state.letters, action.payload]),
      );
      state.letters.push(action.payload);
    },
    deleteLetter: (state, action) => {
      const deletedLetters = state.letters.filter(
        (item) => item.id !== action.payload,
      );
      localStorage.setItem('letters', JSON.stringify(deletedLetters));
      state.letters = deletedLetters;
    },
    updateLetter: (state, action) => {
      const { letterId, editContent } = action.payload;
      const targetIdx = state.letters.findIndex(
        (letter) => letter.id === letterId,
      );
      state.letters[targetIdx].content = editContent;
      localStorage.setItem('letters', JSON.stringify(state.letters));
    },
  },
});

export const { createLetter, deleteLetter, updateLetter } = letterSlice.actions;
export default letterSlice.reducer;
