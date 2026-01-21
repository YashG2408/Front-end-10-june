import { useGSAP } from '@gsap/react';
import React from 'react'

function Blog() {
  

    return (
        <div>

            <div className="footer mt-15 flex justify-around bg-sky-600 text-white p-8">
                <div className="col w-70">
                    <div className="profile">
                        <img className="text-white" src="https://themewagon.github.io/venus-nextjs/images/logo/logo.svg" alt="" />
                        <h1 className='text-3xl fon py-6 font-bold w-60% text-left'>Ready to get started?</h1>
                        <button className='w-30 h-10 bg-blue-950 rounded'>Get Started</button>
                    </div>
                </div>
                <div className="col w-70">
                    <h3 className='text-2xl font-bold'>Support</h3>
                    <h3 className='text-2xl font-bold pt-5'>Phone</h3>
                    <p className='text-2xl'>+(690) 2560 0020</p>
                    <h3 className='text-2xl font-bold pt-5'>Email</h3>
                    <p className='text-2xl'>info@Venus.com</p>
                    <div className="icon pt-5 text-2xl">
                    <i class="fa-brands fa-facebook mx-2"></i>
                    <i class="fa-brands fa-twitter mx-2"></i>
                    <i class="fa-brands fa-linkedin mx-2"></i>
                    </div>
                </div>
                <div className="col w-70">
                    <h1 className='text-2xl font-bold'>Subscribe newsletter</h1>
                    <p className='text-2xl pt-8'>To be updated with all the latest trends and product</p>
                    <button className='w-30 h-10 bg-white text-black text-left font-bold rounded mt-8'>Email</button>
                    <button className='w-30 h-10 bg-blue-950 text-white text-center font-bold rounded-r-md mt-8'>Subscribe</button>
                </div>
            </div>

        </div>
    )
}

export default Blog;