import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const Router = () => {
  return(
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} element={<route.component />}/>
        )
      })}
    </Routes>
  );
};

export default Router;