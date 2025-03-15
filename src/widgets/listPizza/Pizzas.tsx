import { FC, useContext, useEffect, useState } from "react";
import { CategoryContext } from "@/providers/categoryProvider";
import { ListSort, SortContext } from "@/providers/sortCard";
import { cn } from "@/lib/utils";

import Card, { typeList } from "@/components/ui/card";
import PaginationPages from "../pages/PaginationPages";

import { pizzas } from "./listpizza";
import NotFound from "@/components/ui/notFound";

interface props {
  className?: string;
}

const Pizzas: FC<props> = ({ className }) => {
  const categoryData = useContext(CategoryContext);
  const sortData = useContext(SortContext);
  const [category]: any = categoryData ? categoryData : "";
  const [sort]: any = sortData ?? ListSort.DEFAULT;

  let [filterCard, setFilter] = useState<any[]>([]);

  useEffect(() => {
    let filtered =
      category !== "Все"
        ? pizzas.filter((card) => category.includes(card.category))
        : pizzas.slice();

    if (sort === ListSort.DOWN)
      setFilter(filtered.sort((a, b) => b.price - a.price));
    else if (sort === ListSort.UP)
      setFilter(filtered.sort((a, b) => a.price - b.price));
    else if (sort === ListSort.DEFAULT) setFilter(pizzas.slice());

    setFilter(filtered);
  }, [category, sort]);

  const [currentPage, setCurrentPage] = useState(1);
  const cardCount = 6;
  const countPage = Math.ceil(filterCard.length / cardCount);

  filterCard = filterCard.slice(
    (currentPage - 1) * cardCount,
    currentPage * cardCount
  );

  return filterCard > [] ? (
    <div
      className={cn(
        "mt-7 flex flex-wrap gap-x-[72px] gap-y-[50px]",
        className
      )}
    >
      <Card
        listProduct={filterCard}
        countList={cardCount}
        category={category}
      />
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
