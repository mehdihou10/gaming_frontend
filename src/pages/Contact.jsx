import React from 'react'
import { AiOutlineMail, AiOutlinePhone, AiFillFacebook } from 'react-icons/ai';
import contact1 from '../images/contact1.png';
import contact2 from '../images/contact2.png';


const Contact = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-primary relative py-[20px]">
      
        <div className='hidden sm:flex flex-1 flex-col space-y-8 justify-between'>
       
          <img src={contact2} alt="DawContactUs" className="w-auto h-auto mb-4 hidden sm:block" />
          
          <a href='mailto:DawProject@gmail.com' className='hidden sm:flex items-center space-x-2 ml-9 '>
            <AiOutlineMail className='text-purple-500 text-5xl' />
            <span className='text-white text-lg font-bold'>DawProject@gmail.com</span>
          </a>

          <a href='tel:+213791792707' className='hidden sm:flex items-center space-x-2 ml-9'>
            <AiOutlinePhone className='text-purple-500 text-5xl' />
            <span className='text-white text-lg font-bold'>+213 000 555 999</span>
          </a>

          <a href='https://facebook.com' className='hidden sm:flex items-center space-x-2 ml-9'>
            <AiFillFacebook className='text-purple-500 text-5xl' />
            <span className='text-white text-lg font-bold'>DawProject L3 TI</span>
          </a>
        </div>
        <div className='flex-1 mx-8 p-6 sm:bg-white rounded-lg shadow-md'>
         
          <form action='Contact'>
          <div>
            <img src={contact1} alt="Contact Us Design" className="w-40 h-auto mx-auto" />
          </div>
            <div className='mb-4'>
              <label className='block text-purple-600 text-sm font-bold mb-2' htmlFor='Full Name'>Full Name :</label>
              <input placeholder='Enter your name' className='w-full px-3 py-2 border-2 border-purple-500 rounded-lg bg-[#802bb157] sm:bg-gray-200 text-white craet-white focus:outline-none  text-sm' required type='text' />
            </div>
            <div className='mb-4'>
              <label className='block text-purple-600 text-sm font-bold mb-2' htmlFor='Email Adress'>Email Adress :</label>
              <input placeholder='aaa@example.com' className='w-full px-3 py-2 border-2 border-purple-500 rounded-lg bg-[#802bb157] sm:bg-gray-200 text-white craet-white focus:outline-none  text-sm' required type='email' />
            </div>
            <div className='mb-4'>
              <label className='block text-purple-600 text-sm font-bold mb-2' htmlFor='Phone Number'>Phone Number :</label>
              <input placeholder='+213 111 222 333' className='w-full px-3 py-2 border-2 border-purple-500 rounded-lg bg-[#802bb157] sm:bg-gray-200 text-white craet-white focus:outline-none  text-sm' required type='tel' />
            </div>
            <div className='mb-4'>
              <label className='block text-purple-600 text-sm font-bold mb-2' htmlFor='Messager'>Your Message :</label>
              <textarea placeholder='Your Message' className='w-full resize-none h-[60px] px-3 py-2 border-2 border-purple-500 focus:outline-none rounded-lg bg-[#802bb157] sm:bg-gray-200 text-white craet-white  text-sm' required type='message'></textarea>
            </div>
            <div className='flex justify-center'>
              <button type='submit' className='bg-purple-600 text-white font-semibold px-4 py-2 border-none rounded-lg hover:bg-purple-600 focus:outline-none'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Contact
