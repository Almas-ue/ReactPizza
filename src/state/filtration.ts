import { create } from "zustand";

interface State {
  canCollection: boolean;
  newProduct: boolean;
  priceMin: number;
  priceMax: number;
  ingredient: string[];

  setCanCollection: (canCollection: boolean) => void;
  setNewProduct: (newProduct: boolean) => void;
  setPriceMin: (priceMin: number) => void;
  setPriceMax: (priceMax: number) => void;
  setIngredient: (ingredient: string[]) => void;
}

export const ingredientList = [
  { id: 1, name: "Грибы" },
  { id: 2, name: "Мясо" },
  { id: 3, name: "Курица" },
  { id: 4, name: "Острый перец" },
  { id: 5, name: "Паприка" },
  { id: 6, name: "Сырный соус" },
  { id: 7, name: "Моцарелла" },
  { id: 8, name: "Чеснок" },
  { id: 9, name: "Солёные огурчики" },
  { id: 10, name: "Красный лук" },
  { id: 11, name: "Томаты" },
];

export const FiltrationState = create<State>()((set) => ({
  canCollection: false,
  newProduct: false,
  priceMin: 0,
  priceMax: 0,
  ingredient: [],

  setCanCollection: (canCollection: boolean) => set({ canCollection }),
  setNewProduct: (newProduct: boolean) => set({ newProduct }),
  setPriceMin: (priceMin: number) => set({ priceMin }),
  setPriceMax: (priceMax: number) => set({ priceMax }),
  setIngredient: (ingredient: string[]) => {
    set({ ingredient });
  },
}));
