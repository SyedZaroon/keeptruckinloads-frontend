import React from 'react'
import { assets } from '../utils/assets'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <img src={assets.logo} />
      </div>

      <div className='flex items-center gap-3'>
        <Link to="" className=' border-t-2 border-t-transparent hover:border-t-2 hover:border-t-black' >Home</Link> 
        <Link to="" className=' border-t-2 border-t-transparent hover:border-t-2 hover:border-t-black' >About us</Link> 
        <Link to="" className=' border-t-2 border-t-transparent hover:border-t-2 hover:border-t-black' >Services</Link> 
        <Link to="" className=' border-t-2 border-t-transparent hover:border-t-2 hover:border-t-black' >Testimonials</Link> 
        <Link to="" className=' border-t-2 border-t-transparent hover:border-t-2 hover:border-t-black' >Contact Us</Link> 
      </div>

      <div>
        <button className='p-2 border-2 hover:shadow-md hover:translate-y-1 transition-all'>Get a Load</button>
      </div>

    </div>
  )
}

export default Header
