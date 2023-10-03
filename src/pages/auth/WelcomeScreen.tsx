import { IonContent, IonPage, useIonRouter } from '@ionic/react'
import React, { useState } from 'react'
import welcomeScreenImg from '../../assets/auth/welcomeScreenImg.png'
import { Button, TextButton } from '../../components/Buttons/Button'
import SigninSelector from './Signin/SigninSelector'

const WelcomeScreen = () => {

    // <---- Utility class ------>
    const router = useIonRouter()

    // <---- useStates + variables ------>
    const [isSignin, setSignin] = useState(false)
    // <------- HOOKS ------>
    // <------- Functions ------>
    const handleCloseSignin = () => {
        setSignin(false)
    }


    return (
        <IonPage >

            <IonContent className='ion-padding ion-no-border'>

                <div className='pt-[73px] relative   pb-10 '>
                    <div className='flex flex-col items-center gap-[33px] flex-grow h-[calc(100vh-146px)] overflow-scroll pb-10'>
                        <img src={welcomeScreenImg} alt="" loading='lazy' />
                        <div className='flex flex-col items-center gap-1 text-center'>
                            <h4 className='text-gray/800 font-semibold fold:leading-[38px] fold:text-[32px] text-xl'>abc Kiddies</h4>
                            <p className='text-gray/700 text-xs fold:text-base'>A fun way to learn modern terminologies</p>

                        </div>
                    </div>


                    <div className='flex flex-col gap-[14px] items-center absolute bottom-0 w-full py-4 bg-white'>
                        <Button
                            text={'Create an account'}
                            action={() => {
                                router.push('/disclaimer')
                            }}
                            type='button'
                            disabled={false}

                        />

                        <TextButton
                            text={'Have an account? Sign in'}
                            type='button'
                            action={() => {
                                setSignin(true)
                            }}
                            disabled={false}

                        />

                    </div>
                </div>

            </IonContent>

            <SigninSelector
                closeModal={handleCloseSignin}
                modalIsOpen={isSignin}
            />
        </IonPage>
    )
}

export default WelcomeScreen