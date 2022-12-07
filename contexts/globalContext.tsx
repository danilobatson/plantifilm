import React, { useState } from 'react';



export interface IGlobalContextProps {
  search: string;
  setSearch: (search: string) => void;
  children?: React.ReactNode;
  moviesList: any;
  setMoviesList: (moviesList: any) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  search: '',
  setSearch: () => {},
  moviesList: [],
  setMoviesList: () => {},
});

export const GlobalContextProvider = (props: IGlobalContextProps) => {
  const [search, setSearch] = useState('');
  const [moviesList, setMoviesList] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        setSearch,
        search,
        moviesList,
        setMoviesList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
