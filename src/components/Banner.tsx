import {useRef, useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Banner = () => {

  const bannerContainer = useRef<HTMLDivElement>(null)
  const bannerElements = useRef<HTMLDivElement>(null)

  useEffect(()=>{

      if(bannerContainer.current){
        const bannerWrapper = bannerContainer.current.querySelector('.bannerWrapper')


        gsap.fromTo(bannerWrapper, {
          opacity: 0},
          {
            opacity: 1,
            duration: .7,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: bannerContainer.current,
              start: 'top 90%',
              end: 'top 10%',
              scrub: true,
            }
          })
        }
  },[])

  useEffect(()=>{

    if(bannerElements.current) {
      gsap.registerPlugin(ScrollTrigger)

      const items = bannerElements.current.querySelectorAll('.item-stagger')

      gsap.fromTo(
        items,
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger:.3,
          scrollTrigger: {
            trigger: bannerElements.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: true,
          },
        },
      )
    }
  },[])
  return (
    <section ref={bannerContainer} className='w-full min-h-32 flex justify-center px-10 lg:px-40 py-10 lg:py-0'>
      <div ref={bannerElements} className='bannerWrapper h-full w-full px-10 lg:px-20 py-10 lg:py-20 bg-gradient-to-br from-cardLight via-cardDark to-cardDark rounded-xl grid grid-cols-1 lg:grid-cols-2'>
        <div  className="flex flex-col justify-start">
          <h1 className='text-white font-bold text-3xl text-center lg:text-left px-4 lg:px-0 md:text-5xl leading-normal item-stagger'>Let's try our service now!</h1>
          <p className='font-light text-white lg:px-10 px-4 md:px-0 text-justify py-10 item-stagger'>
            Everything you need to accept card payment and grow your business anywhere on the planet.
          </p>
        </div>
        <div className='flex justify-center items-center item-stagger'>
          <button className='rounded-lg bg-gradient-to-br from-secondary via-secondary text-baseBG  to-primary max-w-max py-2 px-4 handle-stagger-item'>Get started</button>
        </div>
      </div>
    </section>
  )
}

export default Banner