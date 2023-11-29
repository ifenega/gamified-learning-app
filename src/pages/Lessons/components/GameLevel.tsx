import React from 'react'
import { currentAvatar } from '../../../util/util'
import star from "../../../assets/dashboard/Lessons/star.svg"
import pattern from '../../../assets/components/general/pattern2.svg'

const GameLevel = () => {
  return (
    <div className='rounded-[32px] bg-[#F7F5FE] w-full py-6 px-4 grid grid-cols-[56px_auto] mt-4 relative'>
      <img src={pattern} alt='' className='absolute object-cover w-full h-full top-0 left-0' />


      <div className='w-14 h-14 bg-[rgba(107,80,184,0.08)] p-1 rounded-full'>
        <div className='rounded-full border-[2px] border-solid border-[rgba(107,80,184,0.16)] w-12 h-12 flex items-center justify-center'>
          <img src={currentAvatar()} alt="avatar" className='h-[27px]' />
        </div>
      </div>


      <div className='flex justify-between items-center gap-4 '>
        <div>
          <p className='mb-0.5 text-gray/400 tracking-[-0.21px] text-sm text-left'>Level 2</p>
          <h5 className='text-gray/700 font-medium tracking-[-0.24px] text-left'>2 Star General</h5>
        </div>


        <div className='flex gap-[3px]'>
          <img src={star} alt="star" className='w-5 h-5' />
          <img src={star} alt="star" className='w-5 h-5' />
        </div>

      </div>

    </div>
  )
}

export default GameLevel