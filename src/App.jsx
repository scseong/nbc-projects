import React, { useEffect } from 'react';
import GlobalStyles from 'GlobalStyles';
import Router from 'Router';
import { useDispatch } from 'react-redux';
import { __getLetters } from 'redux/modules/letterSlice';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getLetters());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}
