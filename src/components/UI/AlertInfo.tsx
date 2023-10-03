import React from 'react'
import bulb from '../../assets/components/UI/bulb.svg'
import success from '../../assets/components/UI/success.svg'
import warning from '../../assets/components/UI/warning.svg'
import close from '../../assets/components/general/close.svg'


type Props = {
    children?: React.ReactNode;
    text?: string
    type?: ToastType
}

const AlertInfo = (props: Props) => {

    const toastBG = `${props.type === 'error' ? 'bg-[#FDEBEB]' : props.type === 'success' ? 'bg-[#EBFDED]' : 'bg-[#EBF7FD]'}`;
    const icon = props.type === 'error' ? warning : props.type === 'success' ? success : bulb;

    return (
        <div className={`py-2.5 px-4 flex items-start gap-2.5 rounded-lg ${toastBG} text-[#475467] text-xs fold:text-sm fold:leading-5 text-left`}>
            <img src={icon} alt='' />
            <p>{props.children
                ? props.children
                : props.text}</p>
        </div>
    )
}

export default AlertInfo