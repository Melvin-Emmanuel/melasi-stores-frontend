import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface sidebarState {
    isOpen : true
}

const initialState: sidebarState ={
    isOpen: true
}

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen
        },
        setSidebarState: (state, action: PayloadAction<boolean>) =>{
            state.isOpen = action.payload
        }
    }
})

export const { toggleSidebar, setSidebarState } = sidebarSlice.actions;
export default sidebarSlice.reducer;