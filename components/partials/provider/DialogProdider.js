import { createContext, useState } from "react";

export const DialogContext = createContext();

export function DialogProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogContext.Provider
      value={{
        setIsOpen,
        isOpen,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}
