import React from 'react'

function HmServices() {
  return (
    <div className='w-full   flex flex-col items-center justify-between mt-30 '>
        
        <div className="top flex items-center gap-2 ">
          <div className="crcl  w-5 h-5 bg-green-700 rounded-full"></div>
          <p className='text-1xl -mt-1'>our services </p>
        </div>
          <h1 className='text-4xl  font-bold w-200 mt-5 text-center text-blue-950'>Services specifically designed to meet your business needs</h1>
        <div className="bottom m-50 flex gap-20">
      <div className="card1 flex items-center flex-col justify-center gap-7 p-10 w-90 text-center shadow-lg shadow-black/20">
        <img  className='mx-auto ' src="https://themewagon.github.io/venus-nextjs/images/services/ux-design-product_1.svg" alt="" />
        <h1 className='text-3xl font-bold text-blue-950  w-50 '>UX & Product Design</h1>
        <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className='px-6 py-3 text-2xl text-blue-900 cursor-pointer '>Get Started <i class="fa-solid fa-angle-right"></i></button>
      </div>
      <div className="card1 flex items-center flex-col justify-center gap-7 p-10 w-90 text-center shadow-lg shadow-black/20">
      <img  className='mx-auto ' src="https://themewagon.github.io/venus-nextjs/images/services/perfomance-optimization.svg" alt="" />
        <h1 className='text-3xl font-bold text-blue-950  w-50 '>Performance Optimization</h1>
        <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className='px-6 py-3 text-2xl text-blue-900 cursor-pointer '>Get Started <i class="fa-solid fa-angle-right"></i></button></div>
      <div className="card1 flex items-center flex-col justify-center gap-7 p-10 w-90 text-center shadow-lg shadow-black/20">
      <img  className='mx-auto ' src="https://themewagon.github.io/venus-nextjs/images/services/ux-design-product_2.svg" alt="" />
        <h1 className='text-3xl font-bold text-blue-950  w-50 '>Web Devlopment</h1>
        <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className='px-6 py-3 text-2xl text-blue-900 cursor-pointer '>Get Started <i class="fa-solid fa-angle-right"></i></button></div>

        </div>
    </div>
  )
}

export default HmServices