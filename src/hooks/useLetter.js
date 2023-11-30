import { useSelector, useDispatch } from 'react-redux';

export const useLetter = () => {
  const letters = useSelector(({ letters }) => letters.letters);
  const dispatch = useDispatch();
  const setLetters = (letter, execFunc) => {
    dispatch(execFunc(letter));
  };

  return { letters, setLetters };
};
