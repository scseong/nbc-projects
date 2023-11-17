import React from 'react';
import Header from 'components/Header';
import DetailLetter from 'components/DetailLetter';
import useLocalStorage from 'hooks/useLocalStorage';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const [messages, setMessages] = useLocalStorage('message', []);

  return (
    <>
      <Header />
      <DetailLetter id={id} messages={messages} setMessages={setMessages} />;
    </>
  );
}
