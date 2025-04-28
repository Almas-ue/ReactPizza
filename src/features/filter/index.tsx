import { useState } from "react";
import { FiltrationState } from "@/state/filtration";

import { Button } from "./../../components/ui/button";
import ProductInfo from "./components/productInfo";
import PriceComponent from "./components/priceComponent";
import { useDispatch } from "react-redux";
import Ingredient from "./components/ingredient";
import { setMaxPrice, setMinPrice } from "@/store/price/priceState";

const Filter = () => {
  const setIngredient = FiltrationState((state) => state.setIngredient);
  const [priceMinFilter, setPriceMinFilter] = useState(0);
  const [priceMaxFilter, setPriceMaxFilter] = useState(0);

  const dispatch = useDispatch();

  const [ingredientListfilter, setIngredientList] = useState<string[]>([]);

  return (
    <aside className="w-[245px]">
      <h3 className="font-bold text-2xl">Фильтрация</h3>

      <div className="mt-[30px] flex flex-col gap-6">
        <ProductInfo />
        <div className="border-b" />
        <PriceComponent
          setMinPrice={setPriceMinFilter}
          setMaxPrice={setPriceMaxFilter}
        />
        <div className="border-b" />
        <Ingredient setIngredientList={setIngredientList} />
        <Button
          className="rounded-[18px] text-base font-semibold h-[50px]"
          onClick={() => {
            setIngredient(ingredientListfilter);
            dispatch(setMinPrice(priceMinFilter));
            dispatch(setMaxPrice(priceMaxFilter));
          }}
        >
          Применить
        </Button>
      </div>
    </aside>
  );
};

export default Filter;
