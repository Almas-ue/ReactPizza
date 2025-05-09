import { ListSort } from "@/store/sortState";
import { createContext, FC, ReactNode, useState } from "react";

type SortContextType = [string, (category: string) => void];

export const SortContext = createContext<SortContextType | undefined>(
  undefined
);


export const sortList = [ListSort.DEFAULT, ListSort.DOWN, ListSort.UP];

const SortCard: FC<{ children: ReactNode }> = ({ children }) => {
  const [sortName, setSortName] = useState<string>(sortList[0]);

  return (
    <SortContext.Provider value={[sortName, setSortName]}>
      {children}
    </SortContext.Provider>
  );
};

export default SortCard;
