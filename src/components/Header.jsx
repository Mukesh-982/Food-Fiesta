import React,{useState} from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom';
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
                    <Link to = "/" className='cursor-pointer hover:text-gray-500'>Home</Link>
                    <Link to = '/about' className='cursor-pointer hover:text-gray-500'>About us</Link>
                    <Link to = "/contact" className='cursor-pointer hover:text-gray-500'>Contact</Link>
                    <Link to = "/cart" className='cursor-pointer hover:text-gray-500'>Cart</Link>
                    <Link to = "/grocery" className='cursor-pointer hover:text-gray-500'>Grocery</Link>
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
