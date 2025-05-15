import PlusMinusBtn from "@/components/ui/PlusMinusBtn";
import {
  ContentSidebar,
  FooterSidebar,
  HeaderSidebar,
  Sidebar,
} from "@/components/ui/sidebar";
import { useBusket } from "@/hooks/useReducer";
import { useState } from "react";

const AppSidebar = () => {
  const buskets = useBusket();
  const [count, setCount] = useState(1);

  return (
    <Sidebar>
      <HeaderSidebar>Header</HeaderSidebar>
      <ContentSidebar className="">
        <div className="flex gap-6 p-5 bg-white">
          <div className="">
            <img src={buskets.img} className="size-16" alt={buskets.name} />
          </div>
          <div className="w-[260px]">
            <p className="text-[16px]">
              <strong>{buskets.name}</strong>
            </p>
            <p className="text-[14px] text-gray-400">
              Средняя {buskets.size?.diameter} Вес {buskets.size?.weight}
            </p>
            <div className="border-b my-3" />
            <div className="flex justify-between h-7">
              <PlusMinusBtn
                text={count}
                className="size-8"
                firstBtn={() => setCount(count > 0 ? count - 1 : 0)}
                secondBtn={() => setCount(count + 1)}
              />
              <p className="font-bold">{buskets.price}</p>
            </div>
          </div>
        </div>
      </ContentSidebar>
      <FooterSidebar>
        <p>footer</p>
        <p>footer</p>
        <p>footer</p>
        <p>footer</p>
      </FooterSidebar>
    </Sidebar>
  );
};

export default AppSidebar;
