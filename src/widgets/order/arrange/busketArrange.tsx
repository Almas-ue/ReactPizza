import { useDispatch } from "react-redux";
import { decCountBusket, incCountBusket, removeItem } from "@/store/busket";
import { useBusket } from "@/hooks/useReducer";
import {
  BlockInfo,
  ContentBlockInfo,
  HeaderBlockInfo,
  TitleInfo,
} from "@/components/ui/blockInfo";
import PlusMinusBtn from "@/components/ui/PlusMinusBtn";

const BusketArrange = () => {
  const busket = useBusket();

  const dispatch = useDispatch();

  return (
    <BlockInfo miniSize={false}>
      <HeaderBlockInfo>
        <TitleInfo>1. Оформление заказа</TitleInfo>
      </HeaderBlockInfo>

      <ContentBlockInfo className="mt-9" border={false}>
        {busket?.map((item: any, index: number) => (
          <div key={index} className="flex flex-col gap-row-5 pb-5">
            <div
              className="flex gap-6 bg-white justify-between items-center pb-4"
              key={index}
            >
              <div className="flex gap-5 items-center">
                <img src={item.img} className="size-16" alt={item.name} />
                <div className="min-w-48 max-w-60">
                  <p className="text-[16px]">
                    <strong>{item.name}</strong>
                  </p>
                  <p className="text-[14px] text-gray-400">
                    Средняя {item.size?.diameter} Вес {item.size?.weight}
                  </p>
                </div>
              </div>
              <p className="font-bold">{item.price}</p>
              <div className="flex justify-between h-7">
                <PlusMinusBtn
                  text={item.count}
                  className="size-8"
                  MinusBtn={() => dispatch(decCountBusket(item.id))}
                  PlusdBtn={() => dispatch(incCountBusket(item.id))}
                />
                <button
                  className="ml-5"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  X
                </button>
              </div>
            </div>
            {index !== busket.length - 1 && (
              <div className="border-b border-gray-100" />
            )}
          </div>
        ))}
      </ContentBlockInfo>
    </BlockInfo>
  );
};

export default BusketArrange;
