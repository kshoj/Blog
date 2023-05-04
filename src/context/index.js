import React from "react";

const initialSetting = {
  baseURL: "https://jsonplaceholder.typicode.com/",
};

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={initialSetting}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
