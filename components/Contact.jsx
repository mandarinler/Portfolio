import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest text[#5651e5] '>Contact</p>
            <h2 className='py-4'>Get in Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8 '>
                {/* //left  */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full rounded-xl'>
                        <div>
                            <img className='rounded-xl lg:hover:scale-105 ease-in duration-300' src="https://media.istockphoto.com/id/666135210/photo/cropped-of-man-holding-cell-phone-at-working-place.jpg?s=612x612&w=0&k=20&c=sL6Q2I_XDN7JsifO5n2ZNR1pjS5tz8SyRLCncKoq4ug=" alt="" />
                        </div>
                        <div>
                            <h2 className='py-2'>Hajiyev Samad</h2>
                            <p>Web Developer</p>
                            <p className='py-4 pb-10'>I am available for freelance or full-time positions. Contac me and let&apos;s talk.</p>
                        </div>
                    <div>
                        <p className='uppercase pt-8'>Connect With Me</p>
                        <div className='flex items-center justify-between py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* left */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className="flex  flex-col">
                                    <label className='uppercase py-2 text-sm'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className="flex  flex-col">
                                    <label className='uppercase py-2 text-sm'>Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase py-2 text-sm'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase py-2 text-sm'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase py-2 text-sm'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows="10"/>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className=' flex justify-center py-12'>
                <Link href="/#main">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='m-auto text-[#5651e5]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact
