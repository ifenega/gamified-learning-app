import React, { useState } from 'react';

// Import the necessary content type components
// import MultipleChoiceQuestion from './MultipleChoiceQuestionComponent';
// import LessonDetails from './LessonDetailsComponent';
import { IonPage, useIonRouter, useIonViewDidEnter, useIonViewWillLeave } from '@ionic/react';
import ContentHeader from './ContentHeader';
import DisclaimerModal from '../../../../components/UI/Modals/DisclaimerModal';
import { useSelector } from 'react-redux';
import LessonOutline from '../ContentItems/LessonOutline';
import LessonIntro from '../ContentItems/LessonIntro';
import LessonInfo from '../ContentItems/LessonInfo';


const LessonSelector = () => {



    const lessonData: LessonType = useSelector((state: any) => state.lesson.currentLesson)
    console.log(lessonData)

    const router = useIonRouter()

    useIonViewWillLeave(() => {
        showTabBar();
    });

    // When page enters
    useIonViewDidEnter(() => {
        hideTabBar();
    });



    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    const [currentSubPage, setSubPage] = useState("info");

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


    const contentTypes: any = {
        // MultipleChoiceQuestion: MultipleChoiceQuestion,
        // LessonDetails: LessonDetails,
        // Add other content type components as needed
    };

    const handleNext = () => {
        setSubPage("info")
        setCurrentIndex(prevIndex => prevIndex + 1);

    };

    const renderCurrentComponent = () => {
        const currentContent: ContentItemType | null = lessonData.content && lessonData.content.length > currentIndex
            ? lessonData.content[currentIndex]
            : null;

        const ContentTypeComponent = currentContent ? contentTypes[currentContent?.task?.type || currentContent?.title] || ErrorPage : ErrorPage;


        const changePage = () => {

            if (currentContent && currentContent.task) {
                setSubPage("question")
            } else {
                handleNext()
            }


        }

        return (
            <>
                {currentSubPage === "info" && <LessonInfo nextPage={changePage} data={currentContent} />}
                {currentSubPage === "question" && <ContentTypeComponent data={currentContent} disbaleNext={currentIndex === lessonData.content.length - 1} handleNext={handleNext} />}

            </>
        );
    };


    const [values, setValues] = useState({
        lessonOutline: true,
        intro: false,
        lesson: false,
    })

    const handleIntro = () => {
        setValues({
            lessonOutline: false,
            intro: true,
            lesson: false,
        })
    }
    const handleLesson = () => {
        setValues({
            lessonOutline: false,
            intro: false,
            lesson: true,
        })
    }

    const showDefaultSelector = () => (
        <>
            {values.lessonOutline && <LessonOutline img={lessonData.sections.lessonDetails.image} title={lessonData.title} topics={lessonData.sections.lessonDetails.topics} nextPage={handleIntro} />}
            {values.intro && <LessonIntro nextPage={handleLesson} />}
            {values.lesson && renderCurrentComponent()}
        </>
    )

    return (
        <IonPage className=' '>
            <div className='w-full mt-2'>

                <ContentHeader completedCount={currentIndex} totalCount={lessonData.content ? lessonData.content.length : 0} handleClose={() => setShowDisclaimer(true)} points={2} />
                {showDefaultSelector()}
                <button onClick={handleNext} disabled={currentIndex === lessonData.content.length - 1}>
                    Next
                </button>
            </div>


            {showDisclaimer &&
                <DisclaimerModal
                    isOpen={showDisclaimer}
                    bgButtonAction={() => {
                        setShowDisclaimer(false)
                    }}
                    bgButtonText='Continue lesson'
                    //should go home 
                    noBgButtonAction={() => router.goBack()}
                    noBgButtonText='Exit lesson'

                    header='Exit lesson'
                    text={<p>Are you sure you want to exit this lesson now?<br /><br />You will lose all progress when you exit now.  </p>}



                />}

        </IonPage>
    );
};

export default LessonSelector;


const ErrorPage = () => {

    return (

        <div>

            Something went wrong
        </div>
    )
}