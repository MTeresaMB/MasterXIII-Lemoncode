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
    <div>
      <form>
        <Box className={c.boxLogin}>
          <Typography variant="h6">
            LogIn React Laboratory of Lemoncode
          </Typography>
          <TextField
            margin="normal"
            type={"text"}
            variant="outlined"
            label="Username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></TextField>
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <Button
            className={c.buttonLogin}
            variant="contained"
            color="success"
            onClick={handleNavigation}
          >
            Enter
          </Button>
        </Box>
      </form>
    </div>
  );
};
