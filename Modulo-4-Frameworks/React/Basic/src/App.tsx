import classes from "./index.scss";
import React from "react";


export default function App(){
  const [username, setUsername] = React.useState("");

  const onChange = (e)=> {
    setUsername(e.target.value);
  }

  return (
    <div className = {classes.container}>
      <h1>Hola, {username}</h1>
      <input type="text" onChange = {onChange}/>
    </div>
  )
}