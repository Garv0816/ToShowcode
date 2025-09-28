import useRestaurantData from "../utils/useRestaurantData";
import { useParams } from "react-router-dom";




const RestaurantMenu = ()=>{


    const {resID} = useParams()

    const restInfo = useRestaurantData(resID)
 
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