import { createContext, FC, ReactNode, useState } from "react";

type CategoryContextType = [string, (category: string) => void];

export const CategoryContext = createContext<CategoryContextType | undefined>(
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

export const CategoryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [category, setCategory] = useState(categoryNames[0]);

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      {children}
    </CategoryContext.Provider>
  );
};
