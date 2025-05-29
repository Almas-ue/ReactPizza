import { useDispatch } from "react-redux";
import PlusMinusBtn from "./PlusMinusBtn";
import { decCountBusket, incCountBusket } from "@/store/busket";
import { useBusket } from "@/hooks/useReducer";

interface props {
  itemId: number;
}

const BusketPlsMns: React.FC<props> = ({ itemId }) => {
  const busket = useBusket();

  const res = busket.filter((item: any) => item.id === itemId);
  const dispatch = useDispatch();

  return (
    <PlusMinusBtn
      className="size-8"
      MinusBtn={() => dispatch(decCountBusket(res[0].id))}
      text={res[0].count}
      PlusdBtn={() => dispatch(incCountBusket(res[0].id))}
    />
  );
};

export default BusketPlsMns;
