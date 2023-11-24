import React from 'react'
import { Link } from 'react-router-dom'
import { FaEye,FaEyeSlash,FaMinusCircle,FaCheckCircle } from "react-icons/fa"
import { IoMdCloseCircle } from "react-icons/io";
import { useState,useRef,useEffect } from 'react'
import games from '../images/games.jpg';
import ProcessSign from '../components/Process.Sign';
import Swal from 'sweetalert2';


const Signup = () => {

  //refs
  const passwordRef = useRef(null);
  const genderRef = useRef();

  //states
  const [watchPassword,setWatchPassword] = useState(false);

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [dateOfBirth,setDateOfBirth] = useState('');

  const [isCorrect,setIsCorrect] = useState(false);

  const [users,setUsers] = useState([]);

  //get all users

  useEffect(()=>{

    fetch('http://localhost:8000/data/user').then(res=>res.json())

    .then(data=>setUsers(data))
  },[])


 

  const submitData = (e)=>{
    e.preventDefault();

    let check = false;

    for(let user of users){

      if(email === user.email){
        check = true;
        break;
      }
    }


    if(firstName.trim() === '' || lastName.trim() === '' || password.trim() === ''
    || ['male','female'].includes(genderRef.current.value.toLowerCase()) === false){
      Swal.fire({
        title: isCorrect ? 'You Must Fill In All Fields!!' : 'Write a Valid Password'
      })
    }

    else if(check){
      Swal.fire({
        title: "User Already Signed!"
      })
    }

    else{

      const obj = {
        first_name: firstName,
        last_name: lastName,
        username: `${firstName} ${lastName}`,
        email: email,
        password: password,
        gender: genderRef.current.value,
        date_of_birth: dateOfBirth
      }
  
      fetch('http://localhost:8000/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      }).then(res=>res.json())
      .then(data=>{

       Swal.fire({

        title: data.status ? 'Success' : 'Something Bad Happend'
       })

      })


    }
 



  }


  return (
  <div className='lg:flex'>

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
          <label className='signup-label' htmlFor="first-name">First Name</label>
          <input onChange={(e)=> setFirstName(e.target.value)} className='signup-input' required id='first-name' type="text"/>
        </div>

        <div>
          <label className='signup-label' htmlFor="last-name">Last Name</label>
          <input onChange={(e)=> setLastName(e.target.value)} className='signup-input' required id='last-name' type="text"/>
        </div>


      </div>


      <div className="signup-parent mt-[15px] md:mt-[30px]">

        <div>
          <label className='signup-label' htmlFor="email">Email</label>
          <input onChange={(e)=> setEmail(e.target.value)} className='signup-input' required id='email' type="email"/>
        </div>

        <div>
          <label className='signup-label' htmlFor="password">Password</label>

          <div className='relative'>
          <input ref={passwordRef} onChange={(e)=>{
            setPassword(e.target.value);
            if(password === '' || (password.length < 8 || /\w+/ig.test(password) === false || /\d+/ig.test(password) === false)){
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
          
          <div className='mt-1 text-[15px]'>

          {password === '' ? <div className='text-gray-500'>Write a solid password</div>
          
          : (password.length < 8 || /\w+/ig.test(password) === false || /\d+/ig.test(password) === false) ?
          <div className='text-red-600'>Invalid Email</div>

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
      <div className="text-center mt-[40px]">

      <button className='bg-purple-500 text-white font-semibold w-[150px] h-[45px] rounded-lg mx-auto'>
        Submit
      </button>

      </div>

      </form>


    </div>

  </div>
  )
}

export default Signup
