import MainPage from "../pages/MainPage";
import OnlinePage from "../pages/OnlinePage";
import ComputerPage from "../pages/ComputerPage";

const routes = [
  { path: "/", component: MainPage },
  { path: "/online", component: OnlinePage },
  { path: "/computer", component: ComputerPage },
];

export default routes;