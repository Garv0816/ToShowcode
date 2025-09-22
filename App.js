import React from "react";
import ReactDOM from "react-dom/client";
import { useState,useEffect } from "react";


const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.citypng.com/public/uploads/preview/fast-food-hamburger-restaurant-logo-701751694776912tqpvbqdhi5.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    


    const {resData} = props;
    console.log("res data->",resData[0])
    return(
        <div className="res-card">
            {/* <img className = "res-logo "src={resData?.image?.url} /> */}
            <h3>{resData?.name}</h3>
            <h1>my name is gullu</h1>
           
            
        </div>
    )

}



const Body =()=> {
   

const [resListData,setRestListData]=useState([])

useEffect(()=>{
    let resList = fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40980&lng=77.31000&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
.then((res)=>res.json())
.then((data)=>{ setRestListData(data?.data.cards)})
console.log("hello i am hemant")
},[])
console.log("hello i am gullu")
console.log("testing",resListData)
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                resData = {resListData}
                />
                 

            </div>
        </div>
    )
}

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