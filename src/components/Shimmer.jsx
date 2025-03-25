import React from 'react'

const Shimmer = () => {
    return (
        <div className='flex flex-wrap justify-center gap-10 mt-4'>
            {
                [...Array(8)].map((_,index)=>(
                    <div key={index} className='w-72 rounded-lg bg-white shadow-md overflow-hidden p-4 animate-pulse'>
                        <div className='w-full h-40 bg-gray-300 rounded-lg'></div>

                        <div className='mt-3 px-3'>
                            <div className='h-4 bg-gray-300 rounded w-3/4 mb-2'></div>
                            <div className='h-3 bg-gray-300 rounded w-3/4 mb-2'></div>
                            <div className='h-3 bg-gray-300 rounded w-3/4 mb-2'></div>
                            <div className='h-3 bg-gray-300 rounded w-3/4'></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Shimmer;
