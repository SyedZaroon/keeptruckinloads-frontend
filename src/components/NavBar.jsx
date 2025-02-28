import React from 'react'
import { FaEnvelope, FaFacebook, FaFacebookF, FaGooglePlus, FaGooglePlusG, FaInstagram, FaPhoneAlt, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center border-b-2 border-black'>
      
      <div className='flex items-center gap-2'>
        <FaPhoneAlt className='text-black' />
        <span>+888-258-5623</span>
      </div>

      <div className='flex items-center gap-2'>
        <FaEnvelope className='text-black' />
        <span>info@ktloads.com</span>
      </div>

      <div className='flex items-center gap-2'>
        <FaFacebookF className='text-black' />
        <FaXTwitter className='text-black' />
        <FaInstagram className='text-black' />
        <FaGooglePlusG className='text-black' />
        <FaWhatsapp className='text-black' />
        
      </div>

    
    
    </div>
  )
}

export default NavBar