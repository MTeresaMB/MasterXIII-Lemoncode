import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/core";

//styles
import c from "./list-style.css";
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
        <input className={c.inputSearch}
          value={currentOrganizationName}
          onChange={(e) => setCurrentOrganizationName(e.target.value)}
          />
        <button className={c.buttonSearch} onClick={() => setOrganizationName(currentOrganizationName)}>
          Search
        </button>
      </div>
      <button className={c.buttonRickMorty} onClick={handleNavigationRickMorty}>
        <span className={c.buttonContent}> Rick & Morty </span>
      </button>
    </HeaderLayout>
  );
};
