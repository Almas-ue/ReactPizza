import { FC } from "react";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/card"
import { pizzas } from "./listpizza"

interface props {
    className?: string;
}

const Pizzas: FC<props> = ({ className }) => {
    return (
        <div className={cn("mt-7 flex flex-wrap justify-between gap-y-[50px]", className)}>
            <Card listProduct={pizzas} />
        </div>
    )
}

export default Pizzas
