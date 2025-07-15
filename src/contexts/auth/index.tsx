//import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState} from "react";

import { createContext, useState, type Dispatch, type FC, type ReactNode, type SetStateAction } from "react";
import type { User } from "../../types";

  type Context = {
    me?: Partial<User>;
    setMe: Dispatch<SetStateAction<Partial<User> | undefined>>;
  };
  
  const AuthContext = createContext<Context>({
    me: {},
    setMe: () => undefined
  });

  type Provider = {
    children: ReactNode;
  };
  
  const AuthProvider: FC<Provider> = ({ children }) => {

    const [me, setMe] = useState<Partial<User>>();
  
    return (
      <AuthContext.Provider value={{ me, setMe }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export { AuthContext, AuthProvider };