import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { LoginPage, ListPage, DetailPage } from "@/scenes";
import { ListPageRickMorty } from "@/scenes/rickMorty/listCharacter";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginPage />} />
        <Route path={switchRoutes.list} element={<ListPage />} />
        <Route path={switchRoutes.details} element={<DetailPage />} />
        <Route path={switchRoutes.listCharacter} element={<ListPageRickMorty />} />
      </Routes>
    </Router>
  )
};
