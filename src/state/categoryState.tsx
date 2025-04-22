import { create } from "zustand";

interface State {
  stateCategory: string;
  setActiveId: (stateCategory: string) => void;
}

export const categoryNames = [
  "Все",
  "Мясные",
  "Острые",
  "Сладкие",
  "Веган",
  "С курицей",
];

export const CategoryState = create<State>()((set) => ({
  stateCategory: categoryNames[0],
  setActiveId: (stateCategory: string) => set({ stateCategory }),
}));
