import React, { createContext, useState } from 'react';

interface SelectedPanelContextType {
  selectedPanel: string;
  setSelectedPanel: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectedPanelContext = createContext<SelectedPanelContextType | null>(null);

export const SelectedPanelProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedPanel, setSelectedPanel] = useState<string>('');

  return (
    <SelectedPanelContext.Provider value={{ selectedPanel, setSelectedPanel }}>
      {children}
    </SelectedPanelContext.Provider>
  );
};
