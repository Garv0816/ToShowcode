import { CDN_LOGO } from "../utils/constants";
import { useState } from "react";


const Header = () =>{
const [login ,setLogin] = useState("Login")

    return(
        <div className="header">
            
            <div className="logo-container">
            <img className="logo"src= {CDN_LOGO}></img>
            </div>

           
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
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