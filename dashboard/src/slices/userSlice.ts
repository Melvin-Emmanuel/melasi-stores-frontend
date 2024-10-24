import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";

//api call to fetch user details
export const fetchUserDetails = createAsyncThunk(
    "user/fetchUserDetails",
    async (_, thunkAPI) =>{
        try{
            const response = await fetch("/api/user")
            return await response.json()
        }catch (error){
            return thunkAPI.rejectWithValue("failed to fetch user Details")
        }
    }
)

interface UserState {
    name: string;
    email: string;
    loading: boolean;
    error: string | null
}

const initialState: UserState = {
    name: "",
    email: "",
    loading: false,
    error: null,
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) =>{
            state.name = "";
            state.email = "";
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchUserDetails.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchUserDetails.fulfilled, (state, action: PayloadAction<{ name: string; email: string }>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.loading = false;
          })
          .addCase(fetchUserDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          });
      },

})

export const { logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
