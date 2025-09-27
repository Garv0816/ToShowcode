import { CDN_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () =>{
const [login ,setLogin] = useState("Login")

    return(
        <div className="header">
            
            <div className="logo-container">
            <img className="logo"src= {CDN_LOGO}></img>
            </div>

           
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to= "/About">About</Link></li>
                    <li><Link to="/Contact">Contact us</Link></li>
                    <li>Cart</li>
                </ul>

            </div>
             <button className = "login-btn"
             onClick={()=> {
                login == "Login"
                ? setLogin("Logout")
                : setLogin ("Login")
             }}>
                {login}
            </button>
        </div>
    )
}

export default Header;