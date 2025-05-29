import { useBusket } from "@/hooks/useReducer";
import Header from "@/widgets/Header/Header";
import Container from "@/components/ui/container";
import BusketArrange from "./busketArrange";
import PersonInfo from "./personInfo";
import Adress from "./adress";
import Total from "./Total";

const OrderArrange = () => {
  const busket = useBusket();

  return (
    <>
      <Header lite={true} />
      <Container>
        <div className="flex gap-11 justify-between mt-12">
          <div className="flex flex-col gap-11">
            <BusketArrange />
            <PersonInfo />
            <Adress />
          </div>
          <Total />
        </div>
      </Container>
    </>
  );
};

export default OrderArrange;
