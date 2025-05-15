import { useSelector } from "react-redux";
import { StateType } from "@/store/store";

export const useCategory = () => {
  return useSelector((state: StateType) => state.categoryReducer.category);
};

export const usePricemin = () => {
  return useSelector((state: StateType) => state.price.value.min);
};

export const usePricemax = () => {
  return useSelector((state: StateType) => state.price.value.max);
};

export const useSort = () => {
  return useSelector((state: StateType) => state.sort.sorting);
};

export const useSizePizza = () => {
  return useSelector((state: StateType) => state.menuSizePizza.value);
};

export const useTradPizza = () => {
  return useSelector((state: StateType) => state.tradionalPizza.value);
};

export const useActiveSidebar = () => {
  return useSelector((state: StateType) => state.activeSidebar.value);
};

export const useBusket = () => {
  return useSelector((state: StateType) => state.busket.value);
};
