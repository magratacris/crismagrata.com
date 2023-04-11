import { ReactNode, useRef } from "react";

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
}
