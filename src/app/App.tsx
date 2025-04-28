import Filter from "@/features/filter";
import Categorias from "../widgets/categorias";
import Header from "../widgets/Header/Header";
import Container from "@/components/ui/container";
import Pizzas from "@/widgets/listPizza/Pizzas";
import React from "react";
import SortCard from "@/providers/sortCard";
import { Provider } from "react-redux";
import store from "@/store/store";

interface app {
  categoryProvider?: JSX.IntrinsicElements;
}

const App: React.FC<app> = () => {
  return (
    <Provider store={store}>
      <SortCard>
        <Header />
        <Categorias />
        <Container className="flex gap-[48px] mt-9">
          <Filter />
          <Pizzas />
        </Container>
      </SortCard>
    </Provider>
  );
};

export default App;
