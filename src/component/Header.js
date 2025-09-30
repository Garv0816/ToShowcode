import { CDN_LOGO } from "../utils/constants";
import { use, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () =>{
const [login ,setLogin] = useState("Login")
const onlineStatus = useOnlineStatus()

    return(
        <div className="flex">
            
            <div className="w-45">
            <img className="logo"src= {CDN_LOGO}></img>
            </div>

           
            <div className="bg-pink-200 content-center w-full space-x-5 flex  justify-center">
                <ul className=" pink flex space-x-5">
                    <li className="  content-center ">
                        Online Status : {onlineStatus ? "✅" : "⭕"}
                    </li>
                    <li className="content-center "><Link to="/">Home</Link></li>
                    <li className="content-center"><Link to= "/About">About</Link></li>
                    <li className="content-center"><Link to="/Contact">Contact us</Link></li>
                    <li className="content-center">Cart</li>
                </ul>

            </div>
             <button className = "flex items-center justify-center px-6 py-3 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out"
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