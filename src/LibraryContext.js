import { createContext, useState } from "react";

const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {
  const [library, setLibrary] = useState();
  return (
    <LibraryContext.Provider value={{ library, setLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};

export { LibraryProvider, LibraryContext };
