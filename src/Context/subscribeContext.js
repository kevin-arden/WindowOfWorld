import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  isSubscribe: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        userEmail: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isSubscribe: false,
      };
    case "LOGIN_ADMIN":
      return {
        ...state,
        isLogin: true,
        isAdmin: true,
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
