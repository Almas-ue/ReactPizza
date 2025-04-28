import { FC } from "react";
import { Input } from "./../../../components/ui/input";

interface PriceComponentProps {
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void;
}

const PriceComponent: FC<PriceComponentProps> = ({
  setMinPrice,
  setMaxPrice,
}) => {
  const handleMinPrice = (e: string) => {
    setMinPrice(Number(e));
  };

  const handleMaxPrice = (e: string) => {
    setMaxPrice(Number(e));
  };

  return (
    <div className="price-filter">
      <p className="font-bold mb-4">Цена от и до: </p>
      <div className=" flex gap-4">
        <Input
          className="outline-none focus:outline-none w-[90px] h-10 "
          type="text"
          onChange={(e) => {
            handleMinPrice(e.target.value);
          }}
          id="priceMin"
        />
        <Input
          className="outline-none w-[90px] h-10"
          type="text"
          onChange={(e) => {
            handleMaxPrice(e.target.value);
          }}
          id="priceMax"
        />
      </div>
    </div>
  );
};

export default PriceComponent;
