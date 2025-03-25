import React,{useState} from 'react'
import { LOGO_URL } from '../utils/constants'
const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    return (
        <div className='flex justify-between items-center py-2 px-4 mb-3 bg-white shadow-sm'>
            <div className='w-28'>
                <img 
                 src={LOGO_URL} 
                 alt="logo" 
                />
            </div>

            <nav>
                <ul className='flex items-center gap-x-6 list-none text-lg px-3.5'>
                    <li className='cursor-pointer hover:text-gray-500'>Home</li>
                    <li className='cursor-pointer hover:text-gray-500'>About us</li>
                    <li className='cursor-pointer hover:text-gray-500'>Contact</li>
                    <li className='cursor-pointer hover:text-gray-500'>Cart</li>
                    <button onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }} 
                        className='bg-blue-600 text-white rounded-lg px-3 py-2 cursor-pointer'>
                            {btnName}
                    </button>
                </ul>
            </nav>
        
        </div>
    )
}

export default Header
