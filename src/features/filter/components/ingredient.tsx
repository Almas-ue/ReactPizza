import { FC, useState } from "react";
import { ingredientList } from "@/state/filtration";
import BoxLabel from "@/components/ui/boxLabel";

interface IngredientComponentProps {
  setIngredientList: (ingredient: any) => void;
}

const Ingredient: FC<IngredientComponentProps> = ({ setIngredientList }) => {
  const [lockFilter, setFilterLock] = useState<number>(6);

  return (
    <>
      <p className="font-bold">Ингредиенты: </p>
      <div className="ingredients flex flex-col gap-4">
        {ingredientList.map(
          ({ id, name }, index) =>
            index < lockFilter && (
              <BoxLabel
                key={id}
                onClick={() => {
                  setIngredientList((prev: string[]) =>
                    prev.includes(name)
                      ? prev.filter((item: string) => item !== name)
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
    </>
  );
};

export default Ingredient;
