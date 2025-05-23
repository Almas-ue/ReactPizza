import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizza } from "@/hooks/getApi";

import { UrlInfo } from "./locationInfo";
import Container from "@/components/ui/container";
import ImageBlock from "@/components/ui/imageBlock";
import Ingredients from "./components/ingredients";
import MenuNameSize from "./components/menuNameSize";
import BreadcrumbPizza from "./components/breadcrumbPizza";
import RecomandationPizza from "./components/RecomandationPizza";
import { Button } from "@/components/ui/button";
import { setStateBusket } from "@/store/busket";

const PizzaPage = () => {
  const [priceIngredient, setPriceIngredient] = useState<number>(0);
  const pizzaId = UrlInfo();
  const pizza = getPizza();
  const pizzaItem = pizza.find((item: any) => item.id === pizzaId);

  const ingredientInfo = useSelector(
    (state: any) => state.ingredientInfo.value
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setPriceIngredient(
      ingredientInfo
        .slice(1)
        .reduce((acc: number, item: { price?: number }) => {
          return acc + (item.price || 0);
        }, 0)
    );
  }, [ingredientInfo]);

  return (
    <>
      <Container>
        <div className="h-max">
          <BreadcrumbPizza className="mt-9" name={pizzaItem?.name} />
          {pizzaItem ? (
            <div className="flex gap-11">
              <ImageBlock
                img={pizzaItem.img}
                alt={pizzaItem.name}
                className="mt-10"
                classNameImg="w-[500px] h-[500px]"
              />
              <div className="flex flex-col gap-5 mt-10">
                <h1 className="text-4xl font-bold">{pizzaItem.name}</h1>
                <div className="flex items-baseline gap-1 font-normal text-gray-400">
                  <span className="">
                    Размер: {pizzaItem?.size?.diameter} см,
                  </span>
                  <span>Вес: {pizzaItem?.size?.weight} г</span>
                </div>

                <MenuNameSize />
                <Ingredients />

                <div className="mt-auto">
                  <Button
                    className="
                    block bg-primary rounded-2xl px-6 h-14 
                    text-xl font-semibold text-white
                    hover:bg-primary/90 transition-all duration-100"
                    onClick={() => dispatch(setStateBusket(pizzaItem))}
                  >
                    Добавить в корзину за {pizzaItem.price + priceIngredient} ₽
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-xl">Pizza not found</p>
          )}
          <RecomandationPizza />
        </div>
      </Container>
    </>
  );
};

export default PizzaPage;
