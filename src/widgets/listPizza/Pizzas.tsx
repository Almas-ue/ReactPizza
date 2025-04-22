import { FC, useContext, useEffect, useState } from "react";
import { ListSort, SortContext } from "@/providers/sortCard";
import { cn } from "@/lib/utils";

import { CategoryState } from "@/state/categoryState";
import { FiltrationState } from "@/state/filtration";

import Card from "@/components/ui/card";
import PaginationPages from "../pages/PaginationPages";
import NotFound from "@/components/ui/notFound";

interface Props {
  className?: string;
}

const Pizzas: FC<Props> = ({ className }) => {
  const [pizza, setPizza] = useState<any>([]);

  const categoryData = CategoryState((state) => state.stateCategory);
  const getIngredient = FiltrationState((state) => state.ingredient);
  const getMinPrice = FiltrationState((state) => state.priceMin);
  const getMaxPrice = FiltrationState((state) => state.priceMax);

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
      categoryData !== "Все" && pizza.length > 0
        ? pizza.filter(
            (card: { category: string[] }) =>
              Array.isArray(card.category) &&
              card.category.some((c: string) => categoryData.includes(c))
          )
        : pizza.slice();

    getMinPrice && getMaxPrice
      ? (categoryFilter = categoryFilter.filter((card: any) => {
          return card.price >= getMinPrice && card.price <= getMaxPrice;
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
  }, [pizza, categoryData, sort, getMinPrice, getMaxPrice, getIngredient]);

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
            category={categoryData}
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
