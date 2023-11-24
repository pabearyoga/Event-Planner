import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [search, setSearch] = useState('');
//   const [username, setUsername] = useState(null);
   
    const changeSearchInput = (e) => {
        setSearch(e.target.value)

    }

  return (
    <UserContext.Provider value={{ search, changeSearchInput}}>
      {children}
    </UserContext.Provider>
  );
};
// fix