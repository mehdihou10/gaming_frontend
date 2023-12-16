import React, { useState,useEffect,useRef } from 'react';
import { FaBars } from "react-icons/fa";
import {RiCloseLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import {isCookieExists,setCookie} from '../functions/Cookie';
import Profile from '../components/Profile';
import ClipLoader from 'react-spinners/ClipLoader';
import Swal from 'sweetalert2';


const List = ()=>(
    <>
         <li><Link to=''>Home</Link></li>
          <li><Link to='/docs'>Docs</Link></li>
          <li><Link to={isCookieExists() ? '/quiz' : '/auth/login'}>Quiz</Link></li>
          <li><Link to='/contact'>Contact us</Link></li>
    </>
)
  
  const Btns = ()=>{

    //refs
    const spinnerRef = useRef();

    //states
    const [cookieExists,setCookieExists] = useState();

    useEffect(()=>{
        setCookieExists(isCookieExists());
    },[])


    //logout
    const logout = ()=>{
        Swal.fire({
            title: 'Are You Sure?!',
            showCancelButton: true
        }).then(res=>{

            if(res.isConfirmed){

                spinnerRef.current.classList.remove('hidden');
                setCookie(null,null);


                setTimeout(()=>window.location.reload(),2000);
            }
        })
    }
  
    return(

        <>

<div ref={spinnerRef} className="overlay fixed hidden w-full h-full bg-[#808080cc] top-0 left-0
    z-[1000]">
      <ClipLoader className="fixed top-[50%] left-[50%] text-[80px]" />
    </div>

    { cookieExists ? 

    <div className="flex items-center gap-[20px]">

    <div className="hidden md:block"><Profile /></div>
    <button onClick={logout} className='grid place-items-center font-semibold bg-red w-[100px] h-[40px] rounded-full'>Logout</button>
    
    </div>
    
    :<div className="btns flex items-center gap-[20px]">
          <Link to='/auth/login' className='grid place-items-center font-semibold bg-black-gradient-2 w-[100px] h-[40px] rounded-full'>Log In</Link>
          <Link to='/auth/user' className='grid place-items-center font-semibold text-black bg-blue-gradient w-[100px] h-[40px] rounded-full'>Sign Up</Link>
  
        </div>}

        </>

    )
}

const Header = ()=>{

    const [toggle,setToggle] = useState(false);

    const [cookieExists,setCookieExists] = useState();

    useEffect(()=>{
        setCookieExists(isCookieExists());
    },[])
  
    return(
      <header className='relative z-[1000] flex justify-between items-center sm:px-[40px]'>
        <Link to='/' className='w-[80px]'>
          <img src={logo} alt="logo" />
        </Link>
        
        <ul className='hidden md:flex gap-[30px] text-[20px]'><List /></ul>

        {cookieExists && <div className="block md:hidden"><Profile /></div>}
  
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

  export default Header;