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
      <Box>
        <p>LogIn React Laboratory of Lemoncode</p>
        <FormControl variant="standard">
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
          />
        </FormControl>
        <Button
          variant="contained"
          onClick={handleNavigation}
        >
          Log In
        </Button>
      </Box>
  );
};
