import React from 'react'

function Nav() {
    return (
        <div>
            <div className="nav w-90% flex px-10 items-center justify-between h-20 bg-sky-800 text-white">
                <div className="profile">
                    <img src="" alt="" />
                    <h1>Venus</h1>
                </div>
                <div className="links flex gap-10">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Portfolio</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                    <a href="">Documentation</a>
                </div>
                <div className="btns flex gap-5">
                    <button className='cursor-pointer' ><i class="fa-solid fa-sun"></i></button>
                    <button className=' cursor-pointer px-5 py-2 border border-1 rounded '>Sign In</button>
                    <button className=' cursor-pointer px-5 py-2 border  rounded bg-sky-400 border-0  '>Sign Up</button>
                </div>

            </div>
        </div>
    )
}

export default Nav