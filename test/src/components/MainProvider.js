import { useState, createContext } from "react";

export const NameContext = createContext();

const MainProvider = ({ children }) => {
  const [name1, setName1] = useState("zol");
  return (
    <NameContext.Provider value={{ name1, setName1 }}>
      {children}
    </NameContext.Provider>
  );
};

export default MainProvider;
