import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home/Home";

const publicRoutes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  // { path: "*", element: <NotFound /> },
];

export const routes = [...publicRoutes];
