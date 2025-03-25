import React from 'react'
import { resImage } from '../utils/constants'

const RestaurantCard = ({resData}) => {
    return (
        <div className='max-w-xs rounded-lg shadow-md bg-white overflow-hidden m-2 p-2.5 cursor-pointer hover:scale-105 transition duration-300'>
            <img className='w-full object-cover rounded-lg' src={resImage+resData.info.cloudinaryImageId} alt="Dish Image" />
            <div className='my-2 px-3 py-1.5'>
                <p className='font-semibold'>{resData.info.name}</p>
                <p>{resData.info.cuisines.join(" , ")}</p>
                <p>{resData.info.avgRating}</p>
                <p>{resData.info.costForTwo}</p>
                <p>{resData.info.sla.slaString}</p>
            </div>
        
        </div>
    )
}

export default RestaurantCard
