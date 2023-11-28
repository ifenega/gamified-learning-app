import { IonButton, IonContent, IonPage, useIonRouter, useIonViewDidEnter, useIonViewWillLeave } from '@ionic/react'
import React, { useState } from 'react'
import TabHeader from '../../components/UI/TabHeader';
import fearfulred from '../../assets/dashboard/Settings/avatars/fearfulred.svg'
import childrenIcon from '../../assets/dashboard/Settings/childrenIcon.svg'
import notificationIcon from '../../assets/dashboard/Settings/notificationIcon.svg'
import deleteIcon from '../../assets/dashboard/Settings/deleteIcon.svg'
import arrowRight from '../../assets/components/general/arrowRight.svg'
import DisclaimerModal from '../../components/UI/Modals/DisclaimerModal';
import { useDispatch, useSelector } from 'react-redux';
import { settingsActions } from '../../store/slices/settingsSlice';
import { AppDispatch } from '../../store/store';
import NewAvatar from './component/NewAvatar';
import { currentAvatar } from '../../util/util';



const SettingsPage = () => {

    // <---- Utility class ------>
    const dispatch: AppDispatch = useDispatch();
    const router = useIonRouter()
    // <---- useSelectors ------>
    const settingsDetails = useSelector(
        (state: { settings: SettingsSliceData }) => state.settings)

    // <---- useStates + variables ------>
    const [showDisclaimer, setShowDisclaimer] = useState(settingsDetails.isDisclaimer)
    const [showChangeAvater, setChangeAvater] = useState(false)

    // <------- HOOKS ------>
    useIonViewWillLeave(() => {
        // showTabBar();
    });

    // When page enters
    useIonViewDidEnter(() => {
        // hideTabBar();

    });


    // <---- Functions ------>

    // Unhide tab bar
    const showTabBar = (): void => {
        const tabBar = document.getElementById('app-tab-bar');
        if (tabBar !== null) {
            tabBar.style.display = 'flex';
        }
    };

    // Hide tab bar
    const hideTabBar = (): void => {
        const tabBar = document.getElementById('app-tab-bar');
        if (tabBar !== null) {
            tabBar.style.display = 'none';
        }
    };

    const settings_nav = [
        {
            title: "Children’s profile",
            icon: childrenIcon,
            action: () => {
                dispatch(settingsActions.toggleDisclaimer(false))
                router.push("/tabs/settings/childrens-profile")
            },
            disabled: false,
        },
        {
            title: "Notification preference",
            icon: notificationIcon,
            action: () => {
                dispatch(settingsActions.toggleDisclaimer(false))
                router.push("/tabs/settings/notification-preference")
            },
            disabled: false,
        },
        {
            title: "Delete account",
            icon: deleteIcon,
            action: () => {
                dispatch(settingsActions.toggleDisclaimer(false))
                router.push("/tabs/settings/delete-account")
            },
            disabled: false,
        },
    ]

    return (
        <IonPage className='ion-padding'>
            <TabHeader title='Settings' />
            <IonContent className=''>
                <div>
                    <div className='flex flex-col items-center gap-2 mb-6'>
                        <img className='flex items-center justify-center rounded-full border border-gray/100 px-[15px] py-[17px]' src={currentAvatar()} />

                        <p className='text-gray/800 text-lg font-medium tracking-[-0.27px]'>Ajiteru Dolapo</p>

                        <button
                            className='px-4 py-2 rounded-[99px] border border-solid border-gray/100 text-[#0BA5EC] font-medium text-sm tracking-[-0.21px]'
                            type='button'
                            onClick={() => {
                                setChangeAvater(true)
                            }}
                        >
                            Change avatar
                        </button>
                    </div>

                    <div className='flex flex-col gap-4'>
                        {
                            settings_nav.map((nav_item, index) => (
                                <button
                                    key={index}
                                    type='button'
                                    disabled={nav_item.disabled}
                                    className='flex gap-2 items-center'
                                    onClick={nav_item.action}
                                >
                                    <img src={nav_item.icon} className='bg-gray/50 rounded-full p-2  ' />
                                    <div className=' py-1.5 flex gap-2 justify-between items-center w-full'>
                                        <p className='text-sm text-gray/800 tracking-[-0.28px] font-medium'>{nav_item.title}</p>
                                        <img src={arrowRight} />
                                    </div>
                                </button>
                            ))
                        }
                    </div>

                </div>


                {showDisclaimer &&
                    <DisclaimerModal
                        isOpen={settingsDetails.isDisclaimer}
                        bgButtonAction={() => {
                            dispatch(settingsActions.toggleDisclaimer(false))
                        }}
                        bgButtonText='I’m a parent'
                        //should go home 
                        noBgButtonAction={() => router.push("/tabs/settings")}
                        noBgButtonText='I’m not up to 13 years old'

                        header='Disclaimer'
                        text='This part of the app is intended for guardians only. If you are under the age of 13, we kindly ask you not to visit or use this page. We are committed to providing a safe and appropriate online experience for our children. '



                    />}

                <NewAvatar
                    closeModal={() => { setChangeAvater(false) }}
                    header='New avatar'
                    modalIsOpen={showChangeAvater}
                    subheader='Select a new avatar profile'
                />
            </IonContent>
        </IonPage >
    )
}

export default SettingsPage