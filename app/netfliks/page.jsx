import Image from 'next/image'
import React from 'react'
import netfliks from '@/public/projects/netfliks.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/80 z-10'/>
          <Image className=' absolute z-1' layout='fill' objectFit='cover' src={netfliks}/>
          <div className='absolute text-white z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h2 className='py-2'>Netfliks</h2>
            <h3>Next Js / TailwindCss</h3>
          </div>
      </div>
      <div className='max-w-[1240px] mx-auto grid p-2 md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4 '>
          <p>Project </p>
          <h2>Overview</h2>
          <p>This app built using Next Js. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut augue urna. Vestibulum in semper velit. Nunc metus elit, lacinia vitae pharetra eu, malesuada vel magna. Duis eget mi metus. 
            Suspendisse scelerisque scelerisque turpis. Sed vitae nulla eu odio facilisis tristique et sed quam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut augue urna. Vestibulum in semper velit. Nunc metus elit, lacinia vitae pharetra eu, malesuada vel magna. Duis eget mi metus. 
            Suspendisse scelerisque scelerisque turpis. Sed vitae nulla eu odio facilisis tristique et sed quam. 
            Maecenas tincidunt feugiat nisi ac dapibus. Nam sed scelerisque quam. Donec ultricies elementum mi sit amet pellentesque.. </p>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            <button className='px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 '>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React Js</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Next Js</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Tailwind</p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className='underline cursor-pointer transition-all underline-offset-2 hover:underline-offset-4'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default page
