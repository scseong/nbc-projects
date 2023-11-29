import React from 'react';
import GlobalStyles from 'GlobalStyles';
import { Provider } from 'react-redux';
import store from 'redux/config/configStore';
import Router from 'Router';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  );
}
