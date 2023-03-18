import React, { createContext } from "react";
import {RouterComponent} from '@/core';

export const OrganizationContext = createContext({
  organizationName: null,
  setOrganizationName: (name:string) => {},
})
export const App = () => {
  const [organizationName, setOrganizationName] = React.useState("Lemoncode");
  const initContextValue = {organizationName, setOrganizationName}
  return (
    <OrganizationContext.Provider value={initContextValue}>
      <RouterComponent/>
    </OrganizationContext.Provider>
  );
};
