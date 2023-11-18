const initialState = JSON.parse(localStorage.getItem('letters')) || [];

export const CREATE_LETTER = 'CREATE_LETTER';
export const UPDATE_LETTER = 'UPDATE_LETTER';
export const DELETE_LETTER = 'DELETE_LETTER';

export const createLetter = (payload) => {
  return {
    type: CREATE_LETTER,
    payload,
  };
};

export const updateLetter = (payload) => {
  return {
    type: UPDATE_LETTER,
    payload,
  };
};

export const deleteLetter = (payload) => {
  return {
    type: DELETE_LETTER,
    payload,
  };
};

const letter = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LETTER:
      const createdLetters = [...state, action.payload];
      localStorage.setItem('letters', JSON.stringify(createdLetters));
      return createdLetters;

    case DELETE_LETTER:
      const deletedLetters = state.filter((item) => item.id !== action.payload);
      localStorage.setItem('letters', JSON.stringify(deletedLetters));
      return deletedLetters;

    case UPDATE_LETTER:
      const { letterId, editContent } = action.payload;
      const updatedLetters = [...state];
      const targetIdx = updatedLetters.findIndex(
        (letter) => letter.id === letterId,
      );
      updatedLetters[targetIdx].content = editContent;
      localStorage.setItem('letters', JSON.stringify(updatedLetters));
      return updatedLetters;
    default:
      return state;
  }
};

export default letter;
