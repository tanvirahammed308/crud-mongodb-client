import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import SignUP from "../pages/SignUP";
import SignIn from "../pages/SignIn";
import Users from "../pages/Users";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
     
      children: [
        {
          path: "/",
          element: <Home />,
          loader:()=>fetch('http://localhost:3000/coffees')
        },
        {
          path: "/addcoffee",
          element: <AddCoffee />,
        },
        {
          path: "/signup",
          element: <SignUP />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/users",
          element: <Users />,
          loader:()=>fetch('http://localhost:3000/users')
        },
        {
          path: "/updatecoffee/:id",
          element: <UpdateCoffee />,
          loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
        },
      ],
    },
  ]);
  export default router ;