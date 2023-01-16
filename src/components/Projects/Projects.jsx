import React, { useState } from 'react'
import ProjectSvg from './ProjectSvg'
import Fade from 'react-reveal/Fade';
import capstone from '../../assets/capstoneBg.png'
import internship from '../../assets/internshipBg.jpg'
import ProjectCard from './ProjectCard'

function Projects() {
    const [showProjectForm, setShowProjectForm] = useState(false)
    const capstoneStack = [
        {
          stack: 'HTML',
          color: '#FF4C1E'
        },
        {
          stack: 'CSS',
          color: '#004CE8',
        },
        {
          stack: 'Bootstrap',
          color: '#563F7B',
        },
        {
          stack: 'JavaScript',
          color: '#FFDF00',
        },
        {
          stack: 'PHP',
          color: '#777BB3',
        },
        {
          stack: 'MySQL',
          color: '#00758F',
        },
      ]
      const internshipStack = [
        {
          stack: 'JavaScript',
          color: '#FFDF00'
        },
        {
          stack: 'MongoDB',
          color: '#12924F'
        },
        {
          stack: 'Express',
          color: '#52565A',
        },
        {
          stack: 'React',
          color: '#61DAFB',
        },
        {
          stack: 'Node.js',
          color: '#75AE63',
        },
        {
          stack: 'Tailwind CSS',
          color: '#07B6D5',
        },
      ]
  return (
    <section id='proj' className='bg-darkGray w-full mb-24 py-4 px-5'>
        {/* <div className='container flex flex-col-reverse justify-center md:flex-row mx-auto'>
            <div className='flex justify-center items-center w-1/2 bg-transparent'>
                <Fade right>
                    <ProjectSvg/>
                </Fade>
            </div>
            <div className='relative z-10 flex justify-center items-center w-1/2 bg-transparent'>
                <div className='flex flex-col space-y-12 text-white justify-center w-1/2'>
                    <h1 className='font-bold text-2xl'>
                        Projects
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos in quo tenetur laborum dicta saepe quaerat voluptates natus deserunt ipsam, sequi fugit reprehenderit magnam officiis pariatur minus. Saepe, nesciunt asperiores.
                    </p>
                </div>
            </div>
        </div> */}
        <div className='relative z-10 flex flex-col gap-8 justify-center items-center h-full text-white mt-24'>
           
            <h1 className='custom-font text-2xl sm:text-4xl text-[#8892b0] inline border-b-4 border-b-[#4928db]'>Projects</h1>
            
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
                <ProjectCard 
                    image={capstone} 
                    title={'E-Scholarship Application and Records Management System'}
                    stacks={capstoneStack}
                    type={'Capstone Project'}
                    />
                <ProjectCard 
                    image={internship} 
                    title={'Testdeck: Online Examination Management System'}
                    stacks={internshipStack}
                    type={'Internship Project'}
                    />
            </div>
        </div>
    </section>
  )
}

export default Projects