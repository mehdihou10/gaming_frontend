import React, { useEffect } from 'react'
import { ImSad2 } from "react-icons/im";
import { RiEmotionNormalLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const QuizResult = () => {

  const navigate = useNavigate();

  const resultValue = useSelector(state=>state.results);

  
  useEffect(()=>{
    if(resultValue === '') navigate('/');
  },[])


  return (
    
    <div className='bg-primary text-white h-screen flex justify-center items-center'>
      <div className="text-center">

        <div className='text-[150px] flex justify-center'>
        {
          resultValue === 'bad' ? <ImSad2 />
          : resultValue === 'normal' ? <RiEmotionNormalLine />
          : <FaCheckCircle />
        }

        </div>

        <h1 className={`${resultValue === 'bad' ? 'text-red-500' : resultValue === 'normal' ? 'text-orange-500' :'text-green-500' }
         text-[40px] mt-[10px] font-semibold`}>
          {
            resultValue === 'bad' ? 'Bad Results!'
            : resultValue === 'normal' ? 'Stable Results'
            :'Good Results,Continue!'
          }
         </h1>

        <p className='max-w-[500px] mx-auto my-[20px] text-gray-500'>

         {resultValue === 'bad' ? ' Gradually reduce gaming time, set clear boundaries, find alternative activities, and seek support to achieve a balanced and healthier lifestyle.'
         : resultValue === 'normal' ? 'Set specific daily time limits for gaming and use that extra time to explore new hobbies or activities, fostering a more balanced lifestyle.'
         : 'Balance leisure activities, including gaming, with other interests to maintain a well-rounded and fulfilling lifestyle.'
        }
        
        </p>

        <button className="flex justify-center items-center gap-[10px] bg-black-gradient w-[150px] h-[40px]
         rounded-lg mx-auto">Go To Dashboard</button>

      </div>
    </div>
  )
}

export default QuizResult
