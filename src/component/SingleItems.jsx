import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { increase, decrease, remove } from "../features/cartSlice";
import { useDispatch } from "react-redux";

function SingleItems({title,color, img,qty, id, totalDisplayValue}) {
const dispatch =  useDispatch()
  return (
    <div className="s-container">
      <img
        alt="sdf"
        src={img}
      ></img>
      <span className="s-values"><p>{title}</p> </span>
      

      <span className="s-values"><p>{color}</p> </span>


      <span className="s-values">  <div>
        {qty}
        <div>
        <span className="s-minus">
            <AiFillMinusCircle fontSize="21px" onClick={()=>dispatch(decrease(id))} />
          </span>
          <span className="s-plus">
            <IoIosAddCircle  fontSize="22px" onClick={()=>dispatch(increase(id))}/>
          </span>
          
        </div>
      </div>
      </span>
     
    

      <span className="s-values"> 
      <p>Rs {totalDisplayValue.toFixed(2)}</p>
      </span>
      
      <span className="s-cancel">
        <MdCancel fontSize="22px" onClick={()=>dispatch(remove(id))} />
      </span>
    </div>
  );
}
// color="#868483"
export default SingleItems;
