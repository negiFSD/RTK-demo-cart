import React from "react";
import SingleItems from "./SingleItems";
// import cartItems from "../cartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cartSlice";


function FirstCart() {
 const cartItems =  useSelector((store)=>store.cart)
 const dispatch =  useDispatch()

//  const totalvalue = cartItems.cart[0].total ===undefined ?  console.log(cartItems.cart[0].price):console.log(cartItems.cart[0].total)
 
 return (
   <div className="firstcart-container">
   {/* {cartItems.cart[0].total ===undefined ?  console.log(cartItems.cart[0].price):console.log(cartItems.cart[0].total) } */}
      <div className="f-cart-items">
        {" "}
        <div className="f-titles">Cart Items</div>
        {cartItems.cart.map((item) => (
          <SingleItems
            key={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            amount={item.amount}
            qty={item.qty}
            id={item.id}
            totalDisplayValue = {item.total ===undefined? item.price:item.total}
          />
        ))}
        {cartItems.cart.length<1 && <div> No Item in the cart</div>}
      <button onClick={()=>dispatch(clearCart())}>clear Cart</button>
      </div>
      <div className="f-cart-calculation">
        <div className="f-titles">Cart counts</div>

      </div>
    </div>
  );
}

export default FirstCart;
