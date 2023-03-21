import React from 'react';
import c from './headerRickMorty.layout.css';

interface Props{
  children: React.ReactNode;
}

export const HeaderRickMortyLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className={c.headerRickMorty}>
      {children}
    </div>
  )
}