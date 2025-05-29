import { setTotalPrice } from "@/store/priceTotal";
import { useDispatch } from "react-redux";

interface Props {
  prices: any;
  text: string;
}

export const PriceTotalBLock: React.FC<Props> = ({ prices, text }) => {
  const dispatch = useDispatch();

  const deliveryPrice = 240;
  const isDelivery = true;

  const totalProductPrice = prices.reduce(
    (acc: number, item: any) => acc + item.price * item.count,
    0
  );

  const procentPrice =
    prices.reduce(
      (acc: number, item: any) => acc + item.price * item.count,
      0
    ) * 0.05;

  dispatch(
    setTotalPrice(
      totalProductPrice + procentPrice + (isDelivery ? deliveryPrice : 0)
    )
  );

  return (
    <>
      <p className="flex justify-between items-baseline">
        {text}:
        <span className="flex-grow border-b border-dashed border-gray-400 mx-2" />
        <strong>{totalProductPrice}₽</strong>
      </p>
      <p className="flex justify-between items-baseline">
        Налог 5%:
        <span className="flex-grow border-b border-dashed border-gray-400 mx-2" />
        <strong>{procentPrice}₽</strong>
      </p>
      {isDelivery ? (
        <p className="flex justify-between items-baseline">
          Доставка:
          <span className="flex-grow border-b border-dashed border-gray-400 mx-2" />
          <strong>{deliveryPrice}₽</strong>
        </p>
      ) : (
        ""
      )}
    </>
  );
};
