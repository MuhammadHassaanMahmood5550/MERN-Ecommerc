import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addInCart, cartCalculation, storageProducts } from "../redux/ProductData";
import '../scss/product.scss';

const Products = () => {
  
    const count = useSelector((state) => state.Counter.count);

    // console.log("THE COUNT IS == ", count);


    // const {count} = useSelector((state) => state.Counter);

    console.log("THE COUNT IS == ", count);

    const { products } = useSelector((state) => state.ProductData);

    // const cart = useSelector((state) => state.ProductData.cart);
    // console.log("the cart is ====", cart);

    const dispatch = useDispatch();

    useEffect(() => {
         console.log("useeffect");
      
        if(products){
            //   window.localStorage.setItem("products", JSON.stringify(products));
            dispatch(storageProducts("yes i run bcz of useEffect"));
         }   
    },[]);
    console.log("products ===>", products);
    const handleCart = (id) =>{
        dispatch(addInCart(id));
        dispatch(cartCalculation(id));
    }

    return ( 
        <div id="Products">
            <h1 className="text-info display-3 mt-5 text-center">Our Products</h1>

           <div className="d-flex flex-wrap justify-content-center">
           {products.map((cur) => ( 
               <div key={cur.id} className="parent m-5">
                <div className="card pt-3" >
                    <Link to={`/detail${cur.id}`}>
                    <img src={require(`../${cur.img}`)} className=" img-fluid" alt="..." style={{width: '240px', height: '220px'}}/>
                    </Link>

                   <button className="btn btn-info btn-sm img-btn" 
                   onClick={() => handleCart(cur.id)}>
                       {cur.inCart ? <span>In Cart</span> 
                       : <i className="fa-solid fa-cart-arrow-down"></i>
                    }
                    </button> 
                 <div className="card-body">
                  <div className="d-flex flex-row font-weight-bold">
                      <div className="">{cur.title}</div>
                      <div className="ml-auto">{cur.price}</div>
                  </div>
                 </div>
                </div>
               </div>  
            ))}
           </div>
           

 
         
        </div>
     );
}
 
export default Products;