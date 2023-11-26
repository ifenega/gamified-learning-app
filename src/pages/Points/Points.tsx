import { IonContent, IonPage, useIonRouter, useIonViewDidEnter, useIonViewWillLeave } from '@ionic/react'
import React, { useState } from 'react'
import TabHeader from '../../components/UI/TabHeader';
import stars from '../../assets/dashboard/Points/stars.svg'
import pattern from '../../assets/components/general/pattern.svg'
import TotalPointsUI from './components/TotalPointsUI';
import coin from '../../assets/components/general/coin.svg'
import PointsInfo from './components/PointsInfo';

const Points = () => {

    // <---- Utility class ------>
    const router = useIonRouter()
    // <---- useSelectors ------>
    // <---- useStates + variables ------>
    const [showInfo, setShowInfo] = useState(false)

    const points_data = [
        {
            text: "Completed the Math Adventure Quest",
            time: "12/03/2023",
            points: 6,
        },
        {
            text: "Discovered the Science Galaxy Explorer",
            time: "15/03/2023",
            points: 4,
        },
        {
            text: "Unlocked the Vocabulary Kingdom",
            time: "18/03/2023",
            points: 8,
        },
        {
            text: "Helped a virtual friend in Coding Town",
            time: "20/03/2023",
            points: 2,
        },
        {
            text: "Participated in the Spellathon Challenge",
            time: "22/03/2023",
            points: 6,
        },
        {
            text: "Built a Digital Robot in RoboCrafters",
            time: "25/03/2023",
            points: 8,
        },
        {
            text: "Published a story in the Creative Writing Cove",
            time: "28/03/2023",
            points: 2,
        },
        {
            text: "Explored the wonders of Geography World",
            time: "30/03/2023",
            points: 4,
        },
        {
            text: "Collaborated on an Animal Safari Adventure",
            time: "02/04/2023",
            points: 6,
        },
        {
            text: "Achieved the Super Explorer Badge",
            time: "05/04/2023",
            points: 8,
        },
    ];
    // <------- HOOKS ------>
    useIonViewWillLeave(() => {

    });

    // When page enters
    useIonViewDidEnter(() => {

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

    return (
        <IonPage className='ion-padding'>
            <TabHeader
                title='My points'
                info_action={() => {
                    setShowInfo(true)
                }}
            />
            <IonContent >
                {points_data.length === 0 ? <div className='h-[calc(100vh-127px)] flex items-center justify-center'>
                    <div className='bg-gray/50 rounded-[32px] w-full relative py-12'>
                        <img src={pattern} alt='' className='absolute object-cover w-full h-full top-0 left-0' />
                        <div className='flex flex-col items-center gap-4'>
                            <img src={stars} alt="" />

                            <div className='text-center flex flex-col gap-1 items-center'>
                                <p className='text-gray/700 tracking-[-0.24px] font-medium'>Nothing to see here!</p>
                                <p className='text-gray/500 tracking-[-0.21px] text-sm'>You have haven’t earned any point yet.</p>
                            </div>
                        </div>

                    </div>
                </div> :
                    <div className='mt-4'>
                        <TotalPointsUI data={points_data} />
                        <div
                            className='flex flex-col gap-3 w-full'

                        >
                            {
                                points_data.map((item, index) => (
                                    <div
                                        key={index}
                                        className='text-left p-3 border border-solid border-gray/100 w-full rounded-[16px]'>
                                        <div className='flex items-center justify-between gap-2 mt-1'>
                                            <h6 className='text-gray/700 text-sm tracking-[-0.1px] font-medium'>{item.text}</h6>

                                            <div className='px-2 py-1.5 gap-1 flex items-center bg-[#FEF6EE] rounded-[99px] min-w-[90px]'>
                                                <img src={coin} alt="" />

                                                <p className='text-gray/700 text-sm tracking-[-0.21px]'>{item.points} points</p>
                                            </div>
                                        </div>
                                        <p className='text-gray/400 text-xs tracking-[0.18px]'>{item.time}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }


                <PointsInfo
                    breakpoint={0.7}
                    closeModal={() => setShowInfo(false)}
                    modalIsOpen={showInfo}
                />

            </IonContent>
        </IonPage>
    )
}

export default Points