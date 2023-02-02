import React from 'react';
import logo from './content/logo_1.png';
import * as classes from './styles.module.scss'

export const Hello: React.FC = () =>{
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2 >Hello Lemoncoders from React</h2>
      </div>
      <img src={logo} className={classes.logo} alt="logo_1"/>
    </div>
  )
}