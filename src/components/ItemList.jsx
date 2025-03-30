import React from 'react';
import { resImage } from '../utils/constants';

const ItemList = ({ itemData }) => {
    //console.log(itemData);

    return (
        <div className="max-w-3xl mx-auto p-4 rounded-lg">
            {itemData.map((item) => (
                <div
                    key={item?.card?.info?.id}
                    className="flex justify-between items-center p-4 mb-6 bg-gray-100 rounded-lg shadow-md"
                >
                    {/* Left side - Text */}
                    <div className="flex-1 pr-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {item?.card?.info?.name}
                        </h3>
                        <p className="text-gray-600 font-semibold">
                            ₹ {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                        </p>
                        {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                            <p className="text-sm text-gray-700">
                                ⭐ {item.card.info.ratings.aggregatedRating.rating} (
                                {item.card.info.ratings.aggregatedRating.ratingCountV2})
                            </p>
                            )
                        }
                        <p className="text-sm text-gray-600 mt-2">
                            {item?.card?.info?.description}
                        </p>
                    </div>

                    {/* Right side - Image + Add button */}
                    <div className="relative w-28 h-28 flex-shrink-0">
                        <img
                            className="w-full h-full rounded-lg object-cover shadow-md border border-gray-300"
                            src={resImage + item?.card?.info?.imageId}
                            alt="Dish"
                        />
                        <button
                            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 
                            bg-white border border-green-600 text-green-600 font-semibold 
                            text-sm px-4 py-1 rounded-lg shadow-md hover:bg-green-600 
                            hover:text-white transition duration-300 mb-1 cursor-pointer"
                        >
                            ADD
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
