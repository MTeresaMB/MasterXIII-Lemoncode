import React from 'react';
import {useNavigate} from "react-router-dom";

export const LoginPage: React.FC = () =>{
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/member-table");
  }
  return(
    <>
      <button onClick={handleNavigation}>Login</button>
    </>
  )
}