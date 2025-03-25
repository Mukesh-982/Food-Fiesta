import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
    try {
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        if(!response.ok){
            throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();

        //optional chaining
        const restaurants = jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        //console.log(restaurants);
        setListOfRestaurants(restaurants);

    } catch (error) {
        console.log(error);
    }
  };


   
  return (listOfRestaurants.length === 0) ? <Shimmer/> : (
    <div className="">
      <div>
        <button 
        className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 transition cursor-pointer rounded-lg mx-2 my-2"
        onClick={()=>{
          const filteredRestaurants = listOfRestaurants.filter(
            (restaurant)=> restaurant.info.avgRating > 4
          );
          setListOfRestaurants(filteredRestaurants);
        }}
        >
          Top Rated Restaurants
        </button>
      </div>
        <div className="flex flex-wrap justify-between">
          {
            listOfRestaurants.map((restaurant)=>(
              <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
            ))
          }
           
        </div>
      
    </div>
  );
};

export default RestaurantContainer;
