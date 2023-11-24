import React from 'react'
// import logo from '../src/assets/images/image.jpg'

const Checkbox = () => {
  return (
    <div className="flex min-h-screen m-0 flex-col">
        <div className='flex flex-col'>
            <p className='text-slate-500 ml-12'>
                        Step3/3
            </p>
            <h1 className='text-blue-950 text-2xl font-bold ml-12 mt-4'>
                        Checkbox
            </h1>
        </div>

        <div className='flex flex-row mt-12'>
        <div class='group border-gray-300 rounded-lg border-solid border-2 px-20 w-96 ml-48 hover:bg-violet-300'>
            {/* <img src={logo} class='w-full h-auto object-cover group-hover:opacity-5' alt='Logo'/> */}
        </div> 

        <div class='group border-gray-300 rounded-lg border-solid border-2 px-20 w-96 ml-72 hover:bg-violet-300'>
            {/* <img src={logo} class='w-full h-auto object-cover group-hover:opacity-5' alt='Logo'/> */}
        </div> 


        </div>

    </div>
  )
}

export default Checkbox
