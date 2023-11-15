import React from 'react';
import { StHeader } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <StHeader>
      <nav>
        <ul>
          <Link to="/">
            <li>home</li>
          </Link>
          <li>member</li>
        </ul>
        <h1>
          <Logo fill="white" width="200" height="70" stroke="white" />
        </h1>
        <ul>{/* <li>about</li> */}</ul>
      </nav>
    </StHeader>
  );
}
