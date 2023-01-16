import React from 'react'
import Programming from './Programming'
import Fade from 'react-reveal/Fade';
import '../../styles/styles.css'
import Me from '../../assets/FloresJMC.png'

function AboutMe() {
  return (
    <section id='about' className='bg-darkGray h-screen'>
        <div className='relative z-10 h-full flex flex-col justify-center items-center md:flex-row bg-transparent'>
          {/* {Left div} */}
          <div className='flex justify-center items-center w-1/2 bg-transparent'>
            <Fade left>
              <div className="shape-outer heptagon self-center">
                <div className="shape-inner heptagon"></div>
                <div className='div-image'><img className="my-image" src={Me} alt="" /></div>
              </div>
            </Fade>
          </div>
          {/* {Right div} */}
          <div className='flex justify-center items-center bg-transparent w-full px-6 md:w-1/2'>
            <Fade right>
            <div className='flex justify-center flex-col text-white space-y-12'>
              <h1 className='font-bold text-2xl'>About Me</h1>
              <p className='flex flex-wrap w-full md:w-3/4 text-justify mt-5'>
                I am a perseverant, adaptable, and open-minded individual who is passionated in programming,
                building web applications, and learning new technologies. I am eager to learn new technologies
                and put my knowledge into practice. As a junior software engineer, my goal is to refine my
                skills and use it to bring the best solutions to modern problems and contribute to organization's
                goals and objectives.
              </p>
            </div>
            </Fade>
          </div>
        </div>
    </section>
  )
}

export default AboutMe