import { ReactNode } from "react";

export type AppContextProps = {
  children?: ReactNode;
};

export interface ContextType {
  sectionRefs: {
    home: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkMode: (checked: boolean) => void;
  isDarkMode: boolean;
  theme: String | null;
}
