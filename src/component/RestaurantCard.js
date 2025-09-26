import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    
    const {resData} = props;

    const 
    {
        avgRating

        // cuisines,
        // costForTwo
      
    } = resData
    return(
        <div className="res-card">
            {/* <img className = "res-logo " src={ CDN_URL +imageId}/> */}
            <h3>{avgRating
}</h3>
            {/* <h4>{cuisines}</h4>
            <h4>{costForTwo}</h4>  */}
            
           
            
        </div>
    )

}
export default RestaurantCard;