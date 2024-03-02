import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { redirect, useNavigate } from "react-router-dom";
import { browserHistory } from "react-router";
// const loginOtpAsync = createAsyncThunk(
//     "login",
//     async (email) => {
//         await fetch(process.env.REACT_APP_BACKEND_URL + "/login/otp").then(res=>())
//     }
// )


export const signupWithOtpAsync = createAsyncThunk(
    "signup",
    async (data) => {
        try {
            const res = await fetch(process.env.REACT_APP_BACKEND_URL + "register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)

            })
            if (!res.ok) {
                const r = await res.json();
                throw new Error(r.error);
            }
            return await res.json();

        } catch (e) {
            throw new Error(e.message);
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        name: "harshit",
        user: "null",
        registered: false,
        state: "idle",
    },
    extraReducers: builder => {
        builder.addCase(signupWithOtpAsync.pending, (state, action) => {
            state.state = "loading";
        })
        builder.addCase(signupWithOtpAsync.fulfilled, (state, action) => {

            state.state = "idle";
            state.user = action.payload.user;
            state.registered = true;
        })
        builder.addCase(signupWithOtpAsync.rejected, (state, action) => {
            state.state = "idle";
            state.user = "null";
        })
    }
})

export const auth = authSlice.reducer;