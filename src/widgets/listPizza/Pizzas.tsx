import { FC } from "react";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/card"
import { pizzas } from "./listpizza"
import PaginationPages from "../pages/PaginationPages";

interface props {
    className?: string;
}

const Pizzas: FC<props> = ({ className }) => {
    const cardCount = 6;
    const last = Math.ceil(pizzas.length / cardCount);

    return (
        <div className={cn("mt-7 flex flex-wrap justify-between gap-y-[50px]", className)}>
            <Card listProduct={pizzas} countList={cardCount} />
            <PaginationPages countPage={pizzas.length} lastPage={last} className="pb-[58px]" />
        </div>
    )
}

export default Pizzas
