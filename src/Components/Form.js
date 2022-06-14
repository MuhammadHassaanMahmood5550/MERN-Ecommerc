import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../redux/ProductData";

export const Form = ({total, handleClrae}) => {
    const [formNmae, setFormName] = useState();
    const [formAddress, setFormAddress] = useState();

    const MainName  = useSelector((state) => state.ProductData.MainName);
    const MainAddress  = useSelector((state) => state.ProductData.MainAddress);

    const dispatch = useDispatch();

    let navigate = useNavigate();



    const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(placeOrder({formNmae: formNmae, formAddress: formAddress, total: total}));
       navigate('/Transactions');
       handleClrae("from form.js");
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Name"
          value={formNmae} 
          onChange={(e) => setFormName(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Address" 
            value={formAddress} 
            onChange={(e) => setFormAddress(e.target.value)}/>
        </div>
        
        <button
          //type={formNmae && formAddress ? "submit" : "reset"}
          className={
            `btn btn-outline-warning mb-5
            ${formNmae && formAddress ? "" : "disabled"} `}
          // onClick={() =>  handleClrae("from form.js")}
        >
          PLACE ORDER
        </button> 

      </form>
    </div>
  );
};
