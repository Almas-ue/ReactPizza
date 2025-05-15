import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { routerList } from "@/router/routerList";
import store from "@/store/store";

import Header from "../widgets/Header/Header";

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
