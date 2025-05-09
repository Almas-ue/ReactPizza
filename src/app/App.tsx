import React from "react";
import { Provider } from "react-redux";
import store from "@/store/store";
import { BrowserRouter, Route, Routes } from "react-router";

import Header from "../widgets/Header/Header";
import { routerList } from "@/router/routerList";

interface app {
  categoryProvider?: JSX.IntrinsicElements;
}

const App: React.FC<app> = () => {
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            {routerList.map((route, index) => (
              <Route key={index} path={route.path} Component={route.element} />
            ))}
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
