import { useRoutes } from "react-router-dom";

import { HOMEPAGE } from "../utils/paths";
import Signup from "./Signup/index";

const AppRoutes = () => {
  const routes = useRoutes([{ path: HOMEPAGE, element: <Signup /> }]);
  return routes;
};

export default AppRoutes;