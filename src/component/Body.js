import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body =()=> {
    
const [resData , setresData]= useState([])
const [searchText ,  setsearchText] = useState("")

useEffect (()=> {
    fetchData();
} , [1])


 console.log(resData)

const fetchData = async () => {
  try {
    const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40980&lng=77.31000&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    let json = await data.json();
    console.log("json", json)
 
    setresData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    

  

  } catch (error) {
    console.log("Fetch failed:", error);
  }
};

if (resData.length === 0)
    {
       return <Shimmer />
    }


 
    return(
        <div className="body">
            
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}
                    

                
                }></input>
                    <button onClick={()=>{
                        console.log(searchText)
                        console.log("resdata->",resData);
                        console.log("redadata inner=",resData[0].info?.name)
                        const filteredData = resData.filter(
                        (rest) => rest.info?.name.includes(searchText)
                        
                    
                        );
                        console.log(searchText)
                       
                        setresData(filteredData)
                       
                        
                    }}>Search</button> 
                </div>

                <button className="filter-btn"     
                onClick={ () => {
                    const filteredList = resData.filter(
                        (resData) => resData?.info?.avgRating >4.1
                    );  
                    setresData(filteredList)
                } 
                
                }>
                    
                    SEARCH ABOVE RATING FOOD

                </button>                 
            </div>

            
            <div className="res-container">
                
                {Array.isArray(resData) && resData.map(
                    (restaurant, index) => (
                   < RestaurantCard key={index} resData={restaurant}/> 
                ))} 
            </div>
        </div>
    )
}

export default Body;