import { IonContent, IonPage, useIonRouter, useIonViewDidEnter, useIonViewWillLeave } from '@ionic/react'
import React, { useState } from 'react'
import TabHeader from '../../components/UI/TabHeader';
import DisclaimerModal from '../../components/UI/Modals/DisclaimerModal';
import PointsModal from '../../components/UI/Modals/PointsModal';
import GameLevel from './components/GameLevel';
import book1 from '../../assets/dashboard/Lessons/Books/book1.svg'
import book2 from '../../assets/dashboard/Lessons/Books/book2.svg'
import book3 from '../../assets/dashboard/Lessons/Books/book3.svg'
import book4 from '../../assets/dashboard/Lessons/Books/book4.svg'
import book5 from '../../assets/dashboard/Lessons/Books/book5.svg'
import tickCircle from '../../assets/dashboard/Lessons/tickCircle.svg'
import { firstLesson } from './components/LessonJson';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { lessonActions } from '../../store/slices/lessonSlice';


const LessonHome = () => {

    // <---- Utility class ------>
    const router = useIonRouter()
    const dispatch: AppDispatch = useDispatch()
    // <---- useSelectors ------>
    // <---- useStates + variables ------>
    const [showInfo, setShowInfo] = useState(false)
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

    const lessons = [
        {
            name: "Internet of things",
            icon: book1,
            lesson: firstLesson,
            disabled: false,
            completed: false,
        },
        {
            name: "Software developement",
            icon: book2,
            lesson: null,
            disabled: false,
            completed: false,
        },
        {
            name: "Internet of things",
            icon: book3,
            lesson: firstLesson,
            disabled: false,
            completed: false,
        },
        {
            name: "Internet of things",
            icon: book4,
            lesson: firstLesson,
            disabled: false,
            completed: true,
        },
        {
            name: "Internet of things",
            icon: book5,
            lesson: firstLesson,
            disabled: false,
            completed: false,
        },
        {
            name: "Internet of things",
            icon: book1,
            lesson: firstLesson,
            disabled: false,
            completed: false,
        },
    ]

    return (
        <IonPage className='ion-padding'>
            <TabHeader
                title='Lessons'
                info_action={() => {
                    setShowInfo(true)
                }}
            />
            <IonContent className=' '>

                <GameLevel />

                <div className='flex flex-wrap gap-y-5  gap-x-4 mt-4 justify-between overflow-scroll max-h-[calc(100vh-212px)]'>
                    {
                        lessons.map((item, index) => (
                            <button
                                key={index}
                                className='flex flex-col w-[103px] h-[135px] items-center text-center'
                                disabled={item.disabled}
                                onClick={() => {
                                    if (item.lesson) {
                                        const currentLesson = item.lesson
                                        dispatch(lessonActions.setCurrentLesson({ currentLesson }))
                                    }

                                }}
                            >
                                <div className='relative'>
                                    <img src={item.icon} alt="" className='w-[103px] h-[103px]' />
                                    {item.completed && <img src={tickCircle} alt="tick-circle" className='absolute bottom-1.5 right-1.5' />}
                                </div>
                                <span className='leading-4 text-gray/800 tracking-[-0.21px] font-medium text-sm'>{item.name}</span>

                            </button>
                        ))
                    }

                </div>





                <PointsModal
                    isOpen={showInfo}
                    action={() => {
                        setShowInfo(false)
                    }}
                    text='You’ll earn 2 points when you successfully complete this lesson.'
                />
            </IonContent>
        </IonPage>
    )
}

export default LessonHome