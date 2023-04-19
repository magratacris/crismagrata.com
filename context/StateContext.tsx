import React, { createContext, useContext, useState, useRef, FC } from "react";
//types
import { AppContextProps, ContextType } from "@/Interfaces/AppContext";

const Context = createContext<ContextType>({} as ContextType);
export const useAppContext = () => useContext(Context);

export const AppContext: FC<AppContextProps> = ({ children }) => {
  const [sectionRefs, setSectionRefs] = useState({
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  });
  const [isDarkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState<String | null>(null);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = { sectionRefs, isDarkMode, setDarkMode, toggleDarkMode, theme };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
