import card from '../assets/card.png'

import { useRef,useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Cards = () => {

  gsap.registerPlugin(ScrollTrigger);

  const gsapContainer = useRef<HTMLDivElement>(null)
  const imageContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {

    if(gsapContainer.current){
      const items = gsapContainer.current.querySelectorAll('.item-stagger');

   gsap.fromTo(
    items, {
      opacity: 0, x:-200
    },
    {
      opacity: 1, 
      x:0, 
      duration: 1.5, 
      ease: 'power2.inOut', 
      scrollTrigger: {
        trigger: gsapContainer.current,
        start: 'top 70%',
        end: 'top 30%',
        scrub: true,
      }
    }
   )
  }

  },[])

  useEffect(()=>{

    if(imageContainer.current){
      const image = imageContainer.current.querySelector('img');
      gsap.fromTo(
        image, {
          opacity:0, x:200
        },
        {
          x: 0,
          opacity:1, 
          duration: 1.5, 
          ease: 'power2.inOut', 
          scrollTrigger: {
            trigger: imageContainer.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: true,
          }
        }
      )
    }

  },[])


  return (
    <section className='min-h-screen w-full px-4 md:px-40 grid grid-cols-1 lg:grid-cols-2 font-poppins'>
           <div ref={gsapContainer} className='flex flex-col justify-center text-center md:text-left items-center lg:items-start'>
                <h1 className='text-white font-bold text-3xl md:text-5xl leading-normal item-stagger'>
                    Find a better card deal
                    <span className='block item-stagger'>in few easy steps.</span>
                </h1>
                <p className='font-light text-white px-10 md:px-0 text-justify py-10 item-stagger'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundrets of credit cards on the market.</p>
                <button className='rounded-lg bg-gradient-to-r from-white text-baseBG  to-primary max-w-max py-2 px-4 item-stagger'>Get started</button>
            </div>

        <div ref={imageContainer} className='flex flex-col justify-center p-10'>
            <img src={card} className='' alt='card image' />
        </div>

         
</section>
  )
}

export default Cards