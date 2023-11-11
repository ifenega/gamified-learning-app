import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import firebase from 'firebase/app';
import 'firebase/auth';
import type { User } from 'firebase/auth';

const initialData: any = {
    signIn: {
        status: "idle",
        error: null,
        data: { status: null, access_token: null, user: null },
    },
}



// Sign in
export const signIn = createAsyncThunk(
    "signIn/login",
    async (data,) => {
        try {
            // Sign in with Firebase Auth
            // const userCredential = await firebase.auth().signInWithEmailAndPassword(
            //   "example@example.com",
            //   "password"
            // );

            // You can access the user's data like this:
            // const user = userCredential.user;


            // Now, you can make an Axios request using the user's data or any other data
            // const response = await axios.get("https://api.example.com/data", {
            //   headers: {
            //     Authorization: `Bearer ${user.idToken}`, // assuming you have an idToken
            //   },
            // });

            // Handle the response as needed
            // console.log("Data from API:", response.data);
        } catch (error) {
            // dispatch(setError(error.message));
        } finally {
            // dispatch(setLoading(false));
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: initialData,
    reducers: {

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