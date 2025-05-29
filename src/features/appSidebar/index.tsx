import { useBusket } from "@/hooks/useReducer";
import PlusMinusBtn from "@/components/ui/PlusMinusBtn";
import {
  ContentSidebar,
  FooterSidebar,
  HeaderSidebar,
  Sidebar,
} from "@/components/ui/sidebar";
import { useDispatch } from "react-redux";
import {
  decCountBusket,
  destroyState,
  incCountBusket,
  removeItem,
} from "@/store/busket";
import EmptySidebar from "@/components/ui/emptySidebar";
import { Button } from "@/components/ui/button";
import { MoveRight, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { PriceTotalBLock } from "@/components/ui/priceTotalBLock";

const AppSidebar = () => {
  const buskets: any[] = useBusket();
  const dispatch = useDispatch();

  console.log(buskets);
  return buskets.length ? (
    <Sidebar className="text-nowrap">
      <HeaderSidebar>
        <span>
          В корзине <strong>{buskets ? buskets.length : 0} товаров</strong>
          <span
            className="text-primary cursor-pointer ml-3"
            onClick={() => dispatch(destroyState())}
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
              <div className="flex justify-between">
                <div className="">
                  <p className="text-[16px]">
                    <strong>{item.name}</strong>
                  </p>
                  <p className="text-[14px] text-gray-400">
                    Средняя {item.size?.diameter} Вес {item.size?.weight}
                  </p>
                </div>
                <Trash2
                  className="cursor-pointer"
                  onClick={() => dispatch(removeItem(item.id))}
                />
              </div>

              <div className="border-b my-3" />
              <div className="flex justify-between h-7">
                <PlusMinusBtn
                  text={item.count}
                  className="size-8"
                  MinusBtn={() => dispatch(decCountBusket(item.id))}
                  PlusdBtn={() => dispatch(incCountBusket(item.id))}
                />
                <p className="font-bold">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </ContentSidebar>
      <FooterSidebar className="bg-white">
        <div className="p-9">
          <PriceTotalBLock prices={buskets} text="Итого" />
          <Link to={"/order/arrange"}>
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
