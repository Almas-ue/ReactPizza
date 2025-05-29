import {
  BlockInfo,
  ContentBlockInfo,
  HeaderBlockInfo,
} from "@/components/ui/blockInfo";
import { Button } from "@/components/ui/button";
import { PriceTotalBLock } from "@/components/ui/priceTotalBLock";
import { useBusket, useTotalPrice } from "@/hooks/useReducer";

const Total = () => {
  const busket = useBusket();
  const total = useTotalPrice();

  return (
    <BlockInfo miniSize={true} className="block max-h-[490px]">
      <HeaderBlockInfo>
        <div className="text-3xl">
          Итого: <strong>{total}</strong>
        </div>
      </HeaderBlockInfo>
      <ContentBlockInfo border>
        <PriceTotalBLock text={"Стоимость товаров"} prices={busket} />
      </ContentBlockInfo>
      <ContentBlockInfo border={false}>
        <Button className="w-full">Перейти к оплате</Button>
      </ContentBlockInfo>
    </BlockInfo>
  );
};

export default Total;
