import Layouts from "@/app/layouts";
import Error from "@/widgets/404/error";

export const routerList = [
  {
    path: "/",
    element: Layouts,
  },
  {
    path: "/pizza/:page",
    element: Layouts,
  },
  {
    path: "*",
    element: Error,
  },
];
