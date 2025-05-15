import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import {
  removeIngredientInfo,
  setIngredientInfo,
} from "@/store/ingredientState";
import { getIngredient } from "@/hooks/getApi";

const Ingredients = () => {
  const [active, setActive] = useState<number[]>([]);
  const ingredients = getIngredient();
  const ingredientInfo = useSelector(
    (state: any) => state.ingredientInfo.value
  );

  const dispatch = useDispatch();

  return (
    <>
      <h2 className="text-lg font-semibold">Ингредиенты</h2>
      <div className="flex gap-2 relative">
        {ingredients.map(
          (
            ingredient: { img: string; name: string; price: number },
            index: number
          ) => (
            <button
              key={index}
              onClick={() => {
                setActive((prev) =>
                  prev.includes(index)
                    ? prev.filter((i) => i !== index)
                    : [...prev, index]
                );
                const res = ingredientInfo
                  .map((item: any) => item.name)
                  .includes(ingredient.name);

                res == false
                  ? dispatch(
                      setIngredientInfo({
                        name: ingredient.name,
                        price: ingredient.price,
                      })
                    )
                  : dispatch(removeIngredientInfo({ name: ingredient.name }));
              }}
              className={cn(
                "flex flex-col w-[130px] h-[194px] bg-transparent border-2 rounded-2xl border-transparent p-2 hover:bg-transparent hover:border-primary transition-all duration-150 ease-in-out",
                active.includes(index)
                  ? "border-primary"
                  : "bg-transparent border-transparent"
              )}
            >
              <img
                src={ingredient.img}
                alt={ingredient.name}
                className="w-[110px] h-[110px]"
              />
              <span className="font-medium text-[14px] min-h-8">
                {ingredient.name}
              </span>
              <span className="font-semibold text-2xs mt-3">
                {ingredient.price} ₽
              </span>
            </button>
          )
        )}
      </div>
    </>
  );
};

export default Ingredients;
