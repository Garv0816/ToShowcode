import useRestaurantData from "../utils/useRestaurantData";
import { useParams } from "react-router-dom";




const RestaurantMenu = ()=>{


    const {resID} = useParams()

    const restInfo = useRestaurantData(resID)
    
    return(

        <div className="w-6/12 border p-6/12 relative left-3/12 right-3/12 ">
     
          {/*-------------- Restaurant card heading  -------------------*/}
            <h1 className="font-bold text-4xl">
                {restInfo?.cards[2]?.card?.card?.info?.name}</h1>


        {/*----------------- Restaurant card deatails---------------------- */}
            <div className="border my-8 mx-4 rounded-2xl p-2">
                <div className="flex">
                     
                    <p>{restInfo?.cards[2]?.card?.card?.info?.avgRating||""}</p>
                    <p>{restInfo?.cards[2]?.card?.card?.info?.totalRatingsString}</p>
                    <p>{(restInfo?.cards[2]?.card?.card?.info?.costForTwo)/100||""}</p>
                </div>
               
                <p>{restInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</p>


            {/* ------------------card third menu page -------------*/}








            
            

            </div>
            
              
            

            
            {/* <h2>{restInfo?.cards[2]?.card?.card?.info?.locality}</h2> */}

            

        </div>
    )
}

export default RestaurantMenu