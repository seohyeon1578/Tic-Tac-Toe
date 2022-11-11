import MainPage from "../pages/MainPage";
import OnlinePage from "../pages/OnlinePage";
import ComputerPage from "../pages/ComputerPage";
import SelectPage from "../pages/SelectPage";

const routes = [
  { path: "/", component: MainPage },
  { path: "/select", component: SelectPage },
  { path: "/online", component: OnlinePage },
  { path: "/computer", component: ComputerPage },
];

export default routes;