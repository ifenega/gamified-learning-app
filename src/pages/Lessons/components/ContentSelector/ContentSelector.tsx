import React, { useState } from "react";

// Import the necessary content type components
// import MultipleChoiceQuestion from './MultipleChoiceQuestionComponent';
// import LessonDetails from './LessonDetailsComponent';
import {
  IonPage,
  useIonRouter,
  useIonViewDidEnter,
  useIonViewWillLeave,
} from "@ionic/react";
import ContentHeader from "./ContentHeader";
import DisclaimerModal from "../../../../components/UI/Modals/DisclaimerModal";
import { useDispatch, useSelector } from "react-redux";
import LessonOutline from "../ContentItems/LessonOutline";
import LessonIntro from "../ContentItems/LessonIntro";
import LessonInfo from "../ContentItems/LessonInfo";
import MCQ from "../ContentItems/QuestionTypes/MCQ";
import { lessonActions } from "../../../../store/slices/lessonSlice";

const LessonSelector = () => {
  const lessonData: LessonType = useSelector(
    (state: any) => state.lesson.currentLesson
  );
  console.log(lessonData);

  const router = useIonRouter();
  const dispatch = useDispatch();

  useIonViewWillLeave(() => {
    showTabBar();
  });

  // When page enters
  useIonViewDidEnter(() => {
    hideTabBar();
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCorrectionIndex, setCurrentCorrectionIndex] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showCorrectionDisclaimer, setShowCorrectionDisclaimer] =
    useState(false);
  const [currentSubPage, setSubPage] = useState("info");
  const [correctionData, setCorrectionData] = useState<any>();

  // <---- Functions ------>

  // Unhide tab bar
  const showTabBar = (): void => {
    const tabBar = document.getElementById("app-tab-bar");
    if (tabBar !== null) {
      tabBar.style.display = "flex";
    }
  };

  // Hide tab bar
  const hideTabBar = (): void => {
    const tabBar = document.getElementById("app-tab-bar");
    if (tabBar !== null) {
      tabBar.style.display = "none";
    }
  };

  const contentTypes: any = {
    MultipleChoiceQuestion: MCQ,
    // LessonDetails: LessonDetails,
    // Add other content type components as needed
  };

  const handleCompleted = () => {
    const temp = lessonData.content.filter(
      (item) => !item.task?.isAnswerCorrect && item.task?.type
    );
    setCorrectionData(temp);

    if (temp.length > 0) {
      setShowCorrectionDisclaimer(true);
      handleCorrection();
    } else {
      console.log("hanldCompleted");

      dispatch(lessonActions.setCourseCompleted(true));
      router.goBack();
    }
  };

  const handleNext = () => {
    //to first set the page state to the info page
    setSubPage("info");
    console.log(currentIndex);
    //to move to the next task
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  const handleCorrectionIndex = () => {
    const temp = lessonData.content.filter(
      (item) => !item.task?.isAnswerCorrect && item.task?.type
    );
    setCorrectionData(temp);

    if (temp.length === 0) {
        console.log('done')
      dispatch(lessonActions.setCourseCompleted(true));
      router.goBack();
    } else {
      //to first set the page state to the info page
      setSubPage("info");
      console.log(currentIndex);
      //to move to the next task
      setCurrentCorrectionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const renderCurrentComponent = () => {
    const currentContent: ContentItemType | null =
      lessonData.content && lessonData.content.length > currentIndex
        ? lessonData.content[currentIndex]
        : null;

    const ContentTypeComponent = currentContent
      ? contentTypes[currentContent?.task?.type || currentContent?.title] ||
        ErrorPage
      : ErrorPage;

    const changePage = () => {
      if (currentContent && currentContent.task && currentContent.task.type) {
        setSubPage("question");
      } else {
        handleNext();
      }
    };

    return (
      <>
        {currentSubPage === "info" && (
          <LessonInfo nextPage={changePage} data={currentContent} />
        )}
        {currentSubPage === "question" && (
          <ContentTypeComponent
            data={currentContent}
            disbaleNext={currentIndex === lessonData.content.length - 1}
            handleNext={handleNext}
            handleCompleted={handleCompleted}
          />
        )}
      </>
    );
  };

  const renderCorrection = () => {
    console.log("check");
    console.log(correctionData);
    console.log(currentCorrectionIndex);
    const currentContent: ContentItemType | null =
      correctionData && correctionData.length > 0 ? correctionData[0] : null;
    console.log(currentContent);
    const ContentTypeComponent = currentContent
      ? contentTypes[currentContent?.task?.type || currentContent?.title] ||
        ErrorPage
      : ErrorPage;
    if (currentContent === null) {
      dispatch(lessonActions.setCourseCompleted(true));
      router.goBack();
    }
    return (
      <ContentTypeComponent
        data={currentContent}
        disbaleNext={correctionData.length === 0}
        handleNext={handleCorrectionIndex}
        handleCompleted={handleCompleted}
      />
    );
  };

  const [values, setValues] = useState({
    lessonOutline: true,
    intro: false,
    lesson: false,
    correction: false,
  });

  const handleIntro = () => {
    setValues({
      lessonOutline: false,
      intro: true,
      lesson: false,
      correction: false,
    });
  };
  const handleLesson = () => {
    setValues({
      lessonOutline: false,
      intro: false,
      correction: false,
      lesson: true,
    });
  };
  const handleCorrection = () => {
    setValues({
      lessonOutline: false,
      intro: false,
      correction: true,
      lesson: false,
    });
  };

  console.log(values);
  const showDefaultSelector = () => (
    <>
      {values.lessonOutline && (
        <LessonOutline
          img={lessonData.sections.lessonDetails.image}
          title={lessonData.title}
          topics={lessonData.sections.lessonDetails.topics}
          nextPage={handleIntro}
        />
      )}
      {values.intro && <LessonIntro nextPage={handleLesson} />}
      {values.lesson && renderCurrentComponent()}
      {values.correction && renderCorrection()}
    </>
  );

  return (
    <IonPage className=" ">
      <div className="w-full mt-2">
        <ContentHeader
          completedCount={currentIndex}
          totalCount={lessonData.content ? lessonData.content.length : 0}
          handleClose={() => setShowDisclaimer(true)}
          points={2}
        />
        {showDefaultSelector()}
        <button
          onClick={handleNext}
          disabled={currentIndex === lessonData.content.length - 1}
        >
          Next
        </button>
      </div>

      {showCorrectionDisclaimer && (
        <DisclaimerModal
          isOpen={showCorrectionDisclaimer}
          bgButtonAction={() => {
            setShowCorrectionDisclaimer(false);
          }}
          bgButtonText="Okay"
          header="You got some quizzes
                    wrong"
          text={
            <p>You got some quiz questions wrong, kindly complete them now.</p>
          }
        />
      )}

      {showDisclaimer && (
        <DisclaimerModal
          isOpen={showDisclaimer}
          bgButtonAction={() => {
            setShowDisclaimer(false);
          }}
          bgButtonText="Continue lesson"
          //should go home
          noBgButtonAction={() => router.goBack()}
          noBgButtonText="Exit lesson"
          header="Exit lesson"
          text={
            <p>
              Are you sure you want to exit this lesson now?
              <br />
              <br />
              You will lose all progress when you exit now.{" "}
            </p>
          }
        />
      )}
    </IonPage>
  );
};

export default LessonSelector;

const ErrorPage = () => {
  return <div>Something went wrong</div>;
};
