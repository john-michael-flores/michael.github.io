import React, {useState, useEffect} from 'react'
import Logo from '../assets/logo.png'
import { CgMenuRight } from 'react-icons/cg'
import NavMenu from './NavMenu'
import Fade from 'react-reveal/Fade';
import Shake from 'react-reveal/Shake';

function NavBar() {
  const [isLogoClicked, setIsLogoClicked] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const unscrolledClass = 'bg-transparent p-7'
  const scrolledClass = 'bg-[#181a1d] p-5 shadow shadow-[#111214]'

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position === 0) {
       setIsScrolled(false)
    }
    if (position > 80) {
      setIsScrolled(true)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    <nav className={`fixed z-20 w-screen mx-auto bg-darkGray transition-all duration-300 ease-in-out ${isScrolled ? scrolledClass : unscrolledClass}`}>
       <div className='flex justify-between md:px-12 text-white'>
          <div>
            <h1 className='font-bold text-2xl cursor-pointer'>
              <a href="#home" onClick={() => setIsLogoClicked(!isLogoClicked)}>
                {/* Logo */}
                <Shake when={isLogoClicked}>
                <img src={Logo} alt="" width={isScrolled ? 100 : 120}/>
                </Shake>
              </a>
            </h1>
          </div>

          {/* Nav links */}
          <div className='hidden md:flex space-x-12 font-semibold'>
            <a className='hover:text-darkPurple transition-all delay-75 ease-in-out' href='#home'>Home</a>
            <a className='hover:text-darkPurple transition-all delay-75 ease-in-out' href='#about'>About Me</a>
            <a className='hover:text-darkPurple transition-all delay-75 ease-in-out' href='#skills'>Skills</a>
            <a className='hover:text-darkPurple transition-all delay-75 ease-in-out' href='#proj'>Projects</a>
          </div>

           {/* Hamburger menu icon */}
          <div className='md:hidden flex items-center'>
            <button onClick={() => setIsCollapsed(!isCollapsed)}>
              <CgMenuRight className='text-2xl text-white hover:text-darkPurple transition-all delay-75 ease-in-out'/>
            </button>
          </div>
       </div>

         {/* Mobile menu */}
         <Fade bottom>
         <div className={`mt-5 block md:hidden ${isCollapsed ? 'block' : 'hidden'}`}>
            <NavMenu setIsCollapsed={setIsCollapsed}/>
          </div>
          </Fade>
    </nav>
  )
}

export default NavBar