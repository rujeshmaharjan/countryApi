import React from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import useApi from "./api";
import Country from "./Pages/Country/Country";

const App = () => {
  const { data, loading } = useApi();

  const Layout = () => {
    return (
      <div>
        <Outlet />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home data={data} loading={loading} />,
        },
        {
          path: "/country/:id",
          element: <Country data={data} loading={loading} />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
