import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

        } catch(e) { 
            throw new Error(e.message);
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        name: "harshit",
        user: "null",
        state: "idle",
    }
})

export const auth = authSlice.reducer;