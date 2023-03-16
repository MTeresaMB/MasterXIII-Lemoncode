import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/core";

//styles
import classes from "./list-style.css";
import { HeaderLayout } from "@/layouts";

interface Props {
  onSearch: (organizationName: string) => void;
}


export const OrganizationSearch: React.FC<Props> = (props) => {
  const { onSearch } = props;
  const [organizationName, setOrganizationName] = React.useState("Lemoncode");

  const navigate = useNavigate();
  
  const handleNavigationRickMorty = () => {
    return navigate(routes.listCharacter);
  };

  React.useEffect(() => {
    onSearch(organizationName);
  }, []);

  return (
    <HeaderLayout>
      <div>
        <input className={classes.inputSearch}
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          />
        <button className={classes.buttonSearch} onClick={() => onSearch(organizationName)}>
          Search
        </button>
      </div>
      <button className={classes.buttonRickMorty} onClick={handleNavigationRickMorty}>
        <span className={classes.buttonContent}> Rick & Morty </span>
      </button>
    </HeaderLayout>
  );
};
