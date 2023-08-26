import React from 'react'
import netfliks from '@/public/projects/netfliks.png'
import expenseTracker from '@/public/projects/expenseTracker.png'
import movieApp from '@/public/projects/movieApp.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'> Projects</p>
            <h2 className='py-4'>What I've built</h2>
            <div className='grid lg:grid-cols-2 gap-8'>
                <ProjectItem title='Netfliks' image={netfliks} usedtech='Next Js' projecturl='/netfliks' />
                <ProjectItem title='Expense Tracker' image={expenseTracker} usedtech='Next Js' projecturl='/expense-tracker' />
                <ProjectItem title='Movie App' image={movieApp} usedtech='Next Js' projecturl='/movie-app' />
            </div>
        </div>
    </div>
  )
}

export default Projects
