import { IonContent, IonPage, useIonRouter, useIonViewDidEnter, useIonViewWillLeave } from '@ionic/react'
import React, { useState } from 'react'
import info from '../../assets/auth/info.svg'
import { BorderButton, Button } from '../../components/Buttons/Button'
import InfoHeader from '../../components/UI/InfoHeader'
import SignupSelector from './Signup/SignupSelector'

const Disclaimer = () => {

    // <---- Utility class ------>
    const router = useIonRouter()
    // <---- useSelectors ------>
    // <---- useStates + variables ------>
    // <------- HOOKS ------>



    const [isSignup, setSignup] = useState(false)
    // <------- HOOKS ------>
    // <------- Functions ------>
    const handleCloseSignup = () => {
        setSignup(false)
    }




    return (
        <IonPage className=''>

            <IonContent className='ion-padding ion-no-border'>
                <div className='pt-[73px] relative   pb-10 '>

                    <div className='flex flex-col  gap-[33px] flex-grow h-[calc(100vh-165px)] overflow-scroll py-10 '>

                        <InfoHeader text='Disclaimer' />
                        <p className='text-gray/700 text-xs fold:text-sm'>Due to a legal restriction, any person under the age of 13 cannot create an account. Alternatively you can explore the application without creating account. If you’re below 13 years of age inform your guardian to create an account for you. We are committed to providing a safe and appropriate online experience for children. </p>
                    </div>


                    <div className='flex flex-col gap-[14px] items-center absolute bottom-0 w-full py-4 bg-white'>
                        <Button
                            text={'I’m older than 13'}
                            action={() => {
                                setSignup(true)
                            }}
                            type='button'
                            disabled={false}

                        />

                        <BorderButton
                            text={'Set up account later'}
                            type='button'
                            action={() => {
                                router.goBack()
                            }}
                            disabled={false}

                        />

                    </div>
                </div>

            </IonContent>

            <SignupSelector
                closeModal={handleCloseSignup}
                modalIsOpen={isSignup}
            />
        </IonPage>
    )
}

export default Disclaimer