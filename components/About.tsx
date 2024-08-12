import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div id='about' >
         <div className="mt-24">
          <div className="md:flex justify-between">
            <div className="md:w-1/2">
              <h1 className="text-black font-bold text-3xl">Hi, I&apos;m Dr. Kevin</h1>
              <p className="text-gray-500 text-lg ">
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Maecenas faucibus mollis interdum. Donec ullamcorper
                nulla non metus auctor fringilla.
              </p>
              <p className="text-gray-500 text-lg mt-1">
                YInteger posuere erat a ante venenatis dapibus posuere velit
                aliquet. Maecenas faucibus mollis interdum. contact me
              </p>
            </div>
            <div className="flex justify-center md:w-1/2 md:ml-36">
              <div className="shadow-2xl p-28 rounded-full flex flex-col items-center justify-center w-64 h-64 mx-auto">
                <div className="flex flex-col items-center">
                  <div>
                    <span className="text-7xl font-bold text-blue-500">12</span>
                    <span className="text-xl text-gray-500">Years</span>
                  </div>
                  <div className="text-gray-500">of experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:flex justify-between mt-24'>
        <div className='md:w-1/2'><Image width={1000} src={"/images/footer/f2.jpg"} alt='' height={100} ></Image></div>
            <div className='md:w-1/2'><Image width={1000} src={"/images/footer/f1.jpg"} alt='' height={100} ></Image></div>
            
            
        </div>
    </div>
  )
}

export default About