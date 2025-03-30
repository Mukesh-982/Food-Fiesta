import React from 'react'
import {  useParams } from 'react-router-dom';
import { useState } from 'react';
import Shimmer from './Shimmer';
import MenuCategory from './MenuCategory';
import useRestuarantMenu from '../utils/useRestaurantMenu';


const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(0);

    const {resId} = useParams();

    const resInfo = useRestuarantMenu(resId);

    if(resInfo === null){
        return <Shimmer/>
    }

    //restaurant name and remaining stuff
    const {name,cuisines,costForTwoMessage,avgRatingString, totalRatingsString, areaName} = resInfo?.cards[2]?.card?.card?.info;
    //console.log(resInfo?.cards[2]?.card?.card?.info);
    const {slaString} = resInfo?.cards?.[2]?.card?.card?.info.sla;

    //restaurant menu - (recommended)
    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
    //console.log(itemCards);
    //console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log(categories);


    return (
        <div className=' min-h-screen bg-gray-50 p-4'>
            <div className='flex flex-col items-center'>
                <div className='w-6/12 p-4'>
                    <h2 className='text-3xl font-extrabold text-gray-800'> 🍽️ {name}</h2>
                </div>

                <div className='w-6/12 p-6 bg-white shadow-md rounded-lg'>
                    <p className='text-lg font-semibold text-gray-700 flex items-center gap-4'>
                    ⭐<span className='text-green-600'>{avgRatingString+` (${totalRatingsString})`}</span>
                        <span>| {costForTwoMessage}</span>
                    </p>
                    <p className='text-sm font-medium text-gray-900 mt-2'>{cuisines.join(" , ")}</p>
                    <p className='text-sm font-medium text-gray-600 mt-2'>Outlet ⯈ {areaName}</p>
                    <p className='text-md font-medium text-gray-600 mt-2'>{slaString}</p>
                </div>

                <div className='p-3 mt-4'>
                    <p className='text-lg font-semibold '>Menu</p>
                </div>

            </div>

            {/* Categories accordions in the menu */}
            {
                categories.map((category,index)=>(
                    <MenuCategory key={category?.card?.card?.title} 
                    menuData = {category?.card?.card} 
                    showItems = {index === showIndex ? true : false}
                    setShowIndex = {()=>setShowIndex(index)}/>
                ))
            }
            
        </div>
    );
};

export default RestaurantMenu
