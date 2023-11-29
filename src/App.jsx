import React from 'react';
import GlobalStyles from 'GlobalStyles';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/config/configStore';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Outlet />
    </Provider>
  );
}
