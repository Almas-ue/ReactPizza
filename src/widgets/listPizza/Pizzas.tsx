import { FC, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  useCategory,
  usePricemax,
  usePricemin,
  useSort,
} from "@/hooks/useReducer";
import { FiltrationState } from "@/state/filtration";

import Card from "@/components/ui/card";
import PaginationPages from "./../pages/PaginationPages";
import NotFound from "@/components/ui/notFound";
import { apiConnect } from "@/api/apiPizza";
import { ListSort } from "@/store/sortState";
// import { getFilteredPizza } from "./getFilteredPizza";
// import { ListSort } from "@/store/sortState";

interface Props {
  className?: string;
}

const Pizzas: FC<Props> = ({ className }) => {
  const [pizza, setPizza] = useState<any>([]);
  const getIngredient = FiltrationState((state) => state.ingredient);
  const [nameSort, category, minPrice, maxPrice] = [
    useSort(),
    useCategory(),
    usePricemin(),
    usePricemax(),
  ];

  useEffect(() => {
    apiConnect().then((data) => setPizza(data));
  }, []);

  const [filterCard, setFilter] = useState<any[]>([]);

  useEffect(() => {
    if (pizza.length <= 0) return;

    /*setFilter(
      getFilteredPizza(
        pizza,
        filterCard,
        nameSort,
        category,
        minPrice,
        maxPrice,
        getIngredient
      )
    );*/

    let filtered =
      category !== "Все"
        ? pizza.filter(
            (card: { category: string[] }) =>
              Array.isArray(card.category) &&
              card.category.some((c: string) => category.includes(c))
          )
        : pizza.slice();

    getIngredient.length > 0
      ? (filtered = pizza.filter((card: any) =>
          getIngredient.some((ing: string) => card.ingredient.includes(ing))
        ))
      : filtered;

    minPrice && maxPrice
      ? (filtered = pizza.filter(
          (card: any) => card.price >= minPrice && card.price <= maxPrice
        ))
      : filtered;

    if (nameSort == ListSort.DOWN)
      filtered = filterCard.sort(
        (a: { price: number }, b: { price: number }) => b.price - a.price
      );
    else if (nameSort == ListSort.UP)
      filtered = filterCard.sort(
        (a: { price: number }, b: { price: number }) => a.price - b.price
      );
    else if (nameSort === ListSort.DEFAULT) filtered;

    setFilter(filtered);
  }, [pizza, category, nameSort, minPrice, maxPrice, getIngredient]);

  const [currentPage, setCurrentPage] = useState(1);
  const cardCount = 6;
  const countPage = Math.ceil(filterCard.length / cardCount);

  return filterCard > [] ? (
    <div
      className={cn("mt-7 flex flex-wrap gap-x-[72px] gap-y-[50px]", className)}
    >
      {filterCard
        .slice((currentPage - 1) * cardCount, currentPage * cardCount)
        .map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            countList={cardCount}
            category={category}
          />
        ))}
      <PaginationPages
        countPage={countPage}
        currentPage={currentPage}
        paginate={setCurrentPage}
        className="pb-[58px]"
      />
    </div>
  ) : (
    <NotFound />
  );
};

export default Pizzas;
