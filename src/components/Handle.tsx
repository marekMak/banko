import { useEffect, useRef } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import star from '../assets/Star.svg'
import shield from '../assets/Shield.svg'
import send from '../assets/Send.svg'

const Handle = () => {

    const gsapHandleBox = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        if(gsapHandleBox.current){
            const handleItems = gsapHandleBox.current.querySelectorAll('.handle-stagger-item');

        gsap.fromTo(
            handleItems,
            { opacity: 0, y: 500 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              stagger: .3, // Každý element sa spustí s 200ms oneskorením
              ease: "power2.out",
              scrollTrigger: {
                trigger: gsapHandleBox.current,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
              },
            }
          );
        }
      }, []);

      useEffect(() => {
        if (containerRef.current) {
          const items = containerRef.current.querySelectorAll(".stagger-item"); // Vyberieme všetky pod-elementy


          gsap.fromTo(
            items,
            { opacity: 0, y: 500 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              stagger: .3, // Každý element sa spustí s 200ms oneskorením
              ease: "power2.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
              },
            }
          );
        }
      }, []);

  return (
    <section className='min-h-full w-full py-20 px-4 md:px-40 grid grid-cols-1 lg:grid-cols-2 font-poppins'>
        <div ref={gsapHandleBox} className='flex flex-col items-center text-center md:text-left lg:items-start justify-center mb-10 md:mb-0'>
            <h1 className='text-white font-bold text-3xl md:text-5xl leading-normal handle-stagger-item'>
                You do the business <br className='hidden md:block'/>
                we'll handle the money.
            </h1>
            <p className='font-light text-white text-justify max-w-[80%] md:max-w-[60%] py-10 handle-stagger-item'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundrets of credit cards on the market.</p>
            <button className='rounded-lg bg-gradient-to-r from-secondary text-baseBG  to-primary max-w-max py-2 px-4 handle-stagger-item'>Get started</button>
        </div>

            <div className='flex flex-col justify-center'>
                <div ref={containerRef} className='grid grid-rows-3 grid-cols-1 gap-16 text-white px-20 ml-14'>
                    
                    <div className='flex flex-col relative stagger-item'>
                        <div className="absolute top-[50%] -left-10 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-primary opacity-20 rounded-full"></div>
                        <img src={star} className="absolute top-[50%] -left-10 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10" alt="star" />
                        <h1 className='font-bold text-md'>Rewards</h1>
                        <p className='font-light text-sm'>The best credit cards offer some tantalizing combinations of promotions and prizes.</p>
                    </div>

                    <div className='flex flex-col relative stagger-item'>
                    <div className="absolute top-[45%] -left-10 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-primary opacity-20 rounded-full"></div>
                    <img src={shield} className="absolute top-[45%] -left-10 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10" alt="shield" />
                        <h1 className='font-bold text-md'>100% Secured</h1>
                        <p className='font-light text-sm'>We take proactive steps make sure your information and transaction are secure.</p>
                    </div>

                    <div className='flex flex-col relative stagger-item'>
                    <div className="absolute top-[45%] -left-10 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-primary opacity-20 rounded-full"></div>
                    <img src={send} className="absolute top-[45%] -left-[2.75rem] transform -translate-x-1/2 -translate-y-1/2 w-10 h-10" alt="send" />
                        <h1 className='font-bold text-md'>Balance Transfer</h1>
                        <p className='font-light text-sm'>A balance transter credit card can save you a lot of money in interest charges.</p>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Handle