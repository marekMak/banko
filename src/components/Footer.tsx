import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'


const Footer = () => {

  

  return (
    <footer className='w-full px-4 md:px-40 py-10 text-white flex md:flex-row flex-col items-center justify-between relative'>
        <div className='absolute top-[10%] -translate-x-[50%] left-[50%] w-[85%] border-t-2 border-slate-300 opacity-25'></div>
        <div className='flex h-full items-center text-md mb-4 md:mb-0 md:text-xl text-slate-300 footer-text'>
            Copyright &copy; 2024 HooBank. All Rights Reserved.
        </div>
        <div className='flex max-w-max'>
            <div className='flex gap-4'>
            <img src={instagram}/>
            <img src={facebook}/>
            <img src={twitter}/>
            <img src={linkedin}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer