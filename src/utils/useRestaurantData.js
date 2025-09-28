import { useState, useEffect } from "react";


const useRestaurantData = (resID)=> {
    const[resInfo ,setresInfo] = useState(null)


    useEffect(()=> {
    fetchData();
})
 const  fetchData = async()=>{

    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.57590&lng=77.33450&restaurantId=${resID}`);
    console.log(resID)

    const Json = await data.json();


    setresInfo(Json.data)
    console.log(Json)


    

 }
return resInfo
}

export default useRestaurantData;