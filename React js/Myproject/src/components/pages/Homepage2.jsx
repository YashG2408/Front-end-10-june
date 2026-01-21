import { useGSAP } from '@gsap/react';
import React from 'react'

function Homepage2() {

    let tl2 = gsap.timeline();

    useGSAP(()=>{
        tl2.from('.revie1',{
            y:-30,
        
            duration:.6,
            stagger:.1
        })

        

           
        
        
            
        

})



    return (
        <div className='w-full p-30 px-60 mt-20 '>
            <div className="top text-center flex items-center justify-between">
                <div className="revie1 rounded shadow py-20 shadow-black">
                       <i className="fa-solid fa-star text-3xl text-blue-950"></i>
                    <h1 className='font-bold text-6xl my-2'>4.86</h1>
                    <p className='w-70'>Out of 5 stars from 3896 reviews on Google platform</p>
                </div>
                <div className="revie1 rounded shadow py-20 shadow-black">
                    <i class="fa-solid fa-user text-3xl text-blue-950"></i>
                    <h1 className=' font-bold text-6xl my-2'>364</h1>
                    <p className='w-70'>Client testimonials received in the year 2021</p>
                </div>
                <div className="revie1 rounded shadow py-20 shadow-black">
                    <i class="fa-solid fa-briefcase text-3xl text-blue-950"></i>
                    <h1 className='font-bold text-6xl my-2'>45M+</h1>
                    <p className='w-70'>Revenue generated through new projects & marketing</p>
                </div>
            </div>
            <div className="btm flex">
                <div className="left  w-1/2 ">
                    <img className='w-full  object-cover  mt-20' src="https://themewagon.github.io/venus-nextjs/images/work-progress/progress-work.png" alt="" />
                </div>
                <div className="right secright w-1/2 py-40 px-10 ">
                    <p className='mb-4 flex gap-3  items-center'><div className="crcl w-5 h-5 bg-green-700 rounded-full"></div>Build everything</p>
                    <h1 className='text-3xl font-bold mb-10'>Build amazing websites and landing pages with ease</h1>
                    <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                    <div className="progress mt-20">

                        <div className="p-div flex justify-between">
                            <p className='text-sky-700'>Ui/UX Reaserch and Testing</p>
                            <h1 className='text-sky-700'>95%</h1>

                        </div>
                        
                            <div className=" bg-blue-600 mb-8 mt-3 h-1 rounded-full w-[84%]"> </div>
                        
                        <div className="p-div flex justify-between">
                            <p className='text-sky-700'>Ui/UX Reaserch and Testing</p>
                            <h1 className='text-sky-700'>84%</h1>

                        </div>
                       
                            <div class="bg-blue-600  h-1 mt-3 mb-8 rounded-full w-[90%]"> </div>
                        
                        <div className="p-div flex justify-between">
                            <p className='text-sky-700'>Ui/UX Reaserch and Testing</p>
                            <h1 className='text-sky-700'>90%</h1>

                        </div>
                       
                            <div class="bg-blue-600 h-1  mt-3 rounded-full w-[95%]"> </div>
                        

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Homepage2