import Layouts from "@/app/layouts";
import Error from "@/widgets/404/error";
import PizzaPage from "@/widgets/pages/pizzaPage";
import OrderArrange from "@/widgets/order/arrange";
import OrderHistory from "@/widgets/order/history";

export const routerList = [
  {
    path: "/",
    element: Layouts,
  },
  {
    path: "/pizza/:page",
    element: PizzaPage,
  },
  {
    path: "/order/arrange",
    element: OrderArrange,
  },
  {
    path: "/order/history",
    element: OrderHistory,
  },
  {
    path: "*",
    element: Error,
  },
];
