import React from 'react'
import coin from "../../../../assets/dashboard/Points/coin.svg"

import close from '../../../../assets/components/general/close.svg'
import { useIonRouter } from '@ionic/react'

type Props = {
    points: any
    handleClose: () => void
    completedCount: any;
    totalCount: any

}
const ContentHeader = (props: Props) => {

    // <---------- Utility class --------->
    // <---------- useSelectors --------->
    // <---------- HOOKS ------------>
    // <---------- useStates + variables ---------->
    // <---------- Functions ---------->


    const width = (props.completedCount / props.totalCount) * 100



    return (
        <div className='p-4 pb-5 w-full'>

            <div className='flex gap-4 justify-between items-center mb-4'>
                <Points points={props.points} />
                <button
                    type='button'
                    onClick={() => { props.handleClose() }}
                >
                    <img src={close} alt='cancel' />

                </button>
            </div>


            <div className='w-full bg-gray/100 rounded-full h-4 relative '>

                <div className={`bg-[#6EF19E] h-full w-[${width}%] absolute left-0 top-0 rounded-full`}>

                </div>

            </div>

        </div>
    )
}

export default ContentHeader


const Points = (props: { points: any }) => {

    return (
        <div className='flex gap-1 items-center p-0.5 pr-1 rounded-full bg-[#D84905]/[0.04]'>
            <img src={coin} alt="" className='w-6 h-6' />
            <p className='text-sm font-medium text-[#D84905] tracking-[-0.21px]'>{props.points} pts</p>

        </div>
    )

}