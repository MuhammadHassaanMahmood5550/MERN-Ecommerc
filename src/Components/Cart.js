import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addInCart, ProductTotal$count, cartCalculation, storageProducts } from "../redux/ProductData";
import { Form } from "./Form";

const Cart = () => {

  const { products } = useSelector((state) => state.ProductData);

  const  cart  = useSelector((state) => state.ProductData.cart);
  console.log("the cart is =", cart[0].subTotal);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    console.log("useeffect");
  
   if(products){
       //   window.localStorage.setItem("products", JSON.stringify(products));
       dispatch(storageProducts("yes i run bcz of useEffect"));
    }   
},[]);

  const handleQuantity = (quantity, proId) => {
    console.log('====================================');
    console.log(quantity, proId);
    console.log('====================================');
    dispatch(ProductTotal$count({quantity: quantity, proId: proId}));
    dispatch(cartCalculation());
  }

  const handleCart = (id) =>{
    dispatch(addInCart(id));
    dispatch(cartCalculation());
}

const handleNavigation = (url) => {
  navigate(url);
}

const handleClrae = (check) => {
  products.forEach((cur) => {
    cur.inCart ? dispatch(addInCart(cur.id)) : console.log(cur.inCart);
  });
  dispatch(cartCalculation());
  check == "from form.js" ?  console.log() : handleNavigation("/");
}

  return (
    <div id="Cart">
      <h1 className="text-info display-3 mt-2 text-center">Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">PRODUCTS</th>
            <th scope="col">NAME OF PRODUCTS</th>
            <th scope="col"> PRICE</th>
            <th scope="col">QUANTITY</th>
            <th scope="col">REMOVE</th>
            <th scope="col">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {products.map((cur) => (
          cur.inCart &&
            <tr>
              <th scope="row"> {
                  <img src={require(`../${cur.img}`)} alt="" 
                  style={{width: '90px', height: '90px'}} />
                //   <img src={require(`../${cur.img}`)} className=" img-fluid" alt="..." style={{width: '240px', height: '220px'}}/>
              }</th>
              <td className=""> {cur.title}</td>
              <td>${cur.price}</td>
              <td>
             <input type="number" min="0" max="10" 
             value={cur.count}
             onChange={(e) => handleQuantity(e.target.value, cur.id)}
             />
            
              </td>
              <td>
                  <i className="fa-solid fa-trash text-warning"
                  onClick={() => handleCart(cur.id)}></i>
              </td>
              <td> {cur.total}</td>
            </tr>   
          ))}
        </tbody>
      </table>

      <div className="container-fluid">
        <div className="row justify-content-md-end justify-content-center">
          <div className="col-md-3">
            <button className="btn btn-outline-danger mb-3"
            onClick={() => cart[0].subTotal === 0 ? handleNavigation('/') : handleClrae()}
            >{cart[0].subTotal === 0 ?  "<- Go Back" : "CLEAR CART"}</button>
            <h2>SUBTOTAL : {cart[0].subTotal}</h2>
            <h2>TAX : {cart[0].tax}</h2>
            <h2>Total : {cart[0].total}</h2>

            <Form total={cart[0].total} handleClrae={handleClrae}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
