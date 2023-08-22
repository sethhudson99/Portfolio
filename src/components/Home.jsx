import React from 'react'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className= 'w-full h-screen bg-[#032248]'>
        
        {/*container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className=' text-[#fd0081]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-gray-300'>Seth Hudson</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a Frontend Developer.</h2>
            <p className=' text-gray-400 py-4 max-w-[700px]'>I am dedicated to developing solutions that result in best practices to deliver over the top user experience. I am seeking to further my knowledge and experience in web development.</p>
            <Link to="work" smooth={true} duration={500}>
              <div>
                  <button className='rounded text-gray-300 border-2 px-6 py-3 hover:bg-[#fd0081] hover:border-[#fd0081]'>
                    View Work
                  </button>
              </div>
            </Link>
  
          
        </div>



    </div>
  )
}

export default Home