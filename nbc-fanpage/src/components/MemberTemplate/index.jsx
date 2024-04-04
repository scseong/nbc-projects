import React from 'react';
import { Provider } from 'react-redux';
import Member from 'components/Member';
import Letter from 'components/Letter';
import store from 'redux/config/configStore';
import LetterForm from 'components/LetterForm';

export default function MemberTemplate() {
  return (
    <Provider store={store}>
      <Member />
      <Letter />
      <LetterForm />
    </Provider>
  );
}
