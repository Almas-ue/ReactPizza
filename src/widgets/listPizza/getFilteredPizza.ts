import getCategory from "./sortCategory";
import sortIngredient from "./sortIngredient";
import { sortPizza } from "./sortPizza";
import sortPrice from "./sortPrice";

export const getFilteredPizza = (
  pizza: any[],
  filterCard: any[],
  nameSort: any,
  category: any,
  minPrice: any,
  maxPrice: any,
  getIngredient: string[]
) => {
  let resultFilter;
  resultFilter = getCategory(category, pizza);
  resultFilter = sortPrice({ minPrice, maxPrice, filterCard });
  // resultFilter = sortIngredient({ getIngredient, filterCard });
  // resultFilter = sortPizza({ nameSort, filterCard, pizza });

  return resultFilter;
};
