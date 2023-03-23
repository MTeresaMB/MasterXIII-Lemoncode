import React from "react";
import c from "./login.style.css";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "@/core";

export const LoginPageContainer: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "test") {
      navigate(routes.list);
    } else {
      alert("user / password not valid, psss ... admin / test");
    }
  };
  return (
    <div className={c.bodyLogin}>
      <form>
        <Box className={c.boxLogin}>
          <Box>
            <Typography component="p">
              LogIn React Laboratory of Lemoncode
            </Typography>
          </Box>
          <Box className={c.userBox}>
            <input
              type={"text"}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </Box>
          <Box className={c.userBox}>
            <input
              type={"password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </Box>
          <Button
            className={c.buttonLogin}
            onClick={handleNavigation}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Enter
          </Button>
        </Box>
      </form>
    </div>
  );
};
