import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";


const useRestaurantData = (resID)=> {
    const[resInfo ,setresInfo] = useState(null)


    useEffect(()=> {
    fetchData();
},[])
 const  fetchData = async()=>{

    const data = await fetch(MENU_URL + resID);
    

    const Json = await data.json();


    setresInfo(Json.data)
    console.log(Json)
   


    

 }
  
return resInfo
}

export default useRestaurantData;