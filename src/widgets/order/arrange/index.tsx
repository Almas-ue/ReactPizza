import PlusMinusBtn from "@/components/ui/PlusMinusBtn";
import { useBusket } from "@/hooks/useReducer";
import { useState } from "react";
import { useDispatch } from "react-redux";

const OrderArrange = () => {
  const busket = useBusket();
  console.log(busket);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-semibold">Оформление заказа</h2>

      <div className="flex gap-11 justify-between mt-12">
        <div className="">
          {busket?.map((item: any, index: number) => (
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
        </div>
        <div className="text-3xl">Итого</div>
      </div>
    </div>
  );
};

export default OrderArrange;
