import Modal from './Modal' 
import Fade from 'react-reveal/Fade';

function ProjectCard(props) {
    return(
        <Fade left>
      <div className="custom-font max-w-sm rounded overflow-hidden shadow-xl bg-[#21252B]">
        <img className="w-full cursor-pointer" src={props.image} alt=""/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.type}</div>
          <p className="text-slate-300 text-base">
            {props.title} 
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {props.stacks.map((s, index) => {
            return <span key={index} style={{backgroundColor: s.color}} className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{s.stack}</span>
          })}
        </div>
        <div className='w-full flex gap-4 justify-around my-5 px-4'>
          <div className='flex-1'>
            <Modal type={props.type}/>
          </div>
          <div className='flex-1'>
            {props.type === 'Internship Project' ?
              <a href="https://github.com/dev-maikeru/online-examination-management-system" target={'_blank'} rel='noreferrer'>
                <button className='px-5 py-2 bg-[#21252B] shadow shadow-[#181a1f] hover:bg-[#1a1d22] hover:border hover:border-[#4928db] rounded-md w-full'>Code</button>
              </a>
            :
              <button className='px-5 py-2 bg-[#21252B] shadow shadow-[#181a1f] hover:bg-[#1a1d22] hover:border hover:border-[#4928db] rounded-md w-full'>Code</button>
            }
          </div>
        </div>
      </div>
      </Fade>
    )
  }

  export default ProjectCard