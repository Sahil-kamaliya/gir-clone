import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around bg-white h-24 p-4' >
        <div><img src='.\src\assets\Gir park logo.png' alt="Gir Park logo" className='w-48 h-8 m-4' /> </div>
        <div className='flex items-center gap-10'>
                  <ul className='flex gap-5 font-semibold text-lg '>
                    <li className='cursor-pointer hover:text-blue-500 transition duration-300' >About Gir</li>
                    <li className='cursor-pointer hover:text-blue-500 transition duration-300' >Gir Packages</li>
                    <li className='cursor-pointer hover:text-blue-500 transition duration-300' >Hostels&Resorts</li>
                    <li className='cursor-pointer hover:text-blue-500 transition duration-300' >About Gujarat</li>
                    <li className='cursor-pointer hover:text-blue-500 transition duration-300' >About Us</li>
                    <li className='cursor-pointer hover:text-blue-500 transition duration-300' >9212553107</li>
                  </ul>
                  <button className='bg-blue-500 text-white p-3  rounded-md  cursor-pointer hover:bg-white hover:text-black transition duration-300'>Book Now</button>
        </div>
    </div>
  )
}

export default Navbar