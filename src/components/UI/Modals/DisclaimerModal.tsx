import { IonModal } from '@ionic/react'
import React from 'react'
import warning from '../../../assets/components/UI/disclaimer.svg'
import { BorderButton, Button } from '../../Buttons/Button'

type Props = {
    header: string
    text?: any
    isOpen: boolean
    bgButtonAction: () => void
    bgButtonText: string
    bgButtonDisabled?: boolean
    bgButtonStatus?: boolean
    noBgButtonAction?: () => void
    noBgButtonText?: string
    noBgButtonDisabled?: boolean
    noBgButtonStatus?: boolean
    children?: any
}
const DisclaimerModal = (props: Props) => {

    return (
        <IonModal
            className="transparent-loader "
            isOpen={props.isOpen}

        >
            <div className='absolute h-[100vh] w-full bg-black bg-opacity-40 backdrop-blur-8  flex items-center justify-center gap-2 flex-col p-4'>


                <div className='bg-white rounded-[32px] w-full p-6 pb-12 flex flex-col gap-6'>
                    <div className='w-full'>
                        <div className='w-full flex items-center gap-2 mb-4'>
                            <img src={warning} alt="" />
                            <h5 className='text-gray/800 font-semibold tracking-[-0.3px] text-xl '>{props.header}</h5>
                        </div>

                        <p className='text-gray/700 text-sm tracking-[-0.21px] '>{props.text}{props.children}</p>
                    </div>

                    <div className='flex flex-col gap-4 '>
                        <Button
                            text={props.bgButtonText}
                            type='button'
                            action={props.bgButtonAction}
                            disabled={props.bgButtonDisabled || false}
                            status={props.bgButtonStatus || false}
                        />

                        {
                            props.noBgButtonText &&
                            <BorderButton
                                text={props.noBgButtonText}
                                type='button'
                                action={props.noBgButtonAction}
                                disabled={props.noBgButtonDisabled || false}
                                status={props.noBgButtonStatus || false}
                            />
                        }

                    </div>
                </div>
            </div>
        </IonModal>
    )
}

export default DisclaimerModal