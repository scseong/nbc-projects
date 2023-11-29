import LoginForm from 'components/Auth/LoginForm';
import SignupForm from 'components/Auth/SignupForm';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Login({ user }) {
  const [toggle, setToggle] = useState(true);

  const onToggle = () => setToggle((prev) => !prev);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {toggle ? (
        <LoginForm onToggle={onToggle} />
      ) : (
        <SignupForm onToggle={onToggle} />
      )}
    </>
  );
}
