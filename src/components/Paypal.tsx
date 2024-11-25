import paypalImg from '../assets/bill.png'
import apple from '../assets/apple.svg'
import google from '../assets/google.svg'

import { useEffect, useRef} from'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



const Paypal = () => {

  const imageContainer = useRef<HTMLDivElement>(null)
  const textContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    if(imageContainer.current) {

      const image = imageContainer.current.querySelector('img');
      gsap.fromTo(
        image,{
          opacity: 0
        },
        {
          opacity: 1, 
          duration: 1.5, 
          ease: 'power2.inOut', 
          scrollTrigger: {
            trigger: imageContainer.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 0.3,
          }
        }
      )

     
    }
  },[])

  useEffect(()=>{

    if(textContainer.current){
      const textItems = textContainer.current.querySelectorAll('.item-stagger');
      console.log(textItems);

      gsap.fromTo(
        textItems,
        { opacity: 0, y: 500 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              stagger: .3, // Každý element sa spustí s 200ms oneskorením
              ease: "power2.out",
              scrollTrigger: {
                trigger: textContainer.current,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
              },
            }
      )
    }

  },[])

  return (
    <section className='min-h-screen relative w-full px-10 md:px-40 grid grid-cols-1 lg:grid-cols-2 font-poppins pb-5 md:py-20'>
      
      <div className="blueLight absolute w-[70%] -left-96 top-[50%] -translate-x-[50%] -translate-y-[50%] h-[80%] rounded-full blur-3xl bg-firebrick opacity-5 z-0"></div>


        <div ref={imageContainer} className='flex flex-col justify-center z-10'>
           <img src={paypalImg} className=""/>
        </div>

            <div ref={textContainer} className='flex flex-col justify-center items-center lg:items-start'>
                <h1 className='text-white font-bold text-3xl md:text-5xl leading-normal item-stagger'>
                    Easily control your
                    <span className='block item-stagger'>billing & invoicing.</span>
                </h1>
                <p className='font-light text-white px-10 md:px-0 text-justify py-10 item-stagger'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundrets of credit cards on the market.</p>
                <div className='flex gap-5'>
                    <img className='cursor-pointer' src={apple} alt="app store link item-stagger"/>
                    <img className='cursor-pointer' src={google} alt="google play link item-stagger"/>
                </div>
            </div>
    </section>
  )
}

export default Paypal