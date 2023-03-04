import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/core";

//styles 
import classes from "@/styles/header-list-style.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography } from "@mui/material";



interface Props {
  onSearch: (organizationName: string) => void;
}

export const OrganizationSearch: React.FC<Props> = (props) => {
  const { onSearch } = props;
  const [organizationName, setOrganizationName] = React.useState("Lemoncode");

  const navigate = useNavigate();
  const handleNavigationRickMorty = () => {
    return navigate(routes.listCharacter);
  }
  
  React.useEffect(() => {
    onSearch(organizationName);
  }, []);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={classes.containerHeader}>
          <Typography variant="h6" noWrap component="div" className={classes.typography}>
            List of the Searched Organization
          </Typography>
          <Box
            className={classes.containerForm}
            component="form"
            noValidate
            autoComplete="off">
            <TextField
              className={classes.form}
              id="standard-basic"
              label={organizationName}
              variant="standard"
              onChange={(e) => setOrganizationName(e.target.value)}
            />
            <Button
              className={classes.btn}
              variant="contained"
              onClick={() => onSearch(organizationName)}>
              Search
            </Button>
          </Box>
          <Button
              className={classes.btn}
              variant="contained"
              onClick={handleNavigationRickMorty}>
              Rick & Morty
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
