import React from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { resImage } from '../utils/constants';
import useRestuarantMenu from '../utils/useRestaurantMenu';


const RestaurantMenu = () => {

    
    const {resId} = useParams();
    
    const resInfo = useRestuarantMenu(resId);

    if(resInfo === null){
        return <Shimmer/>
    }

    //restaurant name and remaining stuff
    const {name,cuisines,costForTwoMessage,avgRatingString, totalRatingsString} = resInfo?.cards[2]?.card?.card?.info;
    const {slaString} = resInfo?.cards?.[2]?.card?.card?.info.sla;

    //restaurant menu - (recommended)
    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
    //console.log(itemCards);


    return (
        <div className=' min-h-screen bg-gray-50 p-4'>
            <div className='flex flex-col items-center'>
                <div className='w-full max-w-3xl p-4'>
                    <h2 className='text-3xl font-extrabold text-gray-800'> 🍽️ {name}</h2>
                </div>

                <div className='w-full max-w-3xl p-6 bg-white shadow-md rounded-lg'>
                    <p className='text-lg font-semibold text-gray-700 flex items-center gap-4'>
                    ⭐<span className='text-green-600'>{avgRatingString+` (${totalRatingsString})`}</span>
                        <span>|  {costForTwoMessage}</span>
                    </p>
                    <p className='text-sm font-medium text-gray-900 mt-2'>{cuisines.join(" , ")}</p>
                    <p className='text-md font-medium text-gray-600 mt-2'>{slaString}</p>
                </div>

                <div className='p-3 mt-4'>
                    <p className='text-lg font-semibold '>Menu</p>
                </div>

            </div>
            
            
            {/* Map over items in menu */}
            <div className="flex flex-col items-center">
                {
                    itemCards?.length > 0 ? (
                        itemCards.map((item)=>(
                            <div key = {item?.card?.info?.id} className="w-full max-w-3xl flex justify-between items-start p-4 border-b border-gray-300 drop-shadow-2xl rounded-lg mb-2">
                                {/* Left Side - Text */}
                                <div className="flex-1">
                                    <p className="text-lg text-gray-800 font-bold mt-2">{item?.card?.info?.name}</p>
                                    <p className="font-semibold mb-2">₹ {item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price /100}</p>
                                    <p className="text-sm mb-2">⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}</p>
                                    <p>{item?.card?.info?.description}</p>
                                </div>

                                {/* Right Side - Image + Add Button */}
                                <div className="w-28 h-28 relative">
                                    <img
                                        className="w-full h-full rounded-lg object-cover shadow-sm"
                                        src={resImage + (item?.card?.info?.imageId ?? item?.card?.info?.boltImageId ?? "fallback-image.jpg")}
                                        alt="Dish image"
                                    />
                                    <button className="absolute -bottom-3.5 left-1/2 transform -translate-x-1/2 bg-white border border-green-600 text-green-600 font-bold text-sm px-4 py-1 rounded-lg shadow-md hover:bg-green-600 hover:text-white">
                                        ADD
                                    </button>
                                </div>
                            </div>

                        ))
                    ) : (
                        <p className='text-center mt-4 text-gray-600'>Loading menu...</p>
                    )
                }
                
            </div>
        </div>
    );
};

export default RestaurantMenu
