import { useState } from "react";
import { useBusket } from "@/hooks/useReducer";
import PlusMinusBtn from "@/components/ui/PlusMinusBtn";
import {
  ContentSidebar,
  FooterSidebar,
  HeaderSidebar,
  Sidebar,
} from "@/components/ui/sidebar";
import { useDispatch } from "react-redux";
import { setStateBusket } from "@/store/busket";
import EmptySidebar from "@/components/ui/emptySidebar";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";

const AppSidebar = () => {
  const buskets: any[] = useBusket();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  return buskets.length ? (
    <Sidebar>
      <HeaderSidebar>
        <span>
          В корзине <strong>{buskets ? buskets.length : 0} товаров</strong>
          <span
            className="text-primary cursor-pointer ml-3"
            onClick={() => dispatch(setStateBusket([]))}
          >
            Удалить все
          </span>
        </span>
      </HeaderSidebar>
      <ContentSidebar className="">
        {buskets?.map((item, index) => (
          <div className="flex gap-6 p-5 bg-white" key={index}>
            <div className="">
              <img src={item.img} className="size-16" alt={item.name} />
            </div>
            <div className="w-[260px]">
              <p className="text-[16px]">
                <strong>{item.name}</strong>
              </p>
              <p className="text-[14px] text-gray-400">
                Средняя {item.size?.diameter} Вес {item.size?.weight}
              </p>
              <div className="border-b my-3" />
              <div className="flex justify-between h-7">
                <PlusMinusBtn
                  text={count}
                  className="size-8"
                  firstBtn={() => setCount(count > 0 ? count - 1 : 0)}
                  secondBtn={() => setCount(count + 1)}
                />
                <p className="font-bold">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </ContentSidebar>
      <FooterSidebar className="bg-white">
        <div className="p-9">
          <p className="flex justify-between items-baseline">
            Итого:
            <span className="flex-grow border-b border-dashed border-gray-400 mx-2" />
            <strong>
              {buskets.reduce((acc, item) => acc + item.price, 0)} ₽
            </strong>
          </p>
          <p className="flex justify-between items-baseline">
            Налог 5%:
            <span className="flex-grow border-b border-dashed border-gray-400 mx-2" />
            <strong>
              {buskets.reduce((acc, item) => acc + item.price, 0) * 0.05} ₽
            </strong>
          </p>
          <Link to={"/order/history"}>
            <Button className="w-full mt-5 rounded-2xl py-[24px]">
              Оформить заказ <MoveRight className="ml-5" />
            </Button>
          </Link>
        </div>
      </FooterSidebar>
    </Sidebar>
  ) : (
    <Sidebar className="bg-white">
      <ContentSidebar>
        <EmptySidebar />
      </ContentSidebar>
    </Sidebar>
  );
};

export default AppSidebar;
