import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Context } from "../index";
import { privateRoutes, publicRoutes } from "./routes";


const AppRouter: FC = observer(() => {
  const { auth } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("auth_token")) {
      auth.setAuth(true)
    }
  }, [])

  return (
    <Routes>
      {auth.isAuth
        ? privateRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.element/>}
            key={route.path}
          />
        ))
        : publicRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.element/>}
            key={route.path}
          />
        ))}
    </Routes>
  );
});

export default AppRouter;
