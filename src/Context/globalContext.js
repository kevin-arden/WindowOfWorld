import { createContext, useReducer } from "react";
export const AppContext = createContext();

const initialState = {
  isLogin: false,
  isAdmin: false,
  isSubscribed: false,
  userLogin: {}
};


const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogin: true,
        userLogin: action.payload.userLogin
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
        isAdmin: false,
        userLogin: {},
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
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};
