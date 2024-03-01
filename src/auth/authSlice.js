import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loginOtpAsync = createAsyncThunk(
    "login",
    async (email) => {
        await fetch(process.env.REACT_APP_BACKEND_URL + "/login/otp").then(res=>)
    }
)

const authSlice = createSlice({
    initialState: {
        user: null,
        state: "idle",
    }
})