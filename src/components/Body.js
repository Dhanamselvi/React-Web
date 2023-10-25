import RestaurantCard from "./RestaurantCard"
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData()
    },[]);
    
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.011176460152448&lng=80.12400582432747&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }   
    
    // Conditional Rendering
   
    return (listOfRestaurants.length === 0) ?  <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                    onClick = {()=>{
                        setListOfRestaurants(listOfRestaurants.filter(res=>res.info.avgRating > 4.1));
                    }}    >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;