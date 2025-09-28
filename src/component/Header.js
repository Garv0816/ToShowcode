import { CDN_LOGO } from "../utils/constants";
import { use, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () =>{
const [login ,setLogin] = useState("Login")
const onlineStatus = useOnlineStatus()

    return(
        <div className="header">
            
            <div className="logo-container">
            <img className="logo"src= {CDN_LOGO}></img>
            </div>

           
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus ? "✅" : "⭕"}
                    </li>
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