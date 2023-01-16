import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { IoArrowUpCircle } from 'react-icons/io5'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero/Hero'
import AboutMe from '../components/AboutMe/AboutMe'
import Skills from '../components/Skills/Skills'
import ParticleIcons from '../components/ParticleIcons'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer'

function Main() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(scrollPosition)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <ParticleIcons/>
      <header>
        <NavBar/>
      </header>
      <main className='flex flex-col space-y-12 overflow-y-hidden'>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Footer/>
      </main>

       {/* Arrow up icon */}
       {scrollPosition > 800 ?
          <Link duration={300} to={'home'} isDynamic={true} smooth={true} className="cursor-pointer">
            <IoArrowUpCircle className='fixed z-50 bottom-5 right-5 text-4xl text-darkPurple hover:scale-125 ease-linear delay-100 transition-all'/>
          </Link>
        : ''}
    </div>
  )
}

export default Main