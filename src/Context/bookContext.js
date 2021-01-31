import { createContext, useReducer } from "react";

export const BookContext = createContext();

const initialState = {
  isAdded: false,
  title: "",
  penulis: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "BOOK_ADDED":
      return {
        ...state,
        isAdded: true,
      };
    case "BOOK_REMOVED":
      return {
        ...state,
        isAdded: false,
      };
    default:
      throw new Error();
  }
};

export const BookContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BookContext.Provider value={[state, dispatch]}>
      {children}
    </BookContext.Provider>
  );
};
