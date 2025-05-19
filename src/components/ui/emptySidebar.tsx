import { MoveLeft } from "lucide-react";
import box from "../../assets/images/box.svg";
import { Button } from "./button";
import { useActiveSidebar } from "@/hooks/useReducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveSidebar } from "@/store/activeSidebar";

const EmptySidebar = () => {
  const open = useActiveSidebar();
  const dispatch = useDispatch();
  const [active, setActive] = useState(open);
  useEffect(() => setActive(open), [open]);

  return (
    <>
      <div className="h-screen ml-[55px] flex justify-center items-center absolute">
        <div className="w-[285px] flex flex-col items-center text-center ml-auto">
          <img src={box} alt="box" />
          <h2 className="font-semibold text-xl">Корзина пустая</h2>
          <p className="text-[16px] text-gray-400">
            Добавьте хотя бы одну пиццу, чтобы совершить заказ
          </p>
          <Button
            className="px-9 py-5 mt-9"
            variant={"primary"}
            onClick={() => dispatch(setActiveSidebar(false))}
          >
            <MoveLeft className="mr-2" /> Вернуться назад
          </Button>
        </div>
      </div>
    </>
  );
};

export default EmptySidebar;
