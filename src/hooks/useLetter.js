import { useSelector, useDispatch } from 'react-redux';
import {
  CREATE_LETTER,
  UPDATE_LETTER,
  DELETE_LETTER,
  createLetter,
  updateLetter,
  deleteLetter,
} from 'redux/modules/Letters';

const switchFunc = (type) => {
  switch (type) {
    case CREATE_LETTER:
      return createLetter;
    case UPDATE_LETTER:
      return updateLetter;
    case DELETE_LETTER:
      return deleteLetter;
    default:
  }
};

export const useLetter = () => {
  const letters = useSelector(({ letter }) => letter);
  const dispatch = useDispatch();
  const setLetter = (letter, type) => {
    const execFunc = switchFunc(type);
    dispatch(execFunc(letter));
  };

  return [letters, setLetter];
};
