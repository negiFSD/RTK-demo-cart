import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItem";

const initialState = {
cart:cartItems,
error:'',
totalProduct:0,
totalCartItems:0,
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
        cartItem.total = cartItem.price * cartItem.qty
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
        },
        calculateTotals:(state)=>{
          state.totalProduct=  state.cart.length
          let items=0;
          let amounts=0;
          state.cart.forEach(item=>{
            items += item.qty
            amounts += item.qty* item.price
          })
          state.totalCartItems = items
          state.totalAmount = amounts
        }
    }
})

export const {clearCart, increase, decrease,remove, calculateTotals}=cartSlice.actions;
export default cartSlice.reducer