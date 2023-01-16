import Fade from 'react-reveal/Fade';

function SkillsProgressBar(props) {
 
    return(
        // {bg-[#21252B]}
    <Fade bottom>
      <div>
        <button>
          <div className="flex gap-4 bg-[#21252B] rounded-lg w-[90vw] lg:w-[450px] shadow-xl p-4 m-auto">
            <div className='self-center'>
              <img src={props.logo} alt="" width={80} height={80}/>
            </div>
            <div className='w-full'>
              <h1 className='text-start'>{props.skill}</h1>
              <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                <div className={`h-full text-center text-xs text-white font-bold rounded-full transition-all delay-75 ease-in-out`} style={{backgroundColor: props.color, width: `${String(props.percent).concat('%')}`}}>
                  {props.percent + '%'}
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
      </Fade>
    )
  }

  export default SkillsProgressBar