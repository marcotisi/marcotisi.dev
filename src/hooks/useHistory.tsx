import React, { ReactNode, useContext, useState } from "react";

export type HistoryItem = {
  command: string;
  element?: ReactNode;
};

export type HistoryContext = {
  history: Array<HistoryItem>;
  pushToHistory: (item: HistoryItem) => void;
  clearHistory: () => void;
};
const HistoryContext = React.createContext<HistoryContext | undefined>(
  undefined,
);

export const HistoryProvider: React.FC<{
  history?: HistoryContext["history"];
}> = ({ history: initialHistory = [], children }) => {
  const [history, setHistory] = useState<Array<HistoryItem>>(initialHistory);

  const pushToHistory = (item: HistoryItem) => setHistory([...history, item]);
  const clearHistory = () => setHistory([]);

  return (
    <HistoryContext.Provider
      value={{
        history,
        pushToHistory,
        clearHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => {
  const context = useContext(HistoryContext);
  if (context === undefined) {
    throw new Error("useHistory must be used within a HistoryProvider");
  }
  return context;
};
