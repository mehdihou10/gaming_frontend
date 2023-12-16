import {useState,useEffect} from 'react'
import Question from '../components/Question';


const Quiz = () => {

  //states
  const [questions,setQuestions] = useState([]);



  //fetch questions
  useEffect(()=>{

    fetch('questions.json').then(res=>res.json())
    .then(data=>setQuestions(data))
  },[])

  return (
    
    <div className='bg-primary'>

      {
        questions.map(question=> <Question key={question.id} obj={question} total={questions} />)
      }
      
    </div>
  )
}

export default Quiz
