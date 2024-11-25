import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import quotes from '../assets/quotes.svg'

import firstPerson from '../assets/people01.png'
import secondPerson from '../assets/people02.png'
import thirdPerson from '../assets/people03.png'

import airBnb from '../assets/airbnb.png'
import binance from '../assets/binance.png'
import coinbase from '../assets/coinbase.png'
import dropbox from '../assets/dropbox.png'

const People = () => {

  const textContainer = useRef<HTMLDivElement>(null)
  const brandsContainer = useRef<HTMLDivElement>(null)
  const peopleContainer = useRef<HTMLDivElement>(null)


  useEffect(() => {

  if(textContainer.current) {

    const text = textContainer.current.querySelector('h1');
    const paragraph = textContainer.current.querySelector('p');

    console.log(text);

    gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            text,{
                opacity: 0,
                x: -200
            },{
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: textContainer.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: true,
                }
            }
        )

        gsap.fromTo(
            paragraph,{
                opacity: 0,
                x: 200
            },{
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: textContainer.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: true,
                }
            }
        )
    
    }
  },[])

  useEffect(()=>{

    if(brandsContainer.current){
    
        gsap.registerPlugin(ScrollTrigger)
        const items = brandsContainer.current.querySelectorAll('img')

        gsap.fromTo(
            items,{
                opacity: 0,
                x: -200
            },{
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: 'power2.inOut',
                stagger: .3,
                scrollTrigger: {
                    trigger: brandsContainer.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: true,
                }
            }
        )


    }

  },[])

  useEffect(()=>{

    if(peopleContainer.current){

        const items = peopleContainer.current.querySelectorAll('.item-stagger');

        gsap.fromTo(

            items,{
                opacity: 0,
            },{
                opacity: 1,
                duration: 1.5,
                ease: 'power2.inOut',
                stagger: .3,
                scrollTrigger: {
                    trigger: peopleContainer.current,
                    start: 'top 40%',
                    end: 'top 50%',
                    scrub: true,
                }
            }
        )

    }

  },[])


  return (
    <section className='min-h-screen relative w-full px-4 xl:px-40 font-poppins py-0 md:py-20'>
       
    
       <div className="hidden lg:block absolute w-[70%] right-[-60%] top-[50%] -translate-y-[50%] h-96 rounded-full blur-3xl bg-primary opacity-20 z-0"></div>


        <div ref={textContainer} className='grid grid-cols-1 lg:text-left place-items-center lg:place-items-start text-center lg:grid-cols-2 w-full min-h-20 items-center py-0 md:py-20'>
            <h1 className='text-white text-center lg:text-left font-bold mb-4 md:mb-0 text-3xl md:text-5xl leading-normal'>
                What people are
                <span className='block'>saying about us.</span>
            </h1>
            <p className='font-light text-white px-10 lg:px-0 text-justify py-10'>
                Everything you need to accept card payments and grow your business anywhere on the planet
            </p>
        </div>

        <div className='w-full flex justify-center px-10 md:px-40 lg:px-0 py-10'>
        
        <div ref={peopleContainer} className='w-full lg:flex lg:justify-between gap-5 md:grid md:grid-cols-1'>
            
            
        <div className='flex flex-col flex-1 w-full lg:w-56 lg:mx-16 mb-8 md:mb-0 h-96 justify-center text-center items-center cursor-pointer transition-all delay-500 hover:bg-gradient-to-br hover:from-cardLight hover:via-cardDark hover:to-cardDark py-5 rounded-xl shadow relative item-stagger'>
                <img src={quotes} alt="quotes" className='absolute top-10 left-6'/>
                <p className='text-white w-[90%] text-xl h-46 font-medium text-md py-4 pt-20'>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
                <div className='mt-10 relative w-full ml-10'>
                    <img src={secondPerson} alt="second person" className='absolute left-2 top-[50%] -translate-y-[50%] w-14 md:w-16'/>
                    <h1 className='text-white font-bold text-xl md:text-2xl ml-10'>Steve Mark</h1>
                    <h2 className='text-slate-300 font-light text-xl ml-10'>Founder & Leader</h2>
                </div>
            </div>
            
            
            
            <div className='flex flex-col flex-1 lg:w-56 mb-8 md:mb-0 h-96 justify-center text-center items-center cursor-pointer transition-all delay-150 hover:bg-gradient-to-br hover:from-cardLight hover:via-cardDark hover:to-cardDark py-5 rounded-xl shadow relative item-stagger'>
                <img src={quotes} alt="quotes" className='absolute top-10 left-6'/>
                <p className='text-white w-[90%] h-46 text-xl font-medium text-md py-4 pt-20'>Money a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
              
                <div className='mt-10 relative w-full ml-10'>
                    <img src={firstPerson} alt="first person" className='absolute left-2 top-[50%] -translate-y-[50%] w-14 md:w-16'/>
                    <h1 className='text-white font-bold text-xl md:text-2xl ml-10'>Hermann Jensen</h1>
                    <h2 className='text-slate-300 font-light text-xl ml-10'>Founder & Leader</h2>
                </div>
            </div>

          


            <div className='flex flex-col flex-1 lg:w-56 h-96 justify-center text-center items-center cursor-pointer transition-all transition-colors delay-500 hover:bg-gradient-to-br hover:from-cardLight hover:via-cardDark hover:to-cardDark py-5 rounded-xl shadow relative item-stagger'>
                <img src={quotes} alt="quotes" className='absolute top-10 left-6'/>
                <p className='text-white w-[90%] h-46 text-xl font-medium text-md py-4 pt-20'>It is usually people in the money business, finance and international trade that are really rich.</p>
                <div className='mt-10 relative w-full ml-10'>
                    <img src={thirdPerson} alt="third person" className='absolute left-2 top-[50%] -translate-y-[50%] w-14 xl:w-16'/>
                    <h1 className='text-white font-bold text-xl xl:text-2xl ml-10'>Kenn Gallagher</h1>
                    <h2 className='text-slate-300 font-light text-xl ml-10'>Founder & Leader</h2>
                </div>
                </div>

        </div>
        </div>

        <div ref={brandsContainer} className='flex lg:flex-row flex-col justify-around w-full mt-10 gap-7 items-center'>
            <img src={airBnb} alt='airbnb logo' className='h-14'/>
            <img src={binance} alt='binance logo' className='h-10'/>
            <img src={coinbase} alt='coinbase logo' className='h-10'/>
            <img src={dropbox} alt='dropbox logo' className='h-10'/>
        </div>
    </section>
  )
}

export default People