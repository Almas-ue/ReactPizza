import { useState } from "react";
import { FiltrationState, ingredientList } from "@/state/filtration";

import BoxLabel from "./boxLabel";
import { Button } from "./button";
import { Input } from "./input";

const Filter = () => {
  const setIngredient = FiltrationState((state) => state.setIngredient);

  const setPriceMin = FiltrationState((state) => state.setPriceMin);
  const setPriceMax = FiltrationState((state) => state.setPriceMax);

  const [priceMinFilter, setPriceMinFilter] = useState(0);
  const [priceMaxFilter, setPriceMaxFilter] = useState(0);
  const [ingredientListfilter, setIngredientList] = useState<string[]>([]);

  const [lockFilter, setFilterLock] = useState<number>(6);

  return (
    <aside className="w-[245px]">
      <h3 className="font-bold text-2xl">Фильтрация</h3>
      <div className="mt-[30px] flex flex-col gap-6">
        <BoxLabel nameBox="Можно собирать" />
        <BoxLabel nameBox="Новинки" />
        <div className="border-b" />
        <div className="price-filter">
          <p className="font-bold mb-4">Цена от и до: </p>
          <div className=" flex gap-4">
            <Input
              className="outline-none focus:outline-none w-[90px] h-10 "
              type="text"
              onChange={(e) => {
                setPriceMinFilter(Number(e.target.value));
              }}
              id="priceMin"
            />
            <Input
              className="outline-none w-[90px] h-10"
              type="text"
              onChange={(e) => {
                setPriceMaxFilter(Number(e.target.value));
              }}
              id="priceMax"
            />
          </div>
        </div>
        <div className="border-b" />
        <p className="font-bold">Ингредиенты: </p>
        <div className="ingredients flex flex-col gap-4">
          {ingredientList.map(
            ({ id, name }, index) =>
              index < lockFilter && (
                <BoxLabel
                  key={id}
                  onClick={() => {
                    setIngredientList((prev) =>
                      prev.includes(name)
                        ? prev.filter((item) => item !== name)
                        : [...prev, name]
                    );
                  }}
                  nameBox={name}
                />
              )
          )}
          <button
            className="inline-flex w-max text-primary hover:text-primary/70"
            onClick={() =>
              lockFilter < ingredientList.length
                ? setFilterLock(ingredientList.length)
                : setFilterLock(6)
            }
          >
            {lockFilter < ingredientList.length ? "+ Показать всё" : "- Скрыть"}
          </button>
        </div>
        <Button
          className="rounded-[18px] text-base font-semibold h-[50px]"
          onClick={() => {
            setIngredient(ingredientListfilter);
            setPriceMin(priceMinFilter);
            setPriceMax(priceMaxFilter);
          }}
        >
          Применить
        </Button>
      </div>
    </aside>
  );
};

export default Filter;
