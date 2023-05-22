import React from "react";
import { routes } from "@/core";
import { useNavigate } from "react-router-dom";

//styles
import { HeaderRickMortyLayout } from "@/layouts/layoutRickMorty/headerRickMorty.layout";
import c from './listRickMorty.style.css';

export const SearchCharaters: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigationMemberList = () => {
    return navigate(routes.list);
  };

  return (
    <HeaderRickMortyLayout>
      <span className={c.titleHeader}>The Rick and Morty API</span>
      <button className={c.buttonListMembers} onClick={handleNavigationMemberList}>Members Github</button>
    </HeaderRickMortyLayout>
  );
};
