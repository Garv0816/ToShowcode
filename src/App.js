import React from "react";
import ReactDOM from "react-dom/client";
import { useState,useEffect } from "react";

import Header from "./component/Header";
import Body from "./component/Body";








const AppLayout = ()=> {
        return (
            <div className ="app">
              
                < Header />
                < Body />

            </div>
        )
}

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<AppLayout />);