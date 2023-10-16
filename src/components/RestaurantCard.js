import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const { id,
            cloudinaryImageId,
            name,
            cuisines,
            avgRating,
            deliveryTime
          } = resData?.info;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img alt="res-logo"
                 src={CDN_URL+ cloudinaryImageId} 
                 className="res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard