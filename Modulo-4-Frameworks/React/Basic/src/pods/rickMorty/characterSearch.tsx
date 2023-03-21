import React from "react";
import { HeaderRickMortyLayout } from "@/layouts/layoutRickMorty/headerRickMorty.layout";
import { routes } from "@/core";
import { useNavigate } from "react-router-dom";


export const SearchCharaters: React.FC = () => {
  
  const navigate = useNavigate();

  const handleNavigationMemberList = () => {
    return navigate(routes.listCharacter);
  };

  return (
    <HeaderRickMortyLayout>
      <div>
        <input />
        <button>Search</button>
      </div>
      <button onClick={handleNavigationMemberList}>Members Github</button>
    </HeaderRickMortyLayout>
  );
};
