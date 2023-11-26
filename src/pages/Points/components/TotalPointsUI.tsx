import React from 'react'
import pattern from '../../../assets/components/general/pattern2.svg'
import coin from '../../../assets/dashboard/Points/coin.svg'


type Props = {
    data: any
}
const TotalPointsUI = (props: Props) => {

    const calculateTotalPoints = (data: any) => {
        return data.reduce((total: any, entry: any) => total + entry.points, 0);
    }

    return (
        <div className='bg-[#FEFAF5] rounded-[32px] w-full relative py-6 flex flex-col items-center gap-3 text-center mb-6'>
            <img src={pattern} alt='' className='absolute object-cover w-full h-full top-0 left-0' />

            <img src={coin} alt='' />
            <div className='flex flex-col items-center gap-2'>

                <p className='text-[#F67205]'><span className='text-[40px] leading-[48px] font-extrabold text-[#F67205] '>{calculateTotalPoints(props.data)}</span><span className='pr-1 text-base tracking-[-0.24px] font-base '></span>points</p>

                <p className='text-gray/700 text-sm tracking-[-0.21px]'>You’ve earned {calculateTotalPoints(props.data)} so far</p>

            </div>

        </div>
    )
}

export default TotalPointsUI