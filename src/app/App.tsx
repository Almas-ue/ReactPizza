import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { otherLayoutsList, routerList } from "@/router/routerList";
import store from "@/store/store";

interface app {
  categoryProvider?: JSX.IntrinsicElements;
}

const App: React.FC<app> = () => {
  return (
    <div className="w-full h-screen ">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            {routerList.map((route, index) => (
              <Route key={index} path={route.path} Component={route.element} />
            ))}
            {otherLayoutsList.map((route, index) => (
              <Route key={index} path={route.path} Component={route.element} />
            ))}
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
