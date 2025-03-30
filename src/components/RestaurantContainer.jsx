import React, {useState} from "react";
import RestaurantCard, {withDiscountLabel} from "./RestaurantCard";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const RestaurantContainer = () => {

  const {listOfRestaurants, filteredRestaurants, setFilteredRestaurants, isLoading} = useRestaurants();
  const onlineStatus = useOnlineStatus();
  const [searchText, setSearchText] = useState("");

  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);

  if(isLoading){
    return <Shimmer/>;
  }
  
  if(onlineStatus === false){
    return (
      alert("You are offline. Please check your internet connection!")
    );
  }
  
  return (
    <div className="">
      <div className="flex items-center gap-10 ">
        <div>
          <input type="text" className="border-2 rounded-lg m-2 " value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
          <button 
            className="bg-gray-400 rounded-lg px-4 py-2 m-2 cursor-pointer"
            onClick={()=>{
              const searchRestaurants = listOfRestaurants.filter(
                (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchRestaurants);
            }} 
          >
            Search
          </button>
        </div>

        <div>
          <button 
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 transition cursor-pointer rounded-lg mx-2 my-2"
          onClick={()=>{
            const filterTopRestaurants = listOfRestaurants.filter(
              (restaurant)=> restaurant.info.avgRating > 4
            );
            setFilteredRestaurants(filterTopRestaurants);
          }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-evenly">
          {
            filteredRestaurants.map((restaurant)=>(
              <Link to = {`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
                  {
                    restaurant.info?.aggregatedDiscountInfoV3 &&
                    Object.keys(restaurant.info?.aggregatedDiscountInfoV3).length > 0 ? 
                    (<RestaurantCardDiscount resData = {restaurant}/>) : 
                    (<RestaurantCard resData = {restaurant}/>)           
                  }
                  
              </Link>
              
            ))
          }   
      </div>
      
    </div>
  );
};

export default RestaurantContainer;
