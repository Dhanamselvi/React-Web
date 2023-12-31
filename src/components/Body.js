import RestaurantCard from "./RestaurantCard"
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData()
    },[]);
    
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9970368&lng=80.110055&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }   
    
    // Conditional Rendering
   
    return (listOfRestaurants.length === 0) ?  <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" 
                           className="search-box" 
                           value={searchText}
                           onChange={(e)=>{
                            setSearchText(e.target.value)
                           }} />
                    <button onClick = {()=>{
                        // filtered the restraunt cards and update the UI
                        const filteredData = listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurant(filteredData);
                    }}>
                        Search
                    </button>
                </div>
                <button className="filter-btn" 
                    onClick = {()=>{
                        const filteredData = listOfRestaurants.filter((res=>res.info.avgRating > 4))
                        setFilteredRestaurant(filteredData);
                    }}    >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(restaurant => (
                        <Link key={restaurant.info.id} to={"/restaurantMenu/"+restaurant.info.id}>
                            <RestaurantCard resData={restaurant}/>
                        </Link> 
                    ))
                }
            </div>
        </div>
    )
}

export default Body;