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
