import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number
}

interface cartState{
    items: cartItem[]
}
const initialState: cartState = {
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action:PayloadAction<cartItem>) =>{
            //check if the item already exists in the cart
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if(existingItem){
                //increase quantity if the item exists
                existingItem.quantity += 1
            }else{
                //add new item to cart
                state.items.push({...action.payload, quantity: 1})
            }
        },
        removeItemFromCart: (state, action: PayloadAction<number>)=>{
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearCart: state =>{
            state.items = []
        },
        increaseQuantity: (state, action:PayloadAction<number>)=>{
            const existingItem = state.items.find(item => item.id === action.payload)
            if(existingItem){
                existingItem.quantity += 1;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>)=>{
            const existingItem = state.items.find(item => item.id === action.payload)
            if(existingItem){
                if(existingItem.quantity > 1){
                    existingItem.quantity -= 1
                }else{
                    state.items = state.items.filter(item => item.id !== action.payload)
                }
            }
        }

    }
})

export const {addItemToCart, removeItemFromCart, clearCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer
