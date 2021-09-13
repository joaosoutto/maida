import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cep, setCep] = useState("");
  const [searchedCep, setSearchedCep] = useState({});
  const [error, setError] = useState(false);

  const context = {
    error,
    setError,
    searchedCep,
    setSearchedCep,
    cep,
    setCep,
    loading,
    setLoading,
    favorites,
    setFavorites,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
