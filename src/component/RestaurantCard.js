import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    
    const {resData} = props;

    console.log("reaoskjjhaf->",resData)

    
    return(
        <div className="res-card">

            
            <img src={CDN_URL + resData?.info?.cloudinaryImageId} />
            <h3>{resData?.info?.name}</h3>
            <h4>{"Cuisines : "+resData?.info?.cuisines.join(" , ")}</h4>
            <h4>{"avgRating :"+resData?.info?.avgRating + "⭐"}</h4> 
             <h4>{"Locality :" + resData?.info?.locality}</h4>
             <h4>{"Cost :" +resData?.info?.costForTwo}</h4>
            <h4>{"Delivery Time : "  + resData?.info?.sla.deliveryTime +"min"}</h4>
           
            
           
            
        </div>
    )

}
export default RestaurantCard;