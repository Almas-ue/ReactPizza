import { FC, useContext, useEffect, useState } from "react";
import { categoryContext, categoryNames } from "@/providers/categoryProvider";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/card";
import { pizzas } from "./listpizza";
import PaginationPages from "../pages/PaginationPages";

interface props {
  className?: string;
}

const Pizzas: FC<props> = ({ className }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardCount = 6;
  const countPage = Math.ceil(pizzas.length / cardCount);

  const currentItems = pizzas.slice(
    (currentPage - 1) * cardCount,
    currentPage * cardCount
  );

  const categoryData = useContext(categoryContext);

  const [category, setCategory]: any = categoryData ? categoryData : "none";

  let filterCard = currentItems.filter((card) =>
    category.includes(card.category)
  );

  console.log(category);

  useEffect(() => {
    filterCard = currentItems.filter((card) =>
      category.includes(card.category)
    );
  }, [categoryNames]);

  console.log(filterCard);

  return (
    <div
      className={cn(
        "mt-7 flex flex-wrap justify-between gap-y-[50px]",
        className
      )}
    >
      <Card
        listProduct={currentItems}
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
  );
};

export default Pizzas;
