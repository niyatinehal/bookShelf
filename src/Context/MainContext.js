import React from "react";
import { useReducer } from "react";
import { createContext } from "react";

import { books } from "../Data/db";
import { useEffect } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const mainReducer = (state, action) => {
    switch (action.type) {
      case "move-book":
        console.log(state.Books)
        const update=state?.Books.map((book) => {
          if (book.id === action.payload.bookId) {
            return { ...book, category: action.payload.category };
          } else {
            return book;
          }
          });
        return {
            Books:update,
            category:"",

        }

        case "currentlyReading":
            return{
                ...state,currentlyReadingBooks:[...action.payload]
            }
        case "read":
            return{
                ...state,readBooks:[...action.payload]
            }
        case "wantToRead":
            return{
                ...state,wantToReadBooks:[...action.payload]
            }
        
    }
  };

  const initialState = {
    Books: books,
    category: "",
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: [],
    noneBooks: [],
  };

  const [mainState, mainDispatcher] = useReducer(mainReducer, initialState);

  const moveBook = (bookId, category) => {
    mainDispatcher({ type: "move-book", payload: { bookId, category } });
  };

  const assignBook=()=>{
    const currReading=mainState.Books.filter(({category})=>category==="currentlyReading");
    mainDispatcher({type:"current"})
  }

  useEffect(() =>{
    moveBook();
  }, []);

  return (
    <MainContext.Provider
      value={{ mainState, initialState, mainDispatcher, moveBook }}
    >
      {children}
    </MainContext.Provider>
  );
};
