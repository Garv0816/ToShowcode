import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    
    const {resData} = props;

    console.log("reaoskjjhaf->",resData)

    
    return(
        
          
        <div className="m-4 p-4 bg-amber-200 rounded-lg shadow-md w-64 hover:shadow-xl transition duration-300">
         <Link to = {`/resturant/${resData?.info?.id}`}>

           
           <img className="w-50" src={CDN_URL + resData?.info?.cloudinaryImageId} />
            <h3 className="w-50">{resData?.info?.name}</h3>
            <h4 className="w-50">{"Cuisines : "+resData?.info?.cuisines.join(" , ")}</h4>
            <h4 className="w-50">{"avgRating :"+resData?.info?.avgRating + "⭐"}</h4> 
             <h4 className="w-50">{"Locality :" + resData?.info?.locality}</h4>
             <h4 className="w-50">{"Cost :" +resData?.info?.costForTwo}</h4>
            <h4 className="w-50">{"Delivery Time : "  + resData?.info?.sla.deliveryTime +"min"}</h4>

            </Link>

                        
   
            
        </div>

    )

}



export default RestaurantCard;


