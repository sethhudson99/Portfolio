import React from 'react'

const About = () => {
  return (
    <div name='about' className='bg-[#032248] w-full h-screen text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w -[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#fd0081]'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Seth, nice to meet you. Please feel free to roam around my page.</p>
                    </div>
                    <div>
                        <p>I have just begun my journey as a developer and i am excited to continuously further my skills. I am passionte about building excellent software that improves the lives of those around me. My goal in this industry is to learn as much as possible and make it a career. </p>
                    </div>
                 
            </div>

        </div>

    </div>
    
  );
};

export default About