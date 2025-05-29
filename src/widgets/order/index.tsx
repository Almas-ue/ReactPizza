import { useLocation } from "react-router";
import OrderArrange from "./arrange";
import OrderHistory from "./history";

const Order = () => {
  const location = useLocation().pathname.split("/").slice(1)[1];
  return (
    <div className="min-h-screen bg-[#F4F1EE]">
      {location === "history" ? <OrderHistory /> : <OrderArrange />}
    </div>
  );
};

export default Order;
