import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const context = { loading, setLoading };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
