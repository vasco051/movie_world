import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRouter from "./router/Router";


const App: FC = observer(() => {
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
});

export default App;
