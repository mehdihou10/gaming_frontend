import React, { useState,useEffect,useRef } from 'react';
import { FaFantasyFlightGames,FaBars } from "react-icons/fa";
import {RiCloseLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import controller from '../images/controller.png';
import { useLayoutEffect } from 'react';


const List = ()=>(
  <>
       <li><Link>Home</Link></li>
        <li><Link>Docs</Link></li>
        <li><Link>Support</Link></li>
        <li><Link>Contact us</Link></li>
  </>
)

const Btns = ()=>{

  return(
    <div className="btns flex items-center gap-[20px]">
        <Link to='/auth/login' className='grid place-items-center font-semibold bg-black-gradient-2 w-[100px] h-[40px] rounded-full'>Sign In</Link>
        <Link to='/auth/register' className='grid place-items-center font-semibold text-black bg-blue-gradient w-[100px] h-[40px] rounded-full'>Sign Up</Link>

      </div>
  )
}


const Header = ()=>{

  const [toggle,setToggle] = useState(false);

  return(
    <header className='relative z-[1000] flex justify-between items-center sm:px-[40px]'>
      <Link to='/' className='text-[60px]'><FaFantasyFlightGames /></Link>
      
      <ul className='hidden md:flex gap-[30px] text-[20px]'><List /></ul>

      <div className="hidden sm:block"><Btns /></div>
      <FaBars onClick={()=>setToggle(true)} className='text-[35px] md:hidden cursor-pointer' />

      {toggle && <div className='fixed slide-bottom flex flex-col gap-[30px] justify-center items-center w-full h-full top-0 left-0 bg-black-gradient-2'>
        <RiCloseLine onClick={()=>setToggle(false)} className='fixed top-[20px] right-[20px] text-[45px] cursor-pointer' />
        <ul className='text-center flex flex-col gap-[30px] font-semibold text-[25px]'><List /></ul>
        <div className="sm:hidden"><Btns /></div>
      </div>}
    </header>
  )
}

const Home = () => {

  const textHead = useRef(null);

  useLayoutEffect(() => {

   
  });
  

  return (
    <div className='relative h-screen bg-primary text-white p-[20px]'>
      <Header />

      {/* <img className='w-[350px]' src={controller} alt="image" /> */}

      <div className="absolute z-[3] w-[50%] h-[50%] top-0 rounded-full white__gradient -left-1/2" />
      <div className="absolute z-[0] w-[50%] h-[50%] top-0 rounded-full pink__gradient -left-1/2" />

      <div className="absolute z-[3] w-[25%] h-[50%] top-0 rounded-full white__gradient right-0" />
      <div className="absolute z-[0] w-[25%] h-[50%] top-0 rounded-full pink__gradient right-0" />

      <div className="content absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-y-[25%] w-3/4 max-w-full">
        <h1 ref={textHead} className='text-gradient font-poppins w-full font-bold text-[30px] xs:text-[40px] md:text-[55px]'>Get insights into your gaming habits with our quick and easy quiz.</h1>

        <div className="btns flex justify-center gap-[20px] mt-[50px]">
          <Link className='w-[150px] text-black font-bold h-[40px] grid place-items-center rounded-lg bg-[#0EA5E9]'>Start Quiz</Link>
          <Link className='w-[150px] h-[40px] grid place-items-center rounded-lg bg-black-gradient-2'>Read Docs</Link>

        </div>
      </div>

    </div>
  )
}

export default Home
