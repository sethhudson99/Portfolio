import React from 'react'
import Calculator from '../assets/calculator.png'

const Work = () => {
  return (
    <div name='work' className='bg-[#032248] w-full md:h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#fd0081]'>Work</p>
                <p className='py-4'>// Check out some of my recent work</p>
            </div>
        
            {/*Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${Calculator})`}} className='shadow-lg shadow-black group container rounded flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white'>
                            React Calculator App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a> 
                        </div>   
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Work