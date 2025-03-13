import Filter from "@/components/ui/filter";
import Categorias from "../widgets/categorias";
import Header from "../widgets/Header/Header";
import Container from "@/components/ui/container";
import Pizzas from "@/widgets/listPizza/Pizzas";
import React from "react";
import { categoryProvider } from "@/providers/categoryProvider";

interface app {
  categoryProvider: JSX.IntrinsicElements;
}

const App: React.FC<app> = () => {
  return (
    <categoryProvider>
      <Header />
      <Categorias />
      <Container className="flex gap-[48px] mt-9">
        <Filter />
        <Pizzas />
      </Container>
    </categoryProvider>
  );
};

export default App;
