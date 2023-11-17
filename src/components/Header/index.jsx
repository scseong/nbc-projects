import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { StHeader } from './styles';

export default function Header() {
  return (
    <StHeader>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              home
            </NavLink>
          </li>
        </ul>
        <h1>
          <Logo fill="white" width="200" height="70" stroke="white" />
        </h1>
        <ul></ul>
      </nav>
    </StHeader>
  );
}
