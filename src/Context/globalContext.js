import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const title = "Test";
  const isLogin = false;
  const isAdmin = false;

  return (
    <AppContext.Provider value={[title]}>{props.children}</AppContext.Provider>
  );
};
