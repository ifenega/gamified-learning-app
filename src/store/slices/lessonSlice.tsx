import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import firebase from 'firebase/app';
import 'firebase/auth';
import type { User } from 'firebase/auth';

const initialData: LessonSliceData = {
    currentLesson: null,
    isCompleted: false
}




export const lessonSlice = createSlice({
    name: "lesson",
    initialState: initialData,
    reducers: {
        setCurrentLesson: (state, action) => {
            state.currentLesson = action.payload
        },
        updateAnswerCorrect: (state, action) => {
            const { taskId, isCorrect } = action.payload;
            // Assuming the structure of your currentLesson object
            state.currentLesson = {
                ...state.currentLesson,
                content: state.currentLesson?.content.map((item: any) =>
                    item.task.id === taskId ?
                        {
                            ...item,
                            task: {
                                ...item.task,
                                isAnswerCorrect: isCorrect
                            }
                        }
                        : item
                ),
            };
        },

        //this is just to display the you have earned 2 points modal
        setCourseCompleted: (state, action) => {
            state.isCompleted = action.payload
        },
    },

})

export const lessonActions = lessonSlice.actions;
export default lessonSlice.reducer;