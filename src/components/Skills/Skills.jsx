import React from 'react'
import SkillsSvg from './SkillsSvg'
import SkillsProgressBar from './SkillsProgressBar'
import html from '../../assets/skills-logos/html.png'
import css from '../../assets/skills-logos/css.png'
import js from '../../assets/skills-logos/js.png'
import tailwind from '../../assets/skills-logos/tailwind.png'
import java from '../../assets/skills-logos/java.png'
import springboot from '../../assets/skills-logos/springboot.png'
import postgres from '../../assets/skills-logos/postgres.png'
import express from '../../assets/skills-logos/express.png'
import reactjs from '../../assets/skills-logos/reactjs.png'
import nodejs from '../../assets/skills-logos/nodejs.png'

function Skills() {

    const skills = [
        {
          skill: 'HTML',
          percent: 70,
          color: '#FF4C1E',
          logo: html
        },
        {
          skill: 'CSS',
          percent: 60,
          color: '#004CE8',
          logo: css
        },
        {
          skill: 'JavaScript',
          percent: 70,
          color: '#FFDF00',
          logo: js
        },
        {
          skill: 'Tailwind CSS',
          percent: 60,
          color: '#07B6D5',
          logo: tailwind
        },
        {
          skill: 'Java',
          percent: 80,
          color: '#DE8E2F',
          logo: java
        },
        {
          skill: 'Spring Boot',
          percent: 70,
          color: '#68BD45',
          logo: springboot
        },
        {
          skill: 'PostgreSQL',
          percent: 40,
          color: '#2F6792',
          logo: postgres
        },
        {
          skill: 'Express',
          percent: 50,
          color: '#52565A',
          logo: express
        },
        {
          skill: 'React',
          percent: 60,
          color: '#61DAFB',
          logo: reactjs
        },
        {
          skill: 'Node JS',
          percent: 50,
          color: '#75AE63',
          logo: nodejs
        },
      ]
  return (
    <section id='skills' className='bg-darkGray'>
        {/* <div className='container flex flex-col-reverse md:flex-row px-6'>
            <div className='flex justify-center items-center w-1/2 bg-transparent'>
                <div className='flex flex-col space-y-12 w-1/2 justify-center items-center text-white'>
                    <h1 className='font-bold text-2xl'>
                        Skills
                    </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate mollitia nemo porro necessitatibus at, doloremque voluptatibus. Cupiditate ea, dolorum at repellendus, inventore optio doloribus debitis nisi tenetur eius earum natus!
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center w-1/2 bg-transparent'>
             <SkillsSvg/>
            </div>
        </div> */}
         <div className='relative z-10 flex flex-col gap-8 justify-center items-center text-white mt-24'>
            <h1 className='custom-font text-2xl sm:text-4xl text-[#8892b0] border-b-4 border-b-[#4928db]'>Skills</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {skills.map((s, index) => <SkillsProgressBar key={index} skill={s.skill} percent={s.percent} color={s.color} logo={s.logo}/>)}
            </div>
        </div>
    </section>
  )
}

export default Skills