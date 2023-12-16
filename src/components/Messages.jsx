import {useEffect, useState} from 'react'
import { MdEmail,MdClose } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import {getCookie} from '../functions/Cookie';


const Messages = () => {

    const [messages,setMessages] = useState(false);
    const [text,setText] = useState('');
    const [list,setList] = useState([]);
    const [choose,setChoose] = useState(false);

    useEffect(()=>{

      fetch('http://localhost:8000/data/user').then(res=>res.json())
      .then(data=>setList(data))

    },[])

    console.log(list)

    const changeState = (e)=>{
        setMessages((prev)=>!prev);


        e.target.classList.add('scale-50');

        setTimeout(()=>e.target.classList.remove('scale-50'),200)
    }

    const sendMessage = ()=>{

      // const obj = {
      //   receiver_username: 'mehdi',
      //   content: text
      // }
      
      // fetch('http://localhost:8000/coms/message',{
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${getCookie()}`
      //   },
      //   body: JSON.stringify(obj)
      // })

    }

  return (
    <div className='relative'>
    
    <div onClick={changeState} className="w-[65px] h-[65px] rounded-full bg-white
     grid place-items-center text-black text-[35px] duration-500 cursor-pointer">

        <div className="pointer-events-none">

        {messages ? <MdClose /> : <MdEmail />}

        </div>


    </div>

  { messages && <div className="bg-white slide-bottom w-[300px] h-[400px] rounded-lg absolute right-0 -top-[410px]">


    <div className="px-3 py-4">

    <input type="text" placeholder='Search' className='bg-gray-300 w-full px-3 py-2 rounded-full outline-none caret-black text-black' />
    
    </div>

    
    <div className="messages">

    </div>

   { choose && <div className="add-message w-full px-5 absolute bottom-[10px] flex items-center gap-[10px]">

        <input onChange={(e)=>setText(e.target.value)} type="text" placeholder='Send a Message' className='bg-gray-300 flex-1 px-3 py-2 rounded-full outline-none caret-black text-black' />
        <IoSend onClick={sendMessage} className='cursor-pointer text-[22px] text-blue-700' />
    </div>}


    </div>}


    </div>
  )
}

export default Messages
