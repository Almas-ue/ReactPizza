import Filter from "@/features/filter";
import Categorias from "../widgets/categorias";
import Pizzas from "@/widgets/listPizza/Pizzas";
import { FC } from "react";

interface layoutProps {
  className?: string;
  children?: React.ReactNode;
}

const Layouts: FC<layoutProps> = ({ children, className }) => {
  return (
    <>
      <Categorias className="mb-9" />
      <div className="flex gap-[48px]">
        <Filter />
        <Pizzas />
      </div>
      {children}
    </>
  );
};

export default Layouts;
