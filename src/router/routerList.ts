import Layouts from "@/app/layouts";
import Error from "@/widgets/404/error";
import PizzaPage from "@/widgets/pages/pizzaPage";
import Order from "@/widgets/order";

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
    path: "*",
    element: Error,
  },
];

export const otherLayoutsList = [
  {
    path: "/order/history",
    element: Order,
  },
  {
    path: "/order/arrange",
    element: Order,
  },
];
