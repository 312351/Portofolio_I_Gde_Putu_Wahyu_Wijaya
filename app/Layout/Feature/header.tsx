import React from 'react'
import Navbar from './navbar'

const Header = () => {
  return (
    <div className='w-full h-25 px-15 bg-black flex flex-row justify-between items-center'>
        <div className='w-fit p-3 flex flex-row justify-center items-center space-x-5'>
            <img src="/Moga Ngak Pecahh.png" alt="" className='w-15'/>
            <span>
                <p className='font text-[24px] text-white font-jacques'>Portofolio</p>
            </span>
        </div>
        <Navbar/>
    </div>
  )
}

export default Header