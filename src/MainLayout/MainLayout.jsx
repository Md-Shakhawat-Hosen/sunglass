import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Collection from "../Components/Collection/Collection";
import Contact from "../Components/Contact/Contact";
import Login from "../Components/Login/Login";
import Orders from "../Components/Orders/Orders";
import Details from "../Components/Products/Details/Details";
import Products from "../Components/Products/Products";
import Register from "../Components/Register/Register";
import Home from "../Pages/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Root from "../Root/Root";


    const myRoute = createBrowserRouter([
      {
        path: "/",
        element: <Root></Root>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/products",
            element: <Products></Products>,
            loader: () => fetch("/sunglass.json"),
          },
          {
            path: "/details/:id",
            element: <Details></Details>,
            loader: () => fetch("/sunglass.json"),
          },
          {
            path: "/collection",
            element: <Collection></Collection>,
          },
          {
            path: "/about",
            element: <About></About>,
          },
          {
            path: "/contact",
            element: <Contact></Contact>,
          },
          {
            path: "/login",
            element: <Login></Login>,
          },
          {
            path: "/register",
            element: <Register></Register>,
          },
          {
            path: "/orders",
            element: (
              <PrivateRoute>
                <Orders></Orders>
              </PrivateRoute>
            ),
          },
        ],
      },
    ]);

export default myRoute;