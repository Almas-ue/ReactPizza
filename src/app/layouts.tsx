import Filter from "@/features/filter";
import Categorias from "../widgets/categorias";
import Container from "@/components/ui/container";
import Pizzas from "@/widgets/listPizza/Pizzas";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface layoutProps {
  className?: string;
  children?: React.ReactNode;
}

const Layouts: FC<layoutProps> = ({ children, className }) => {
  return (
    <>
      <Container className={cn("mt-9", className)}>
        <Categorias className="mb-9" />
        <div className="flex gap-[48px]">
          <Filter />
          <Pizzas />
        </div>
        {children}
      </Container>
    </>
  );
};

export default Layouts;
