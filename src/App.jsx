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
import {Provider} from "react-redux"
import appStore from "./utils/appStore";

const AppLayout = ()=> {
     return (
        <Provider store={appStore}>
        <div className="app">
            <Header />
            <Outlet />

        </div>
        </Provider>
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