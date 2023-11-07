import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu()
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
         setResInfo(json?.data)
    }

    if (resInfo === null ) return <Shimmer />  

    const {name,cuisines,costForTwoMessage,cloudinaryImageId} = resInfo?.cards[0]?.card?.card?.info;
    const {title,itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
    return (
        
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(" ,")}</h3>
            <h3>{costForTwoMessage}</h3>
            <img src={cloudinaryImageId} />
            <h2>Cuisines</h2>
            <ul>
                <li>{cuisines[0]}</li>
                <li>{cuisines[1]}</li>
            </ul>
            <h2>Menus</h2>
            <h3>{title}</h3>
            <ul>
                {itemCards.map((itemCard)=>{
                    return (
                        <li key={itemCard?.card?.info?.id}>
                            {itemCard?.card?.info?.name} -- Rs. {itemCard?.card?.info?.price/100 || itemCard?.card?.info?.defaultPrice/100}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default RestaurantMenu