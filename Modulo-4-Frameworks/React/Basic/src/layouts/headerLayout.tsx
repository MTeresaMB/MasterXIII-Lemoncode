import React from 'react';

interface Props{
  children: React.ReactNode;
}

export const HeaderLayout: React.FC<Props> = ({children}) => (
  <div className="containerHeader">
    {children}
  </div>
);