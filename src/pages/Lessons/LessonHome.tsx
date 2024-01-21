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
import { aiLesson, arLesson, biotechnologyLesson, codingLesson, firstLesson, printingLesson, renewableEnergyLesson, roboticsLesson, smartCitiesLesson, spaceExplorationLesson, vrLesson } from './components/LessonJson';
import { AppDispatch } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { lessonActions } from '../../store/slices/lessonSlice';


const LessonHome = () => {

    // <---- Utility class ------>
    const router = useIonRouter()
    const dispatch: AppDispatch = useDispatch()
    // <---- useSelectors ------>
    const lessonDetails = useSelector((state: { lesson: LessonSliceData }) => state.lesson)

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
            name: firstLesson.title,
            icon: book1,
            lesson: firstLesson,
            disabled: false,
            completed: false,
        },
        {
            name: aiLesson.title,
            icon: book2,
            lesson: aiLesson,
            disabled: false,
            completed: false,
        },
        {
            name: arLesson.title,
            icon: book3,
            lesson: arLesson,
            disabled: false,
            completed: false,
        },
        {
            name: vrLesson.title,
            icon: book4,
            lesson: vrLesson,
            disabled: false,
            completed: false,
        },
        {
            name: codingLesson.title,
            icon: book5,
            lesson: codingLesson,
            disabled: false,
            completed: false,
        },
        {
            name: roboticsLesson.title,
            icon: book1,
            lesson: roboticsLesson,
            disabled: false,
            completed: false,
        },
        {
            name: printingLesson.title,
            icon: book1,
            lesson: printingLesson,
            disabled: false,
            completed: false,
        },
        {
            name: biotechnologyLesson.title,
            icon: book2,
            lesson: biotechnologyLesson,
            disabled: false,
            completed: false,
        },
        {
            name: smartCitiesLesson.title,
            icon: book3,
            lesson: smartCitiesLesson,
            disabled: false,
            completed: false,
        },
        {
            name: spaceExplorationLesson.title,
            icon: book3,
            lesson: spaceExplorationLesson,
            disabled: false,
            completed: false,
        },
        {
            name: renewableEnergyLesson.title,
            icon: book3,
            lesson: renewableEnergyLesson,
            disabled: false,
            completed: false,
        },

    ]

    return (
        <IonPage className='ion-padding'>
            <TabHeader
                title='Lessons'

            />
            <IonContent className=' '>

                <GameLevel />

                <div className='flex flex-wrap gap-y-5  gap-x-0 fold:gap-x-4 mt-4 justify-between overflow-scroll max-h-[calc(100vh-212px)]'>
                    {
                        lessons.map((item, index) => (
                            <button
                                key={index}
                                className='flex flex-col w-[103px] h-[135px] items-center text-center'
                                disabled={item.disabled}
                                onClick={() => {
                                    if (item.lesson) {
                                        setShowInfo(true)
                                        dispatch(lessonActions.setCurrentLesson(item.lesson))

                                        router.push('/tabs/lessons/lesson')
                                    }

                                }}
                            >
                                <div className='relative'>
                                    <img src={item.icon} alt="" className='w-[80px] small:w-[103px] small:h-[103px]' />
                                    {item.completed && <img src={tickCircle} alt="tick-circle" className='absolute bottom-1.5 right-1.5' />}
                                </div>
                                <span className='leading-4 text-gray/800 tracking-[-0.21px] font-medium text-sm'>{item.name}</span>

                            </button>
                        ))
                    }

                </div>





                <PointsModal
                    isOpen={lessonDetails.isCompleted}
                    action={() => {
                        dispatch(lessonActions.setCourseCompleted(false))
                    }}
                    text='Hurray! You’’ve earned 2 points for successfully completing this lesson. Keep up the good work.'
                />

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