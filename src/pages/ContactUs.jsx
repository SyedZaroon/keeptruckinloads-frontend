import React from 'react'
import { assets } from '../utils/assets'

const ContactUs = () => {
  return (
    <div>
      
      <div className='bg-[#006CB7] md:p-24 md:flex justify-between md:items-center md:flex-row flex-col p-4 '>
        <div className='md:w-[40%]' >
        <h2 className='text-2xl md:text-4xl font-bold text-left text-white' >Get in touch</h2>
        <p class="text-[white] my-4">Keeptruckin Loads is your partner in maximizing trucking profits. We offer a comprehensive dispatch service, including load sourcing, rate negotiation, booking confirmations, fuel surcharge calculations, and back-office support. Our goal is to streamline your operations, increase your revenue, and improve your overall trucking experience.</p>
          <a href='' class="px-[10px] py-[6px] border-[1px] hover:shadow-md hover:translate-y-1 transition-all text-white">Get Started</a>
        </div>
        <div className='md:w-[50%]' >
          <img src={assets.contactimg} />
        </div>
      </div>

      <div class="p-8">
        <h2 class="text-2xl md:text-4xl font-bold text-center text-gray-900">Need Support?</h2>
        <p class="text-gray-600 text-center mb-6">We've got a plan to fit your needs.</p>

        <form action="#" method="POST" class="space-y-4">
          <div>
            <label class="block text-gray-700 font-medium">Your name</label>
            <input type="text" class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#006CB7] focus:outline-none" placeholder="Enter your name" />
          </div>
          <div>
            <label class="block text-gray-700 font-medium">Your email</label>
            <input type="email" class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#006CB7] focus:outline-none" placeholder="Enter your email" />
          </div>
          <div>
            <label class="block text-gray-700 font-medium">Subject</label>
            <input type="text" class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#006CB7] focus:outline-none" placeholder="Enter subject" />
          </div>
          <div>
            <label class="block text-gray-700 font-medium">Your message (optional)</label>
            <textarea class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#006CB7] focus:outline-none" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="p-2 border-2 hover:shadow-md hover:translate-y-1 transition-all text-black  w-full rounded-lg">SUBMIT</button>
          </div>
        </form>
      </div>

      {/* <div className='bg-[#006CB7] md:p-10 p-4 '>
        <h2 className='text-2xl md:text-3xl font-bold text-center text-white ' >Need help? Call our award-winning support team</h2>
      </div> */}
      
      
    </div>
  )
}

export default ContactUs