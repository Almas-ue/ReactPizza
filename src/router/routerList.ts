import Layouts from "@/app/layouts";
import Error from "@/widgets/404/error";
import PizzaPage from "@/widgets/pages/pizzaPage";

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
