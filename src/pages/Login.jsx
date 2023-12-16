import {useRef} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaArrowLeftLong } from "react-icons/fa6";
import {setCookie} from '../functions/Cookie';

const Login = () => {

  const navigate = useNavigate();

  //refs
  const email = useRef();
  const password = useRef();


  const verifyData = (e)=>{
    e.preventDefault();

    const obj = {
      email: email.current.value,
      password: password.current.value
    }

    fetch('http://localhost:8000/auth/login',{

    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(obj)
    
    })
    .then(res=>res.json())
    .then(data=>{

      
      if(data.token){

        setCookie(data.token,30);
        navigate('/');

      }

      else{

        Swal.fire({
          title: "Verify Your Data!" 
        })
      }
    })

  }

  return (
    <div className="flex relative bg-primary items-center justify-center min-h-screen">

      <Link to='/' className='text-white text-[35px] absolute top-[50px] left-[40px]'><FaArrowLeftLong /></Link>

      <div className="absolute z-[3] w-[50%] h-[20%] -bottom-1/2 rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[20%] -bottom-1/2 rounded-full pink__gradient" />


      <form onSubmit={verifyData} className="bg-primary p-8 rounded w-96">

        <input
          required
          type="email"
          placeholder="Your Email"
          className="text-white p-2 mb-4 bg-[#50649926] caret-white outline-none border border-gray-400 rounded w-full"
          ref={email}
        />

        <input
          required
          type="password"
          placeholder="Your Password"
          className="text-white p-2 mb-4 bg-[#50649926] caret-white outline-none border border-gray-400 rounded w-full"
          ref={password}
        />

        <Link className="text-blue-500 block mb-4">
          Forgot password?
        </Link>

        <div className="text-center">
          <button
            type="submit"
            className="bg-gray-800 text-white rounded-full px-6 py-2"
          >
            Login
          </button>
        </div>

        <p className="mt-4 text-center text-gray-700">
          If You Don't Have An Account{' '}
          <Link to='/auth/user' className="text-blue-500">
            SignUp
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
