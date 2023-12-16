import { FaArrowLeftLong,FaArrowRightLong } from "react-icons/fa6";
import {useState} from 'react';
import {getCookie} from '../functions/Cookie';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addResult} from '../store/slices/results';



const Question = (props) => {

    const {obj} = props;

    const [active,setActive] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

   


    const changeActive = (answerId)=>{

      setActive(answerId);
    }


    const changeQuestion = (sign)=>{

      window.scrollBy({
        top: sign === 'positive' ? window.innerHeight : -window.innerHeight,
        behavior: 'smooth'
      })

    }



    //choice result
    let choiceRes = active === 'a' ? 1 : active === 'b' ? 0.5 : active === 'c' ? 0.25 : 0;

    //show results
    const showResults = ()=>{

      const arrayOfResults = [];

      document.querySelectorAll('.answers').forEach(ch=>arrayOfResults.push(+ch.dataset.active));

      const res1 = arrayOfResults.reduce((acc,cur)=> acc+cur,0);
      

     const finalResult = Math.ceil((res1 / +props.total.length) * 100);

 
     dispatch(addResult(finalResult < 50 ? 'bad' : (finalResult > 50 && finalResult < 70) ? 'normal' : 'good'));

     const obj = {
      token: '',
      quiz_id: 1,
      score: finalResult
     }


     fetch('http://localhost:8000/quiz/submit',{

     method: 'POST',
     
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getCookie()}`
      },

      body: JSON.stringify(obj)
     }).then(res=>res.json())
     .then(data=>navigate('/quiz/result'))
     

    }

    

  return (
    <div className='relative text-white h-screen flex justify-center items-center'>
      <div className="max-w-[800px] mx-[15px]">
        <h1 className="font-poppins mb-[20px] ss:mb-[40px] text-[20px] ss:text-[30px] font-semibold
        text-center sm:text-start">{obj.id}: {obj.question}</h1>

        <div data-active={choiceRes} className="answers">

          {
            obj.answers.map(answer=>{

              const answerId = answer.option;

              return (

                <div onClick={()=>changeActive(answerId)} key={answerId} className={`answer rounded-md flex items-center gap-[10px]
                  px-[10px] py-[10px] ss:py-[15px] mb-[10px] ss:mb-[15px] cursor-pointer
                  border-4  ${active === answerId ? 'bg-simplePurple border-darkPurple': 'bg-black-gradient border-gray-500'}
              `}>

                  <div className={`radio flex justify-center items-center
                   w-[30px] h-[30px] border-4 ${active === answerId ? "border-darkPurple" : 'border-gray-500'} rounded-full`}>

                    {active === answerId && <div className="bg-darkPurple w-[12px] h-[12px] rounded-full"></div>}
                  </div>

                  <h2>{answer.text}</h2>
                </div>
              )
            })
          }
        </div>


      </div>

      <div className="buttons flex gap-[20px] absolute bottom-[20px] right-[20px]">

    { obj.id !== 1 && <button onClick={()=>changeQuestion('negative')} className="flex justify-center items-center gap-[10px] bg-black-gradient w-[120px] h-[40px] rounded-lg"><FaArrowLeftLong /> Previous</button>} 
    { obj.id !== props.total.length ?
    
    
    <button onClick={()=>changeQuestion('positive')} className={`
    flex justify-center items-center gap-[10px] bg-blue-gradient select-none
     w-[120px] h-[40px] text-black font-semibold rounded-lg ${active === '' && 'opacity-30 pointer-events-none'}
     `}>Next <FaArrowRightLong /></button>


    :<button className={`flex justify-center items-center gap-[10px] select-none
     bg-blue-gradient ${active === '' && 'opacity-30 pointer-events-none'}
     w-[120px] h-[40px] text-black font-semibold rounded-lg`} onClick={showResults}>See Results</button>}

      </div>
    </div>
  )
}

export default Question
