"use client";

import React from "react";
import { createContext, useState, useContext } from "react";

interface AppContextProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <AppContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used whithin AppProvider");
  }

  return context;
};
