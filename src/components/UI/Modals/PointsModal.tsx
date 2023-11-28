import { IonModal } from '@ionic/react'
import React from 'react'
import { BorderButton, Button } from '../../Buttons/Button'
import coin from "../../../assets/dashboard/Points/coin.svg"
import pattern from '../../../assets/components/general/pattern2.svg'
import DisclaimerModal from './DisclaimerModal'


type Props = {
    header: string
    text: string
    isOpen: boolean
    action: () => void
    buttonText?: string
    buttonDisabled?: boolean
    buttonStatus?: boolean

}
const PointsModal = (props: Props) => {

    return (
        <IonModal
            className="transparent-loader "
            isOpen={props.isOpen}

        >
            <div className='absolute h-[100vh] w-full bg-black bg-opacity-40 backdrop-blur-8  flex items-center justify-center gap-2 flex-col p-4'>

                <div className='rounded-[32px] '>
                    <div className='pt-4 pb-2 flex flex-col items-center justify-center bg-[#FEFAF5] overflow-hidden'>
                        <img src={pattern} alt='' className='absolute object-cover w-full h-full top-0 left-0' />
                        <img src={coin} alt="" className='w-[64px] h-[64px]' />
                        <h5 className='text-[#D84905] text-xl font-semibold tracking-[-0.3px]'>{props.header ? props.header : "2 points"}</h5>
                    </div>
                    <div className='bg-white  w-full p-6 pb-12 flex flex-col gap-6'>
                        <p className='text-gray/700 text-sm tracking-[-0.21px]'>{props.text}</p>

                        <div className='flex flex-col gap-4 '>
                            <Button
                                text={props.buttonText ? props.buttonText : "Got it"}
                                type='button'
                                action={props.action}
                                disabled={props.buttonDisabled || false}
                                status={props.buttonStatus || false}
                            />

                        </div>
                    </div>
                </div>


            </div>
            {/* <DisclaimerModal
                isOpen={false}
                header='Exit lesson'
                bgButtonText='Continue lesson'
                bgButtonAction={() => { }}
                noBgButtonText='Exit lesson'
                noBgButtonAction={() => { }}

            >
                <>
                    <p>Are you sure you want to exit this lesson now? </p>
                    <br />
                    <p>You will lose all progress when you exit now.</p>
                </>
            </DisclaimerModal> */}
        </IonModal >
    )
}

export default PointsModal

