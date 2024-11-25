import hooBankLogo from '../assets/logo.svg'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const Prefooter = () => {

    const prefooterContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {

        if(prefooterContainer.current){
            gsap.registerPlugin(ScrollTrigger)

            const items = prefooterContainer.current.querySelectorAll('.item-stagger')

            gsap.fromTo(
                items,{
                    opacity: 0,
                    x: 200
                },{
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    stagger: .3,
                    scrollTrigger: {
                        trigger: prefooterContainer.current,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: true,
                    }
                }
            )
        }

    },[])

  return (
    <section ref={prefooterContainer} className='w-full min-h-56 md-4 md:px-40 py-20'>
        <div className='flex lg:flex-row flex-col items-center lg:items-start lg:justify-between'>
            <div className='flex flex-col item-stagger'>
                <img src={hooBankLogo} alt='HooBank Logo' className='w-[80%] mb-10' />
                <p className='text-xl text-slate-300'>A new way to make the payments<span className='block'>easy, reliable and secure</span></p>
            </div>
            <div className='flex flex-col my-10 lg:my-0 item-stagger'>
                <h2 className='text-slate-300 font-bold mb-4 text-xl'>Usefull Links</h2>
                <ul className='flex flex-col text-slate-300 font-light gap-2'>
                    <li className='hover:text-white transition-all delay-150 cursor-pointer'>Content</li>
                    <li className='hover:text-white transition-all delay-150 cursor-pointer'>How it works</li>
                    <li className='hover:text-white transition-all delay-150 cursor-pointer'>Create</li>
                    <li className='hover:text-white transition-all delay-150 cursor-pointer'>Explore</li>
                    <li className='hover:text-white transition-all delay-150 cursor-pointer'>Terms & Services</li>
                </ul>
            </div>

            <div className='flex flex-col mb-10 item-stagger'>
                <h2 className='text-slate-300 font-bold mb-4 text-xl'>Community</h2>
                <ul className='flex flex-col text-slate-300 font-light gap-2'>
                    <li className='hover:text-white transition-all delay-150 cursor-pointer'>Help Center</li>
                    <li className='hover:text-white transition-all delay-150 cursor-pointer'>Partners</li>
                    <li className='hover:text-white transition-all delay-150 cursor-pointer'>Suggestions</li>
                    <li className='hover:text-white transition-all delay-150 cursor-pointer'>Blog</li>
                    <li className='hover:text-white transition-all delay-150 cursor-pointer'>Newsletters</li>
                </ul>
            </div>

            <div className='flex flex-col item-stagger'>
                <h2 className='text-slate-300 font-bold mb-4 text-xl'>Partner</h2>
                <ul className='flex flex-col text-slate-300 font-light gap-2'>
                <li className='hover:text-white transition-all delay-150 cursor-pointer'>Our Partner</li>
                <li className='hover:text-white transition-all delay-150 cursor-pointer'>Become a Partner</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Prefooter