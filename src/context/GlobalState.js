import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"
import axios from 'axios';

const initialState = {
    newsbooks: []

}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getNewsBooks = async () => {
        const res = await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=VrmK4RllPpBDEGyGy0zD5GFg8J6aC5qD');
        dispatch({
            type: "GET_NEWSBOOKS",
            payload: res.data.results.books,
        });
    };
    return (
        <GlobalContext.Provider
          value={{
            newsbooks: state.newsbooks,
            getNewsBooks,
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
}
