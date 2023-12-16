import React from 'react'
import doctor from '../images/doctor.png';
import patient from '../images/patient.png';
import ProcessSign from '../components/Process.Sign';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";


const Checkbox = () => {


  const [active,setActive] = useState('');

  const changeActive = (e)=>{

    setActive(e.target.id);
    window.localStorage.setItem('user',e.target.id);
    
  }


  return (
    <div className="flex min-h-screen m-0 flex-col">

      <div className="px-[50px] pt-[20px] max-w-[500px]">
      <ProcessSign active1={true} />

      </div>

        <div className='flex flex-col'>
            <p className='text-slate-500 ml-12'>
                        Step1/2
            </p>
            <h1 className='text-blue-950 text-2xl font-bold ml-12 mt-4'>
                        Checkbox
            </h1>
        </div>

        <div className='grid sm:grid-cols-2 gap-[30px] mt-12 px-[50px]'>

          <div id='patient' onClick={changeActive} className={`cursor-pointer relative
           ${active === 'patient' ? 'bg-purple-300 border-purple-500' : 'bg-gray-100 p-5 border-gray-300'}
            rounded-lg border-4 h-[150px] sm:h-[300px] grid place-items-center`}>

              <div className="w-[25px] h-[25px] grid place-items-center border-2 border-gray-400 pointer-events-none bg-white rounded-full absolute left-[10px] top-[10px]">
                <span className={`block w-[15px] h-[15px] ${active === 'patient' ? 'bg-purple-500' : ''} rounded-full`}></span>
              </div>
            <div className='pointer-events-none'>
              <img src={patient} className='mx-auto w-[100px] sm:w-[180px] text-gray-500' />
            </div>

          </div>

          <div id='doctor' onClick={changeActive} className={`cursor-pointer relative
           ${active === 'doctor' ? 'bg-purple-300 border-purple-500' : 'bg-gray-100 p-5 border-gray-300'}
            rounded-lg border-4 h-[150px] sm:h-[300px] grid place-items-center`}>
           
           <div className="w-[25px] h-[25px] grid place-items-center border-2 border-gray-400 pointer-events-none bg-white rounded-full absolute left-[10px] top-[10px]">
                <span className={`block w-[15px] h-[15px] ${active === 'doctor' ? 'bg-purple-500' : ''} rounded-full`}></span>
              </div>

            <div className='pointer-events-none'>
              <img src={doctor} className='mx-auto w-[100px] sm:w-[180px] text-gray-500' />
            </div>

          </div>

        </div>

        <Link to='/auth/register' className={`w-[120px] h-[40px] rounded-lg bg-purple-500
         ${active === '' && 'opacity-30 pointer-events-none'}
        flex justify-center items-center gap-[10px]
         text-white font-bold ml-auto mr-[50px] my-[30px]`}>Next <FaArrowRight /></Link>

    </div>
  )
}

export default Checkbox
