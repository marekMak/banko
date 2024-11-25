import hooBankLogo from '../../public/hoobank.svg'
import { CgMenuMotion } from "react-icons/cg";

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useRef, useEffect} from 'react'


const Header = () => {

  const linkContainer = useRef<HTMLUListElement>(null)
  const logoContainer = useRef<HTMLDivElement>(null)

  useEffect(() =>{

    if(linkContainer.current){

      gsap.registerPlugin(ScrollTrigger)

      const items = linkContainer.current.querySelectorAll('li')

      gsap.fromTo(
        items,{
          opacity: 0,
          y: -50
        },{
          duration:.75,
          delay:.25,
          opacity: 1,
          y: 0,
          ease: 'power2.inOut',
          stagger: .1
        }
      )


    }

  },[])

  useEffect(()=>{

    if(logoContainer.current){ 
      const logoItems = logoContainer.current.querySelectorAll('.stagger-item')

    gsap.fromTo(
      logoItems, {
        opacity: 0,
        y: -200
      },{
        duration:1,
        delay:.25,
        opacity: 1,
        y: 0,
        ease: 'power2.inOut',
        stagger:.3
      }
    )
  }

  },[])

  return (
    <nav className='flex px-10 md:px-40 py-5 w-full justify-between items-center font-poppins absolute top-0 left-0'>
        <div ref={logoContainer} className='flex'>
            <img src={hooBankLogo} className='logo stagger-item' alt='HooBank logo' />
            <h1 className='text-2xl font-bold ml-2 text-white stagger-item'>Hoo<span className='text-primary'>Bank</span></h1>
        </div>
        <ul ref={linkContainer} className='hidden md:flex gap-7 font-md text-slate-300'>
            <li className='hover:text-white transition-all delay-150 cursor-pointer'>Home</li>
            <li className='hover:text-white transition-all delay-150 cursor-pointer'>Features</li>
            <li className='hover:text-white transition-all delay-150 cursor-pointer'>Product</li>
            <li className='hover:text-white transition-all delay-150 cursor-pointer'>Clients</li>
        </ul>
        <div className='flex items-center md:hidden'>
            <CgMenuMotion className='text-white text-4xl' />
        </div>
    </nav>
  )
}

export default Header