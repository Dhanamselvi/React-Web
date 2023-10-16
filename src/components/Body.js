import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"

let listOfRestaurants = [
    {
        "info": {
            "id": "17819",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "Thyagaraya Road",
            "areaName": "T. Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.2,
            "parentId": "547",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
        },
    },
    {
        "info": {
            "id": "17820",
            "name": "Dominos",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "Thyagaraya Road",
            "areaName": "T. Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 3.8,
            "parentId": "547",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
        },
    },
];

const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                        onClick={()=>{
                            listOfRestaurants = listOfRestaurants.filter(res => res.info.avgRating > 4);
                            console.log(listOfRestaurants)
                         }}>
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

export default Body