import React from 'react'

function Portfolio() {
   


  return (
    <div className='w-full flex flex-col  items-center justify-between mt-10 '>

        <div className="top flex flex-col items-center gap-10 justify-between" >
            <div className='flex items-center'>

             <div className="crcl  w-5 h-5 bg-green-700 rounded-full"></div>
          <p className='text-1xl port -mt-1'>portfolio </p>
            </div>
            <h1 className='text-4xl font-bold text-blue-950'>Explore my portfolio showcase</h1>
            <p className='w-90'>Dive into a curated collection of my finest work, showcasing expertise across various industries.</p>
        </div>
        <div className="mid w-full  flex px-10 py-10 gap-10   overflow-x-auto [&::-webkit-scrollbar]:h-0 scroll-smooth h-150 mt-10">
    {/* cards  */}
            <div className="card cursor-pointer   w-70 mt-20  shrink-0  ">
                <div className="profile w-full h-90">
                    <img className='w-full h-full ' src="https://themewagon.github.io/venus-nextjs/images/portfolio/panda-logo.png" alt="" />
                </div>
                <h1 className='text-3xl mt-5 font-bold text-blue-950'>Panda Logo </h1>
                <p>Disignation</p>
            </div>
            <div className="card w-70 cursor-pointer shrink-0">
                <div className="profile w-full h-90">
                    <img className='w-full h-full' src="https://themewagon.github.io/venus-nextjs/images/portfolio/humans.png" alt="" />
                </div>
                <h1 className='text-3xl mt-5 font-bold text-blue-950'>Eveday Humans </h1>
                <p>Disignation</p>
            </div>
            <div className="card w-70 mt-20 cursor-pointer shrink-0">
                <div className="profile w-full h-90">
                    <img className='w-full h-full' src="https://themewagon.github.io/venus-nextjs/images/portfolio/cozycasa.png" alt="" />
                </div>
                <h1 className='text-3xl mt-5 font-bold text-blue-950'>Cozycasa </h1>
                <p>Disignation</p>
            </div>

            <div className="card w-70 cursor-pointer   shrink-0">
                <div className="profile w-full h-90">
                    <img className='w-full h-full' src="https://themewagon.github.io/venus-nextjs/images/portfolio/mars.png" alt="" />
                </div>
                <h1 className='text-3xl mt-5  font-bold text-blue-950'>Nubola Holdings </h1>
                <p>Disignation</p>
            </div>
            <div className="card w-70 mt-20 cursor-pointer  shrink-0">
                <div className="profile w-full h-90">
                    <img className='w-full h-full' src="https://themewagon.github.io/venus-nextjs/images/portfolio/roket-squred.png" alt="" />
                </div>
                <h1 className='text-3xl mt-5  font-bold text-blue-950'>Rocket Sqaured </h1>
                <p>Disignation</p>
            </div>

            <div className="card w-70 shrink-0 cursor-pointer">
                <div className="profile w-full h-90">
                    <img className='w-full h-full' src="https://themewagon.github.io/venus-nextjs/images/portfolio/humans.png" alt="" />
                </div>
                <h1 className='text-3xl mt-5 font-bold text-blue-950'>Fusion Dynamic </h1>
                <p>Disignation</p>
            </div>
            <div className="card w-70 mt-20  shrink-0   cursor-pointer ">
                <div className="profile w-full h-90">
                    <img className='w-full h-full '  src="https://themewagon.github.io/venus-nextjs/images/portfolio/roket-squred.png" alt="" />
                </div>
                <h1 className='text-3xl mt-5 font-bold text-blue-950'>Apex Strategies </h1>
                <p>Disignation</p>

                
            </div>
            {/* card close */}


        </div>
        <div className="btm text-center mt-30">

            <img className='w-90 mx-auto ' src="https://themewagon.github.io/venus-nextjs/images/testimonial/vector-smart.png" alt="" />            
            <p className='mt-20  mb-30 text-xl w-180'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.</p>
            <h1 className='text-2xl font-bold text-blue-950 '>Jonathan Diesel</h1>
            <p className='txt'>Happy Customer, Apple inc</p>

        </div>  




    </div>
  )
}

export default Portfolio