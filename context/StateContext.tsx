import React, {
  createContext,
  useContext,
  useState,
  useRef,
  FC,
  ReactNode,
} from "react";
//types
import { AppContextProps, ContextType } from "@/types/AppContext";

const Context = createContext<ContextType>({} as ContextType);
export const useAppContext = () => useContext(Context);

export const AppContext: FC<AppContextProps> = ({ children }) => {
  const [sectionRefs, setSectionRefs] = useState({
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  });

  const value = { sectionRefs };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
