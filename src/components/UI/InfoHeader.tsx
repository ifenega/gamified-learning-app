import React from 'react'
import info from '../../assets/auth/info.svg'

type Props = {
    text: string
}
const InfoHeader = (props: Props) => {
    return (
        <div className='flex items-start gap-2'>
            <img src={info} alt='' loading='lazy' />
            <h5 className='text-gray/800 font-semibold fold:text-xl fold:leading-[30px]'>{props.text}</h5>
        </div>
    )
}

export default InfoHeader