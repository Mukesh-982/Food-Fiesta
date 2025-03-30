import React from 'react';
import { resImage } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
    return (
        <div className='max-w-xs rounded-lg shadow-md bg-white overflow-hidden m-2 p-2.5 cursor-pointer transform transition-transform duration-300 relative hover:scale-95 hover:z-10'>
            <div className="relative">
                <img className='w-full object-cover rounded-lg' src={resImage + resData.info.cloudinaryImageId} alt="Dish Image" />
            </div>
            <div className='my-2 px-3 py-1.5'>
                <p className='font-bold'>{resData.info.name}</p>
                <div className='flex gap-x-2.5 font-semibold'>
                    <p>⭐{resData.info.avgRating}</p><span>|</span>
                    <p>{resData.info.sla.slaString}</p>
                </div>
                <p className='text-gray-500 font-semibold'>{resData.info.cuisines.join(" , ")}</p>
                <p className='text-gray-500 font-semibold'>{resData.info.areaName}</p>
            </div>
        </div>
    );
};

// Higher Order Component
export const withDiscountLabel = (RestaurantCard) => {
    return ({ resData }) => {

        const discountInfo = resData.info?.aggregatedDiscountInfoV3?.header
            ? `${resData.info.aggregatedDiscountInfoV3.header} ${resData.info.aggregatedDiscountInfoV3.subHeader}`
            : null;

        return (
            <div className='relative hover:scale-100 hover:z-10 transition-transform duration-300'>
                <div className='relative'>
                    <RestaurantCard resData={resData} />
                    {discountInfo && (
                        <div className="absolute top-2 left-4 right-0 text-white  text-lg font-extrabold py-1.5 px-2">
                            {discountInfo}
                        </div>
                    )}
                </div>
            </div>
        );
    };
};

export default RestaurantCard;
