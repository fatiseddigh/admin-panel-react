import Home from "./pages/home/Home";

// import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
function App() {
  const Layout = () => {
    return <div className="main"></div>;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "products",
      element: <Products />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
