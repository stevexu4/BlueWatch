import React from "react";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [index, setIndex] = React.useState(0);

  return (
    <ThemeContext.Provider
      value={{
        index,
        setIndex,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
