import { FC, useContext, useEffect, useState } from "react";
import { ListSort, SortContext } from "@/providers/sortCard";
import { cn } from "@/lib/utils";

import { CategoryState } from "@/state/categoryState";
import { FiltrationState } from "@/state/filtration";

import Card from "@/components/ui/card";
import PaginationPages from "../pages/PaginationPages";
import NotFound from "@/components/ui/notFound";
import { useCategory, usePricemax, usePricemin } from "@/hooks/useReducer";

interface Props {
  className?: string;
}

const Pizzas: FC<Props> = ({ className }) => {
  const [pizza, setPizza] = useState<any>([]);

  const category = useCategory();
  const getIngredient = FiltrationState((state) => state.ingredient);
  const minPrice = usePricemin();
  const maxPrice = usePricemax();

  useEffect(() => {
    console.log("min: ", minPrice);
    console.log("max: ", maxPrice);
  }, [minPrice, maxPrice]);

  const sortData = useContext(SortContext);
  const [sort]: any = sortData ?? ListSort.DEFAULT;

  useEffect(() => {
    const getPizzas = async () => {
      await fetch("http://localhost:3000/pizza").then((res) => {
        res.json().then((data) => setPizza(data));
      });
    };
    getPizzas();
  }, []);

  let [filterCard, setFilter] = useState<any[]>([]);

  useEffect(() => {
    let categoryFilter =
      category !== "Все" && pizza.length > 0
        ? pizza.filter(
            (card: { category: string[] }) =>
              Array.isArray(card.category) &&
              card.category.some((c: string) => category.includes(c))
          )
        : pizza.slice();

    minPrice && maxPrice
      ? (categoryFilter = categoryFilter.filter((card: any) => {
          return card.price >= minPrice && card.price <= maxPrice;
        }))
      : categoryFilter;

    getIngredient > []
      ? (categoryFilter = categoryFilter.filter((card: any) => {
          console.log(getIngredient);
          return getIngredient.some((ing: string) =>
            card.ingredient.includes(ing)
          );
        }))
      : categoryFilter;

    if (sort === ListSort.DOWN)
      setFilter(
        categoryFilter.sort(
          (a: { price: number }, b: { price: number }) => b.price - a.price
        )
      );
    else if (sort === ListSort.UP)
      setFilter(
        categoryFilter.sort(
          (a: { price: number }, b: { price: number }) => a.price - b.price
        )
      );
    else if (sort === ListSort.DEFAULT) setFilter(pizza.slice());

    setFilter(categoryFilter);
  }, [pizza, category, sort, minPrice, maxPrice, getIngredient]);

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
