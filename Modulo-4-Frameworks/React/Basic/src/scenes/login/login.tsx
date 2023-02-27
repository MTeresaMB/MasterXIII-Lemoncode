import React from "react";
import { AccountCircle } from "@mui/icons-material";
import { Box, FormControl, InputAdornment, TextField, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "@/core";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNavigation = (e) => {
    e.preventDefault();
    if(username === 'admin' && password === 'test'){
      navigate(routes.list);
    } else{
      alert("user / password not valid, psss ... admin / test")
    }
  };
  return (

    <Box sx={{ width: 300, height: 300,"& > :not(style)": { m: 2} }}>
      <FormControl variant="standard" >
        <TextField value={username} onChange={e => setUsername(e.target.value)}
          id="input-with-icon-textfield"
          label="Username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        <TextField value={password} onChange={e => setPassword(e.target.value)}
          id="input-with-icon-textfield"
          label="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </FormControl>
      <Button variant="contained" onClick={handleNavigation}>Log In</Button>
    </Box>
  );
};
