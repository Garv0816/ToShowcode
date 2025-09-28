import React from "react";
import ReactDOM from "react-dom/client";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";


import Header from "./component/Header";
import Body from "./component/Body";
import RestaurantMenu from "./component/RestaurantMenu";

const AppLayout = ()=> {
     return (
        <div className="app">
            <Header />
            <Outlet />

        </div>
     )
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout />,
        children:[

    {
        path:"/",
        element:< Body />
    },

    {
        path:"/About",
        element: < About />  
    },
    {
        path :"/Contact",
        element: < Contact />
    },
    {
        path:"/resturant/:resID",
        element: <RestaurantMenu />
    }


        ],
          errorElement : <Error />
    }
  
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<RouterProvider router={AppRouter} />);