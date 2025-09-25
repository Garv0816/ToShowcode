import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";



const Body =()=> {
    
const [resData , setresData]= useState(resList)

useEffect (()=> {
    fetchData();
} , [])



const fetchData = async () => {
  try {
    const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40980&lng=77.31000&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setresData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)


  } catch (error) {
    console.error("Fetch failed:", error);
  }
};
 
    return(
        <div className="body">
            
            <div className="filter">
                <button className="filter-btn"     
                onClick={ () => {
                    const filteredList = resData.filter(
                        (res) => res.rating >4.5
                    );  
                    setresData(filteredList)
                } 
                
                }>
                    
                    SEARCH ABOVE RATING FOOD

                </button>

                
              
             
                   
            </div>
            <div className="res-container">
                {resData.map((restaurant, index) => (
                    <RestaurantCard key={index} resData={restaurant}/>
                ))} 
            </div>
        </div>
    )
}

export default Body;