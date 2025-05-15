import { useDispatch } from "react-redux";
import {
  menuTradititonPizza,
  setTradiotionalPizza,
} from "@/store/menuTradiotional";
import { cn } from "@/lib/utils";
import { useSizePizza, useTradPizza } from "@/hooks/useReducer";
import { menuSizePizza, setPizzeSize } from "@/store/menuSizePizza";

import CategoryBtn from "@/components/ui/categoryBtn";

const MenuNameSize = () => {
  const activeSize = useSizePizza();
  const activeTrad = useTradPizza();
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-between bg-gray-200 rounded-[30px] p-[2px]">
        {menuSizePizza.map((size, index) => (
          <CategoryBtn
            key={index}
            name={size}
            className={cn(
              "w-full rounded-[30px] px-8 py-2 font-medium",
              activeSize == size && "text-black"
            )}
            FuncBtn={() => dispatch(setPizzeSize(size))}
            active={activeSize == size ? true : false}
          />
        ))}
      </div>

      <div className="flex justify-between bg-gray-200 rounded-[30px] p-[2px]">
        {menuTradititonPizza.map((trad, index) => (
          <CategoryBtn
            key={index}
            name={trad}
            className={cn(
              "w-full rounded-[30px] py-2 font-medium",
              activeTrad == trad && "text-black"
            )}
            FuncBtn={() => dispatch(setTradiotionalPizza(trad))}
            active={activeTrad == trad ? true : false}
          />
        ))}
      </div>
    </>
  );
};

export default MenuNameSize;
