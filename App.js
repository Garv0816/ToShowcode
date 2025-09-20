import React from "react";
import ReactDOM from "react-dom/client";


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

const RestaurantCard = () => {
    return(
        <div className="res-card">
            <img className = "res-logo "src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/9e14fd7c-0bd4-4f06-86c4-db169bf00998_21239.jpg" />
            <h3>Meghana Food</h3>
            <h4>Indian , Biriyani , Chinese</h4>
            <h4>Rating 4.4 star</h4>
            <h4>Price : $20</h4>
        </div>
    )

}

const Body =()=> {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                 <RestaurantCard />
                  <RestaurantCard />
                   <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />

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