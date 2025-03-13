import React, { createContext, ReactNode, useState } from "react";

type CategoryContextType = [string, (category: string) => void];

export const categoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const categoryNames = [
  "Все",
  "Мясные",
  "Острые",
  "Сладкие",
  "Веган",
  "С курицей",
];

export const categoryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [category, setCategory] = useState(categoryNames[5]);

  return (
    <categoryContext.Provider value={[category, setCategory]}>
      {children}
    </categoryContext.Provider>
  );
};
