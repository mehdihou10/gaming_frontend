import {motion} from 'framer-motion'


export default function textAnimation(){

    return(

        <motion.h1 className='text-gradient font-poppins w-full font-bold text-[30px] xs:text-[40px] md:text-[55px]'
    initial={{x: -1100}}
    animate={{x: 0}}
    transition={{
        duration: '3',
    }}

    whileHover={{opacity: 0.2}}
    >
        Get insights into your gaming habits with our quick and easy quiz.
    </motion.h1>

    )
}