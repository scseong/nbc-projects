import React from 'react';
import GlobalStyles from 'GlobalStyles';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
}
