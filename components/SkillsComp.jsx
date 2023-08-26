import React from 'react';
import Image from 'next/image';

const SkillsComp = ({ src, title }) => {
  return (
    <div className='p-6 shadow-xl rounded-xl md:hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto select-none'>
          <Image className='max-w-[64px]' width={64} height={64} src={src} alt={title} />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='select-none'>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillsComp;