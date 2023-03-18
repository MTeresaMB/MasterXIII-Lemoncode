import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/core";

//styles
import classes from "./list-style.css";
import { HeaderLayout } from "@/layouts";
import { OrganizationContext } from "@/app";


export const OrganizationSearch: React.FC = () => {
  const { organizationName, setOrganizationName } = React.useContext(OrganizationContext);
  const [currentOrganizationName, setCurrentOrganizationName] = React.useState(organizationName);

  const navigate = useNavigate();
  
  const handleNavigationRickMorty = () => {
    return navigate(routes.listCharacter);
  };

  return (
    <HeaderLayout>
      <div>
        <input className={classes.inputSearch}
          value={currentOrganizationName}
          onChange={(e) => setCurrentOrganizationName(e.target.value)}
          />
        <button className={classes.buttonSearch} onClick={() => setOrganizationName(currentOrganizationName)}>
          Search
        </button>
      </div>
      <button className={classes.buttonRickMorty} onClick={handleNavigationRickMorty}>
        <span className={classes.buttonContent}> Rick & Morty </span>
      </button>
    </HeaderLayout>
  );
};
