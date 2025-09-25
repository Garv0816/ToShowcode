import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    
    const {resData} = props;

    const 
    {
        name 
        // cuisine,
        // priceRange,
        // deliveryTime,
        // rating,
        // imageId
    } = resData
    return(
        <div className="res-card">
            <img className = "res-logo " src={ CDN_URL +imageId}/>
            <h3>{name}</h3>
            {/* <h4>{cuisine}</h4>
            <h4>{priceRange}</h4> 
            <h4>{deliveryTime}</h4>
            <h4>{rating}</h4> */}
           
            
        </div>
    )

}
export default RestaurantCard;