import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-2 px-4 bg-white shadow-md'>
            <div className='w-28'>
                <img 
                 src="https://img.freepik.com/premium-vector/food-logo-design-with-leaf-creative-concept-premium-vector_526458-2675.jpg?semt=ais_hybrid" 
                 alt="logo" 
                />
            </div>

            <nav>
                <ul className='flex gap-x-6 list-none text-lg px-3.5'>
                    <li className='cursor-pointer hover:text-gray-500'>Home</li>
                    <li className='cursor-pointer hover:text-gray-500'>About us</li>
                    <li className='cursor-pointer hover:text-gray-500'>Contact</li>
                    <li className='cursor-pointer hover:text-gray-500'>Cart</li>
                </ul>
            </nav>
        
        </div>
    )
}

export default Header
