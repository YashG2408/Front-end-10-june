import React, { useRef } from 'react'
import Navbar from '../Navbar'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


function HomePage() {
    let tl = gsap.timeline()
useGSAP(()=>{
    tl.from('.left .p',{
        x:-200,
        duration : .6,
        opacity:0
    },'a')

    tl.from('.left .txt' ,{
        x:-100,
        duration : .6,
        opacity:0

    })

    tl.from('.left .h2',{
        x:-100,
        duration:.5,
         opacity:0
    })

    tl.from('.left .getbtn',{
        x:-100,
        duration : .6,
        opacity: 0,
        
    })

    tl.from('.right .hmimg ',{
        x:200,
        durationi:.6,
        opacity:0,
        delay:1
    },'a')
    
    tl.from('.prsn .p1',{
        x:-100,
        opacity:0,
        duration:.5,
        stagger:.5
    })

    tl.from('.prp',{
        x:-200,
        duration: .6,
        opacity:0,

    })


        
    






})
 

  return (


    <div className='w-full h-screen sec flex mt-20 '>
        <div className="left px-40 py-30 ">
                <p className='mb-4 flex gap-3 p items-center'><div className="crcl w-5 h-5 bg-green-700 rounded-full"></div>Build everything</p>
                <h1 className='mb-4 txt text-5xl font-bold h1 '>Unveiling My  Professional  Odyssey: <br /> Portfolio Highlights</h1>
                <h2 className='text-2xl mb-4 h2'>A brief introduction about myself and my professional <br /> objectives.</h2>
                <button className= 'getbtn cursor-pointer  bg-blue-700 text-white px-10 rounded py-3'>Get Started </button>

                <div className="prsn mt-30 flex gap-2">
                    <div className="p1 w-15 h-15 overflow-hidden rounded-full">
                        <img className='w-full h-full  object-cover' src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww" alt="" />
                    </div>
                    <div className="p1 w-15 h-15 overflow-hidden -ml-5 rounded-full ">
                        <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww" alt="" />
                    </div>
                    <div className="p1 w-15 h-15 overflow-hidden  -ml-5 rounded-full">
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                    <p className='prp'>need help ? <a className='text-blue-700' href=''> Contact Our experts</a> <br />Tell us about you project</p>
                </div>
        </div>
        <div className="right w-1/2 py-30">
            

            <img  className=' w-100  h-100 hmimg object-cover rounded-2xl' src="https://themewagon.github.io/venus-nextjs/images/hero/hero-image.png" alt="" />
        


        </div>
    
    </div>
  )
}

export default HomePage