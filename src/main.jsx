import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/HomePage";
import Error from "./Pages/ErrorPage";
import MarketPlace from "./Pages/MarketPlacePage";
import CreateAccount from "./Pages/CreateAccountPage";
import Rankings from "./Pages/RankingsPage";
import Root from "./Pages/RootPage";
import ConnectWallet from "./Pages/ConnectWalletPage";
import { Outlet } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/marketplace",
        element: <MarketPlace />,
      },
      {
        path: "/signin",
        element: <CreateAccount />,
      },
      {
        path: "/connect-wallet",
        element: <ConnectWallet />,
      },
      {
        path: "/rankings",
        element: <Rankings />,
        children: [{ path: ":id", element: <div>Profile 32432</div> }],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  </React.StrictMode>
);
