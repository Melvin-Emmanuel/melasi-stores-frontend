import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGet } from "../../utils/axios";

interface ProductState{
    products: any[];
    selectedProduct: any | null;
    status: "idle" | "loading" | "succeeded" | "failed"
    error: string | null;
}
const initialState: ProductState = {
    products: [],
    selectedProduct: null,
    status: "idle",
    error: null,
}
//fetch all products from the server
export const fetchProducts = createAsyncThunk(
    "product/fetchProducts", async () => {
        try{
            const response = await apiGet ("/get-all-products")
            return response.data.result

        }catch(error){
            console.error("Error feteching data", error)
        }
    }
)

//thunk to fetch a single product by ID
export const fetchProductById = createAsyncThunk(
    "products/fetchProductById", async(id: number)=>{
        const response = await apiGet(`product/${id}`);
        return response.data
    }
)

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        clearSelectedProduct(state){
            state.selectedProduct = null
        }
    },
    extraReducers(builder) {
        builder
        //handle fetchProducts
        .addCase(fetchProducts.pending, (state)=>{
            state.status = "loading"
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message || "Failed to fetch product"
        })
        //handle fetchProductById
        .addCase(fetchProductById.pending, (state)=>{
            state.status = "loading"
        })
        .addCase(fetchProductById.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.selectedProduct = action.payload
        })
        .addCase(fetchProductById.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message || "Failed to fetch product"
        })
    },
})
export const {clearSelectedProduct} = productSlice.actions
export default productSlice.reducer
