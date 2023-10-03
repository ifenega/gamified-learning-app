import React from 'react'
import resetImg from "../../../../assets/auth/resetPasswordSuccessIcon.png"
import { Button } from '../../../../components/Buttons/Button'

type Props = {
    handleSignin: () => void
}
const ResetSuccessful = (props: Props) => {



    return (
        <div className='  pb-10 '>

            <div className='flex flex-col mb-10  items-center'>
                <img src={resetImg} alt="" loading='lazy' />
                <div className='flex flex-col items-center gap-1 text-center'>
                    <h4 className='text-gray/800 font-semibold  fold:text-xl text-lg'>Reset successful</h4>
                    <p className='text-gray/700 text-xs fold:text-base max-w-[300px] text-center'>Your account password has been successfully update</p>

                </div>

            </div>



            <Button
                text={'Proceed to login'}
                action={() => {
                    props.handleSignin()
                }}
                type='button'
                disabled={false}

            />




        </div>
    )
}

export default ResetSuccessful
