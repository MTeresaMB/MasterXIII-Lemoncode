import React from 'react';
import logo from './content/logo_1.png';

export const Hello: React.FC = () => {
  return (
    <div>
      <h2>Hello from Hello Component</h2>
      <img src={logo} alt="logo_1"/>
    </div>
  )
}