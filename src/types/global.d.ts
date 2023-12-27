export { };

declare global {
    type ToastType = 'error' | 'success' | 'info' | 'warning';
    type AvatarType = "5 eyed sunny" | "Fearful red" | "Fearful reed"

    // type TaskType = "MCQ_Box"
    interface SettingsSliceData {
        isDisclaimer: boolean
    }
    interface LessonSliceData {
        currentLesson: any
    }

    type TaskType = {
        id?: number;
        type: "MultipleChoiceQuestion" | null; //comeback to add any new type
        question: string;
        answer: string;
        options: string[];
        isAnswerCorrect: boolean | null;
    };

    type ContentItemType = {
        title: string;
        description: string;
        task: TaskType | null;
    };

    interface LessonType {
        title: string;
        sections: {
            lessonDetails: {
                image: string; // You may replace string with the actual type of networkImage
                topics: string[];
            };
            teacherIntroduction: {
                introduction: string;
            };
        };
        content: ContentItemType[];
    }
}


