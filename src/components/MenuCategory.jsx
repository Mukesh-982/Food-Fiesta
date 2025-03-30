import React, { useState } from 'react'
import ItemList from './ItemList'

const MenuCategory = ({menuData, showItems, setShowIndex}) => {

    
    //console.log(menuData)
    const handleClick = ()=>{
        setShowIndex();
    }
    return (
        <div>
            {/* Header */}
            <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg rounded-lg p-4 cursor-pointer'>
                <div className='flex justify-between' onClick={handleClick}>
                    <span className='font-bold text-lg'>{menuData.title} ({menuData.itemCards.length})</span>
                    <span className='font-extrabold'>⯆</span>
                </div>

                {
                    showItems && (<ItemList itemData = {menuData.itemCards}/>)
                }
            </div>
 
        </div>
    )
}

export default MenuCategory
