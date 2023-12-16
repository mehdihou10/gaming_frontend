import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { FaEye,FaEyeSlash,FaMinusCircle,FaCheckCircle } from "react-icons/fa"
import { useState,useRef,useEffect } from 'react'
import games from '../images/games.jpg';
import ProcessSign from '../components/Process.Sign';
import Swal from 'sweetalert2';
import { setCookie } from '../functions/Cookie';


const Signup = () => {

  const navigate = useNavigate();


  //security check
  useEffect(()=>{

    if(!window.localStorage.getItem('user')){

      navigate('/auth/user');
    }
  },[])

  //refs
  const passwordRef = useRef(null);
  const genderRef = useRef();

  //states
  const [watchPassword,setWatchPassword] = useState(false);

  const [userName,setUserName] = useState('');
  const [fullName,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [dateOfBirth,setDateOfBirth] = useState('');

  const [isCorrect,setIsCorrect] = useState(false);




  const submitData = (e)=>{
    e.preventDefault();


    if(userName.trim() === '' || fullName.trim() === '' || password.trim() === '' || isCorrect === false
    || ['male','female'].includes(genderRef.current.value.toLowerCase()) === false){
      Swal.fire({
        title: isCorrect ? 'You Must Fill In All Fields!!' : 'Write a Valid Password'
      })
    }

  

    else{

      const obj = {
        username: userName,
        full_name: fullName,
        user_type: window.localStorage.getItem('user'),
        email: email,
        password: password,
        gender: genderRef.current.value,
        date_of_birth: dateOfBirth
      }
  
      fetch('http://localhost:8000/auth/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)

      }).then(res=>res.json())

      .then(data=>{

  
        if(data.token){
          setCookie(data.token,30);

          navigate('/');

        }

        else{
          const errors = data.detail;

          for(let error of errors){
            Swal.fire({
              title: error.msg
            })
          }

        }
      
     

      })


    }

  }


  return (
  <div className='lg:flex lg:h-screen'>

    <div className="hidden lg:block image basis-[40%]">
    <img className='w-full h-screen object-cover' src={games} alt="image" />
    </div>

    <div className="content basis-[60%] px-[20px] xs:px-[100px] py-[20px] md:w-fit xs:mx-auto">
      <ProcessSign active2={true} />

      <span className='text-[14px] text-gray-500'>Step 2/2</span>
      <h1 className='font-bold text-slate-800 text-[40px] font-poppins mb-[30px]'>Sign Up</h1>

      <form onSubmit={submitData}>

      <div className="signup-parent">

        <div>
          <label className='signup-label' htmlFor="user-name">User Name</label>
          <input onChange={(e)=> setUserName(e.target.value)} className='signup-input' required id='user-name' type="text"/>
        </div>

        <div>
          <label className='signup-label' htmlFor="full-name">Full Name</label>
          <input onChange={(e)=> setFullName(e.target.value)} className='signup-input' required id='full-name' type="text"/>
        </div>


      </div>


      <div className="signup-parent mt-[15px] md:mt-[30px]">

        <div>
          <label className='signup-label' htmlFor="email">Email</label>
          <input onChange={(e)=> setEmail(e.target.value)} className='signup-input' required id='email' type="email"/>
        </div>

        <div>
          <label className='signup-label' htmlFor="password">Password</label>

          <div>

            <div className="relative">
            <input ref={passwordRef} onChange={(e)=>{
            setPassword(e.target.value);
            const psw = passwordRef.current.value;

            if(psw === '' || psw.length < 8 || /\w+/ig.test(psw) === false || /\d+/ig.test(psw) === false){
              setIsCorrect(false)

            } else{
              setIsCorrect(true)
            }

          }} className='signup-input' required id='password' type="password"/>
          
          <div className='absolute top-1/2 -translate-y-1/2 right-[13px]'>

            {
              watchPassword ? <FaEyeSlash onClick={()=>{
                setWatchPassword(false);
                passwordRef.current.type = 'password';

              }} className='cursor-pointer' />

              : <FaEye onClick={()=>{

                setWatchPassword(true);
                passwordRef.current.type = 'text';

              }} className='cursor-pointer' />
            }
          
          </div>
            </div>
        
          
          <div className='mt-1 text-[15px]'>

          {password === '' ? <div className='text-gray-500'>Write a solid password</div>
          
          : (password.length < 8 || /\w+/ig.test(password) === false || /\d+/ig.test(password) === false) ?
          <div className='text-red-600'>Invalid Password</div>

        :<div className='text-green-400'>Just Perfect</div>}

          </div>
         

          
        
        </div>
        </div>

      </div>


       <div className="signup-parent mt-[15px] md:mt-[30px]">

        <div>
          <label className='signup-label' htmlFor="date">Date Of Birth</label>
          <input onChange={(e)=>setDateOfBirth(e.target.value)} className='signup-input bg-gray-100' required id='date' type="date"/>
        </div>

        <div>
          <label className='signup-label' htmlFor="gender">Gender</label>

          <select ref={genderRef} className='signup-input' id="gender">

            <option selected disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>

          </select>
        </div>


      </div>

{/* submit button  */}
      <div className="text-center mt-[20px]">

      <button className='bg-purple-500 text-white font-semibold w-[150px] h-[45px] rounded-lg mx-auto'>
        Submit
      </button>
      <p className="mt-2 text-center text-gray-700">
          If You Have An Account{' '}
          <Link to='/auth/login' className="text-blue-500">
            Login
          </Link>
        </p>

      </div>

      </form>
     

    </div>

  </div>
  )
}

export default Signup
