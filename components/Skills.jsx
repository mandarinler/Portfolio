import React from 'react'
import html from '@/public/skills/html.png'
import css from '@/public/skills/css.png'
import javascript from '@/public/skills/javascript.png'
import github from '@/public/skills/github.png'
import reactLogo from '@/public/skills/react.png'
import nextjs from '@/public/skills/nextjs.png'
import tailwind from '@/public/skills/tailwind.png'
import firebase from '@/public/skills/firebase.png'

import SkillsComp from './SkillsComp'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4 '>What I can do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>
            <SkillsComp src={html} title='HTML' />
            <SkillsComp src={css} title='CSS' />     
            <SkillsComp src={javascript} title='JavaScript' />     
            <SkillsComp src={github} title='Github' />     
            <SkillsComp src={reactLogo} title='React' />     
            <SkillsComp src={nextjs} title='NextJs' />     
            <SkillsComp src={tailwind} title='TailWindCss' />     
            <SkillsComp src={firebase} title='FireBase' />            
            </div>
        </div>
    </div>
  )
}

export default Skills
