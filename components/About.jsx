import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-4 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5] '>About</p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut augue urna. Vestibulum in semper velit. Nunc metus elit, lacinia vitae pharetra eu, malesuada vel magna. Duis eget mi metus. 
                Suspendisse scelerisque scelerisque turpis. Sed vitae nulla eu odio facilisis tristique et sed quam. 
                Maecenas tincidunt feugiat nisi ac dapibus. Nam sed scelerisque quam. Donec ultricies elementum mi sit amet pellentesque. 
                Ut sit amet nibh eros. Curabitur sodales fringilla fermentum.</p>
            <p className='py-2 text-gray-600'>
                Integer commodo porttitor elit sed placerat. Aenean ornare pellentesque diam efficitur imperdiet. 
                Praesent ac est eu urna hendrerit efficitur. Praesent sit amet gravida dolor. 
                Mauris ac est id urna mattis aliquam. Ut eget ante in nibh mattis feugiat sit amet sit amet enim. Nunc nec dapibus ante, vel consequat lorem. 
                Morbi aliquam metus vitae mauris condimentum, ut tincidunt ex iaculis. Cras feugiat, erat vel bibendum scelerisque, justo.</p>
            <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 '>
            <img className='rounded-xl md:hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/photo-1618388607276-6dfb062c75a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&w=1000&q=80' alt='/'/>
        </div>
      </div>
    </div>
  )
}

export default About
