import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className=' fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#032248] text-gray-300'>
        <div>
            <img src={Logo} alt='Logo' style={{width: '100px'}}/>
        </div>
        
        {/*menu*/}
        
        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                About
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                Skills
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={500}>
                Work
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>
                Contact
                </Link>
            </li>
        </ul>
        

        {/*bars menu*/}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#032248] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="https://docs.google.com/document/d/1oD5QzsHv13qNOKNc-aQQyV-2JaXZx_jCQwQa_eDbC2E/edit?usp=drive_link">Resume</a>
                </li>
        </ul> 

        {/*social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/sethhudson99">
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-700'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://docs.google.com/document/d/1oD5QzsHv13qNOKNc-aQQyV-2JaXZx_jCQwQa_eDbC2E/edit?usp=drive_link">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default NavBar