import { IonButton, IonContent, IonPage, useIonRouter, useIonViewDidEnter, useIonViewWillLeave } from '@ionic/react'
import React from 'react'
import TabHeader from '../../components/UI/TabHeader';
import fearfulred from '../../assets/dashboard/Settings/fearfulred.svg'
import childrenIcon from '../../assets/dashboard/Settings/childrenIcon.svg'
import notificationIcon from '../../assets/dashboard/Settings/notificationIcon.svg'
import deleteIcon from '../../assets/dashboard/Settings/deleteIcon.svg'
import arrowRight from '../../assets/components/general/arrowRight.svg'



const SettingsPage = () => {

    // <---- Utility class ------>
    const router = useIonRouter()
    // <---- useSelectors ------>
    // <---- useStates + variables ------>
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
            action: () => { console.log('check') },
            disabled: false,
        },
        {
            title: "Notification preference",
            icon: notificationIcon,
            action: () => { console.log('check') },
            disabled: false,
        },
        {
            title: "Delete account",
            icon: deleteIcon,
            action: () => { console.log('check') },
            disabled: false,
        },
    ]

    return (
        <IonPage className='ion-padding'>
            <TabHeader title='Settings' />
            <IonContent className=''>
                <div>
                    <div className='flex flex-col items-center gap-2 mb-6'>
                        <img className='flex items-center justify-center rounded-full border border-gray/100 px-[15px] py-[17px]' src={fearfulred} />

                        <p className='text-gray/800 text-lg font-medium tracking-[-0.27px]'>Ajiteru Dolapo</p>

                        <button
                            className='px-4 py-2 rounded-[99px] border border-solid border-gray/100 text-[#0BA5EC] font-medium text-sm tracking-[-0.21px]'
                            type='button'
                            onClick={() => {
                                console.log('check')
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

            </IonContent>
        </IonPage >
    )
}

export default SettingsPage