import { ListSort } from "@/store/sortState";

interface SortPizzaProps {
  nameSort: any;
  filterCard: any;
  pizza: any[];
}

export const sortPizza = ({ nameSort, filterCard, pizza }: SortPizzaProps) => {
  console.log(nameSort);
  if (nameSort == ListSort.DOWN)
    return filterCard.sort(
      (a: { price: number }, b: { price: number }) => b.price - a.price
    );
  else if (nameSort == ListSort.UP)
    return filterCard.sort(
      (a: { price: number }, b: { price: number }) => a.price - b.price
    );
  else if (nameSort === ListSort.DEFAULT) return pizza.slice();
};
