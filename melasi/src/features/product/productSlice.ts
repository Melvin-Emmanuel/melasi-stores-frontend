import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGet, apiPost } from "../../utils/axios";

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

//create a new product
export const createProduct = createAsyncThunk(
    "products/createProduct", async(productData:any) =>{
        try{
            const response = await apiPost("/create-product", productData);
            return response.data
        }catch(error){
            console.error("Error creating product", error)
        }
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
        // handle createProduct
        builder
        .addCase(createProduct.pending, (state)=>{
            state.status = "loading"
        })
        .addCase(createProduct.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.products.push(action.payload)
        })
        .addCase(createProduct.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message || "Failed to create product"
        })
    },
})
export const {clearSelectedProduct} = productSlice.actions
export default productSlice.reducer
