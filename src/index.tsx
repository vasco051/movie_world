import { createContext } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import store from "./store/appStore";

import { IAppStore } from "./store/IAppStore";

import "./index.scss";


export const Context = createContext<IAppStore>(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Context.Provider value={store}>
    <App/>
  </Context.Provider>
);
