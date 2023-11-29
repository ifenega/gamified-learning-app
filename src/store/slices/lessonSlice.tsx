import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import firebase from 'firebase/app';
import 'firebase/auth';
import type { User } from 'firebase/auth';

const initialData: LessonSliceData = {
    currentLesson: null
}




export const lessonSlice = createSlice({
    name: "lesson",
    initialState: initialData,
    reducers: {
        setCurrentLesson: (state, action) => {
            state.currentLesson = action.payload
        },
    },
    // extraReducers(builder) {
    //     builder

    //         // login
    //         .addCase(signIn.pending, (state, action) => {
    //             state.signIn.status = "loading";
    //             state.signIn.error = null;
    //         })
    //         .addCase(signIn.fulfilled, (state, action) => {
    //             if (
    //                 action.payload.message === "Success" ||
    //                 action.payload.status === "success"
    //             ) {
    //                 state.signIn.data = action.payload;
    //                 state.signIn.status = "succeeded";
    //                 state.is_auth = true;
    //             } else {
    //                 state.signIn.status = "failed";
    //                 state.signIn.error = action.payload.message;
    //             }
    //         })
    //         .addCase(signIn.rejected, (state, action) => {
    //             state.signIn.status = "failed";
    //         })
    // }
})

export const lessonActions = lessonSlice.actions;
export default lessonSlice.reducer;