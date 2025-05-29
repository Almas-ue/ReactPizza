import Filter from "@/features/filter";
import Categorias from "../widgets/categorias";
import Pizzas from "@/widgets/listPizza/Pizzas";
import { FC } from "react";
import Header from "@/widgets/Header/Header";
import Container from "@/components/ui/container";

interface layoutProps {
  children?: React.ReactNode;
}

const Layouts: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Header lite={false} />
      <Container>
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
