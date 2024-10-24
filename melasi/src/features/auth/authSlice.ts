import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User{
    id: string;
    name: string;
    email: string
}

interface Authstate{
    isAuthenticated: boolean;
    user: User | null
}

const initialState: Authstate ={
    isAuthenticated: false,
    user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<{user: User; token: string}>) =>{
            state.isAuthenticated = true;
            state.user = action.payload.user
            localStorage.setItem("authToken", action.payload.token)
            localStorage.setItem("melUser", JSON.stringify(action.payload.user))
        },
        logoutSuccess: (state) =>{
            state.isAuthenticated= false
            state.user = null;
            localStorage.removeItem("authToken")
            localStorage.removeItem("melUser")
        },
        restoreSession: (state) =>{
            const token = localStorage.getItem("authToken")
            const user = JSON.parse(localStorage.getItem("melUser") || "null")
            if(token && user){
                state.isAuthenticated = true;
                state.user = user
            }
        }
    }
})
export const {loginSuccess, logoutSuccess, restoreSession} = authSlice.actions
export default authSlice.reducer
