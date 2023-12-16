import {Link} from 'react-router-dom';
import home from '../images/home.png';
import Header from '../components/Header';
import {isCookieExists} from '../functions/Cookie';
import Messages from '../components/Messages';


const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}





const Home = () => {

  

  return (
    <div className='relative h-screen ss:h-auto md:h-screen md:overflow-y-hidden bg-primary text-white p-[20px]'>
      <Header />


      <div className="absolute z-[3] w-[50%] h-[50%] top-0 rounded-full white__gradient -left-1/2" />
      <div className="absolute z-[0] w-[50%] h-[50%] top-0 rounded-full pink__gradient -left-1/2" />

      <div className="hidden ss:block absolute z-[3] w-[25%] h-[50%] top-0 rounded-full white__gradient right-0" />
      <div className="hidden ss:block absolute z-[0] w-[25%] h-[50%] top-0 rounded-full pink__gradient right-0" />


      <div className="">

      <div className="content flex flex-col md:flex-row items-center pt-[50px] px-[50px]">

        <div className="text flex-1">
        <h1 className='text-gradient font-poppins w-full font-bold text-[30px] xs:text-[40px] lg:text-[50px]'>Get insights into your gaming habits with our quick and easy quiz.</h1>

        <div className="btns flex justify-center md:justify-normal gap-[20px] mt-[50px]">
          <Link to={isCookieExists() ? '/quiz' : '/auth/login'} className='w-[150px] text-black font-bold h-[40px] grid place-items-center rounded-lg bg-[#0EA5E9]'>Start Quiz</Link>
          <Link to='/docs' className='w-[150px] h-[40px] grid place-items-center rounded-lg bg-black-gradient-2'>Read Docs</Link>

      </div>
        </div>

        <div className="image w-[500px] max-w-full flip hidden ss:block basis-[55%]">
          <img className='w-full h-full' src={home} alt="banner" />
        </div>


      </div>

      
        </div>


       { isCookieExists() && <div className="fixed z-[10000] bottom-[30px] right-[20px]">
          <Messages />
        </div>}

    </div>
  )
}

export default Home
