import React from "react";
import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "@/core";
import classes from "./login-style.css";

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
      <Box className={classes.container}>
        <p className={classes.title}>LogIn React Laboratory of Lemoncode</p>
        <FormControl variant="standard" className={classes.form}>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="input-with-icon-textfield"
            label="Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            focused
            required
            variant="outlined"
            className={classes.input}
          />

          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="input-with-icon-textfield"
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            required
            variant="outlined"
            className={classes.input}
          />
        </FormControl>
        <Button
          variant="contained"
          onClick={handleNavigation}
          className={classes.button}
        >
          Log In
        </Button>
      </Box>
  );
};
