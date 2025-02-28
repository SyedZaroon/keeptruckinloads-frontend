import React from 'react'
import { FaEnvelope, FaFacebook, FaFacebookF, FaGooglePlus, FaGooglePlusG, FaInstagram, FaPhoneAlt, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center border-b-2 border-white w-[944px] m-auto my-3 z-50 relative '>
      
      <div className='flex items-center gap-2'>
        <FaPhoneAlt className='text-white' />
        <span className='text-white' >+888-258-5623</span>
      </div>

      <div className='flex items-center gap-2'>
        <FaEnvelope className='text-white' />
        <span className='text-white' >info@ktloads.com</span>
      </div>

      <div className='flex items-center gap-2'>
        <FaFacebookF className='text-white' />
        <FaXTwitter className='text-white' />
        <FaInstagram className='text-white' />
        <FaGooglePlusG className='text-white' />
        <FaWhatsapp className='text-white' />
        
      </div>

    
    
    </div>
  )
}

export default NavBar