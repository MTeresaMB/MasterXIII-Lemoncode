import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/core";
import { OrganizationContext } from "@/app";

//styles
import c from "./list-style.css";
import { HeaderLayout } from "@/layouts/layoutMembersList/header.layout";


export const OrganizationSearch: React.FC = () => {
  const { organizationName, setOrganizationName } = React.useContext(OrganizationContext);

  const navigate = useNavigate();
  
  const handleNavigationRickMorty = () => {
    return navigate(routes.listCharacter);
  };

  
  return (
    <HeaderLayout>
      <div>
        <input className={c.inputSearch}
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          />
      </div>
      <button className={c.buttonRickMorty} onClick={handleNavigationRickMorty}>
        <span className={c.buttonContent}> Rick & Morty </span>
      </button>
    </HeaderLayout>
  );
};


