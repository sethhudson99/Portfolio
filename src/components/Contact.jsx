import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#032248] w-full h-screen flex justify-center items-center p-4'>
        <form action="https://getform.io/f/82acf6dd-d016-474b-9112-2189d48e414f" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#fd0081] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or send me an email - sethhudson99@gmail.com</p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='p-2 my-4' type="text" placeholder='Email' name='email' />
            <textarea className='p-2' name="message" placeholder='Message' rows="10"></textarea>
            <button className='rounded text-gray-300 border-2 px-6 py-3 hover:bg-[#fd0081] hover:border-[#fd0081] my-8 mx-auto flex items-center'>Submit Form</button>
        </form>
    </div>
  )
}

export default Contact