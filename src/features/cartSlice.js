import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItem";

const initialState = {
cart:cartItems,
error:'',
amount:0,
totalAmount: 0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart: (state)=>{
            state.cart= []
        },
        increase:(state, action)=>{
            const cartItem= state.cart.find((item)=>item.id===action.payload)
            // console.log(JSON.parse(JSON.stringify(cartItem)))
         cartItem.qty = cartItem.qty + 1
        //  cartItem.price = cartItem.price * cartItem.qty
        cartItem.total = cartItem.price * cartItem.qty
        // console.log(JSON.parse(JSON.stringify(cartItem)))
        },
        decrease:(state, action)=>{
            const cartItem = state.cart.find((item)=>item.id===action.payload)
            if(cartItem.qty===1){
                state.cart= state.cart.filter((item)=>item.id !== action.payload)
                 }
                 else
            cartItem.qty = cartItem.qty -1
            cartItem.total = cartItem.qty*cartItem.price
        },
        remove:(state, action)=>{
           state.cart =  state.cart.filter((item)=>item.id!==action.payload)
        }
    }
})

export const {clearCart, increase, decrease,remove}=cartSlice.actions;
export default cartSlice.reducer