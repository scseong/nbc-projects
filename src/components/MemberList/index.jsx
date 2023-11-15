import React from 'react';
import { StPolaroid } from './styles';

export default function MemberList({ children: name, id, clicked, onUpdate }) {
  const selectMember = () => onUpdate(id);

  return (
    <StPolaroid onClick={selectMember} $clicked={clicked}>
      <div>
        <img src={require(`assets/${name}.jpg`)} alt={name} />
        <p>{name}</p>
      </div>
    </StPolaroid>
  );
}
