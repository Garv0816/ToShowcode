import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { WithPromotedCard } from "./RestaurantCard";


const Body =()=> {
    
const [resData , setresData]= useState([])
const [searchText ,  setsearchText] = useState("")

const RestanurantWithPromoted = WithPromotedCard(RestaurantCard)

useEffect (()=> {
    fetchData();
} , [1])


 console.log(resData)

const fetchData = async () => {
  try {
    const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57590&lng=77.33450&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    let json = await data.json();
    console.log("json", json)
 
    setresData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    



  } catch (error) {
    console.log("Fetch failed:", error);
  }
};



const online = useOnlineStatus();
if(online === false){
    return(<h1>Seems You are Offline check Your Internet connection</h1>)
}
    return(
        <div className="body">
            
            <div className="flex">
                <div className="">
                    <input type="text" className=" my-3  border-2 bg-red-30" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}
                    

                
                }></input>
                    <button className="border-2 hover:bg-pink-100  " onClick={()=>{
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

                <button className="bg-amber-200 mx-5 my-3 border-2 cursor-pointer"     
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

            
            <div className="flex flex-wrap">
                
                {Array.isArray(resData) && resData.map(
                    (restaurant, index) => (
                    // render restaurant which have promoted restaurant 

                    < RestaurantCard key={index} resData={restaurant}/> 
   
                        
                ))} 
            </div>
        </div>
    )
}

export default Body;