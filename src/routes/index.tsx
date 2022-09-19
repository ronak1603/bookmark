import { ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import {v4 as uuid} from "uuid";

import { ROOT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from "../utils/paths";

import Login from "./Login/index";
import Signup from "./Signup/index";
import Home from "./Home";
import Profile from "./Profile";

const routesConfig = [
  {
    path: ROOT_ROUTE,
    component: <Signup />,
    privateRoute: false,
  },
  {
    path: LOGIN_ROUTE,
    component: <Login />,
    privateRoute: false,
  },
  {
    path: HOME_ROUTE,
    component: <Home />,
    privateRoute: true,
  },
  {
    path: PROFILE_ROUTE,
    component: <Profile />,
    privateRoute: false,
  }
];

const elements = (component: ReactNode, privateRoute: boolean) => {
  const isUserPresent = localStorage.getItem("Login");
  const isValidRoute =
    (privateRoute && isUserPresent) || !(privateRoute || isUserPresent);
    if(isValidRoute)
      return component;
  return <Navigate to = {privateRoute?'/login':'/home'}/>
};

const AppRoutes = () => {
  return (
    <Routes>
      {routesConfig.map((route) => {
        const obj = { ...route };
        return (
          <Route
            key={uuid()}
            path={obj.path}
            element={elements(obj.component, obj.privateRoute)}
          ></Route>
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
