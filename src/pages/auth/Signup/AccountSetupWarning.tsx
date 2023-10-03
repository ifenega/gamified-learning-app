import { IonContent, IonPage, useIonRouter, useIonViewDidEnter, useIonViewWillLeave } from '@ionic/react'
import React from 'react'
import info from '../../assets/auth/info.svg'
import InfoHeader from '../../../components/UI/InfoHeader'
import { Button, BorderButton } from '../../../components/Buttons/Button'

type Props = {
    handleSignup: () => void

}
const AccountSetupWarning = (props: Props) => {

    // <---- Utility class ------>
    const router = useIonRouter()
    // <---- useSelectors ------>
    // <---- useStates + variables ------>
    // <------- HOOKS ------>



    // <---- Functions ------>



    return (
        <IonPage className='ion-padding'>

            <IonContent className='ion-padding ion-no-border'>
                <div className=' relative   pb-10 '>

                    <div className='flex flex-col  gap-[33px] h-full justify-between  py-10 '>

                        <InfoHeader text='Are you sure you set up your child’s account later?' />
                        <p className='text-gray/700 text-xs fold:text-sm'>You’ll miss out on customized reports on your child’s progress and free offline learning material.</p>
                    </div>


                    <div className='flex flex-col gap-[14px] items-center w-full'>
                        <Button
                            text={'Okay, I’ll create an account'}
                            action={() => {
                                props.handleSignup()
                            }}
                            type='button'
                            disabled={false}

                        />

                        <BorderButton
                            text={'Yes, I’ll do it later'}
                            type='button'
                            action={() => {

                            }}
                            disabled={false}

                        />

                    </div>
                </div>

            </IonContent>
        </IonPage>
    )
}

export default AccountSetupWarning