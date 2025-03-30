import { useState, useEffect } from "react"
import { SWIGGY_API } from "./constants"

const useRestaurants = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    //fetchdata
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        try {
            const response = await fetch(SWIGGY_API);
            if(!response.ok){
                throw new Error("Failed to fetch data");
            }

            const jsonData = await response.json();
            //console.log(jsonData.data);

            //export restaurants data from jsonData
            const restaurants = jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            //console.log(restaurants);

            setListOfRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        } catch (error) {
            console.error("Error while fetching restaurants :",error);
        }
        finally{
            setIsLoading(false);
        }
    };

    return {listOfRestaurants, filteredRestaurants, setFilteredRestaurants, isLoading};

}

export default useRestaurants;