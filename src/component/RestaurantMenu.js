import { useState , useEffect } from "react"
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";



const RestaurantMenu = ()=>{
    const[restInfo , setresInfo] = useState(null);

    const {resID} = useParams()


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

 
    return(
        <div className="restMenu">
          
            <h1>{restInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <h2>{restInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h2>
            <h2>{restInfo?.cards[2]?.card?.card?.info?.avgRating}</h2>
              <h2>{restInfo?.cards[2]?.card?.card?.info?.totalRatingsString}</h2>
              
            <h2>{restInfo?.cards[2]?.card?.card?.info?.city}</h2>
              
            

            
            <h2>{restInfo?.cards[2]?.card?.card?.info?.locality}</h2>
            
              
        </div>
    )
}

export default RestaurantMenu