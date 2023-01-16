import React, { useRef } from 'react'
import Coding from './Coding'
import Typewriter from "typewriter-effect";
import Fade from 'react-reveal/Fade';
import useIsInViewport from '../../hooks/useIsInViewport';

function Hero() {
  const heroSectionRef = useRef(null)

  const isHeroSectionInViewport = useIsInViewport(heroSectionRef);

  return (
    <section id='home' className='bg-darkGray h-screen'>
        <div className='h-full flex justify-center items-center mx-auto gap-6 px-6 md:flex-row pt-12 pb-12'>
            <div className='relative flex justify-center w-1/2 bg-transparent text-white z-10'>
                <div ref={heroSectionRef} className='flex flex-col space-y-5 justify-center items-center w-full bg-transparent'>
                    <Fade bottom when={isHeroSectionInViewport}>
                    <h1 className='max-w-md text-[2rem] md:text-[3rem] font-extrabold'>Greetings!</h1>
                    <p className='text-xl font-semibold'>
                        I'm <span className='text-darkPurple'>Michael.</span>
                    </p>
                    <p className='text-xl font-semibold'>
                    <Typewriter
                        options={{
                            strings: [
                            "I'm a Junior Software Engineer",
                            "Aspiring Full Stack Developer"
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                            cursor: ' ( );'
                        }}
                        />
                    </p>
                    </Fade>
                    {/* <p className='text-xl font-semibold'>Junior Software Engineer.</p>
                    <p className='text-xl font-semibold'>Aspiring Full Stack Developer.</p> */}
                </div>
            </div>
            {/* <div className='relative z-10 mx-autoflex justify-center items-center w-1/2 bg-transparent text-white pr-12'>
                <div className='flex justify-center items-center bg-transparent mx-auto'>
                    <Coding/>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default Hero