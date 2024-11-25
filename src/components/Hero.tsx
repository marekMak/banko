import robot from '../assets/robot.png'
import arrowUp from '../assets/arrow-up.svg'
import discount from '../assets/discount.svg'

import {useRef, useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Hero = () => {

    const bottomTextContainer = useRef<HTMLDivElement>(null)
    const mainTextContainer = useRef<HTMLDivElement>(null)

    useEffect(()=>{

        if(bottomTextContainer.current) {

            gsap.registerPlugin(ScrollTrigger)

            const items = bottomTextContainer.current.querySelectorAll('h2')

            gsap.fromTo(
                items,{
                    opacity: 0,
                    y: 200
                },{
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.inOut',
                    stagger: .3,
                }
            )

        }

    },[])

    useEffect(()=>{

        const blueLight = document.querySelectorAll('.blueLight');
        const handImage = document.querySelector('.handImage');

        gsap.fromTo(
            handImage,{
                opacity: 0
            },{
                delay: .3,
                opacity: 1,
                duration: 5,
            }
        )

        gsap.fromTo(
            blueLight,{
                opacity: 0
            },{
                delay: .5,
                opacity: 1,
                duration: 1.75,
            }
        )

   

    },[])

    useEffect(()=>{

        if(mainTextContainer.current) {
            const items = mainTextContainer.current.querySelectorAll('.stagger-item')

            gsap.fromTo(
                items,{
                    opacity: 0,
                    y: 200
                },{
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.inOut',
                    stagger: .3,
                }
            )
        }

    },[])

    useEffect(()=>{

        const banner = document.querySelector('.banner')

        gsap.fromTo(
            banner,{
                opacity: 0,
                y:-200
            },{
                y:0,
                opacity: 1,
                duration: 1,
            }
        )

    },[])

    useEffect(() => {

        const circleContainer = document.querySelector('.circleContainer')

        gsap.fromTo(
            circleContainer,{
                opacity: 0,
            },{
                opacity: 1,
                delay:1,
                duration:1,
            }
        )

    },[])

  return (
    <div className='w-full min-h-screen px-4 md:px-40 mt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 font-poppins relative'>
            <div ref={mainTextContainer} className='flex h-full flex-col justify-center relative place-items-center md:place-items-start'>
                <div className='banner mb-10 mt-10 lg:mt-4 xl:mt-0 text-white rounded-xl py-2 px-4 flex items-center glass-bg max-w-max'>
                    <img src={discount}/><p><strong>20%</strong> Discount For <strong>1 Month</strong> Account</p>
                </div>
                <h1 className='text-white text-4xl md:text-5xl font-bold stagger-item'>The Next</h1>
                <h1 className='text-4xl md:text-5xl font-bold my-2 bg-gradient-to-br from-primary via-primary  to-white bg-clip-text text-transparent stagger-item'>Generation</h1>
                <h1 className='text-white text-4xl md:text-5xl font-bold stagger-item'>Payment method.</h1>

                <p className='text-slate-300 max-w-[80%] md:max-w-[40%] text-justify mb-4 md:mb-0 mt-10 stagger-item'>Our team of experts uses a methodology to indentify the credit cards most likely to fit your needs. We examine annual percentage rate, annual fees.</p>

                <div className='circleContainer absolute hidden md:flex cursor-pointer md:top-20 right-5 md:right-10 xl:top-40 xl:right-32 w-24 h-24 justify-center items-center  bg-gradient-to-br from-primary via-secondary to-white border-2 rounded-full'>
                    <div className='bg-baseBG rounded-full h-[95%] w-[95%] flex justify-center items-center'>
                        <h1 className='relative text-light text-sm text-center bg-gradient-to-br from-secondary via-secondary to-white bg-clip-text text-transparent'>Get <img src={arrowUp} className='absolute top-0 -right-2'/><span className='block'>Started</span></h1>
                    </div>
                </div>
            
            </div>
            <div className='flex h-full items-center justify-center relative'>
                <img src={robot} alt='Robot' className='handImage w-auto h-[80%] object-cover relative z-10' />
                <div className="blueLight absolute w-[70%] -top-[0] h-[70%] rounded-full blur-3xl bg-blue-500 opacity-50 z-0"></div>
            </div>

            

        </div>
        <div ref={bottomTextContainer} className='flex flex-col md:flex-row font-poppins mt-10 xl:mt-0 text-xl font-bold text-white items-center md:justify-between pr-0 md:pr-20'>
            <h2>3800+<span className='uppercase font-light sm:mb-2 ml-2 bg-gradient-to-r from-primary  to-white bg-clip-text text-transparent'>user active</span></h2>
            <h2>230+<span className='uppercase font-light sm:mb-2 ml-2 bg-gradient-to-r from-primary  to-white bg-clip-text text-transparent'>trusted by company</span></h2>
            <h2>$230+<span className='uppercase font-light sm:mb-2 ml-2 bg-gradient-to-r from-primary  to-white bg-clip-text text-transparent'>transaction</span></h2>
        </div>
    </div>
  )
}

export default Hero