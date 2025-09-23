import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";



const Body =()=> {
    
const [resData , setresData]= useState(resList)
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"     onClick={ () => {
                    const filteredList = resData.filter(
                        (res) => res.cuisine == "Italian"
                    );  
                    setresData(filteredList)
                } 
                
                }>
                    
                     TOP RATED RESTAURANT

                </button>
              
             
                   
            </div>
            <div className="res-container">
                {resData.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))} 
            </div>
        </div>
    )
}

export default Body;