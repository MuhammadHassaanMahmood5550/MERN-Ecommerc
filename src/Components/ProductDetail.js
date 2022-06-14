import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addInCart, cartCalculation } from "../redux/ProductData";

const ProductDetail = () => {
    const {id} = useParams();
    let navigate = useNavigate();

    const { products }  = useSelector((state) => state.ProductData);
    const temp = products.filter((cur) => cur.id == id);
    const product = temp[0];

    const dispatch = useDispatch();

    const BackToProducts = () => {
          navigate(`/`);
    }

    const handleCart = (id) =>{
        dispatch(addInCart(id));
        dispatch(cartCalculation(id));
    }
    return ( 
        <div id="productDetail" className="container">
            <h3 className="text-center my-5">{product.title}</h3>
            <div className="row text-center align-items-center">
                <div className="col-md-6">
                  <img src={require(`../${product.img}`)} alt=""/>
                </div>
                <div className="col-md-6 text-left">
                   <h3>Model : {product.title}</h3>
                   <h3 className="font-weight-bold">MADE BY : {product.company}</h3>
                   <h4>Price : ${product.price}</h4>
                   <p>Some Info About Product :</p>
                   <p className="text-capitalize">
                       {product.info}
                   </p>

                   <button className="btn btn-outline-primary mr-3"
                   onClick={() => BackToProducts()}
                   >Back To Products</button>

                   <button className={
                       `btn btn-outline-warning 
                       ${product.inCart ? "disabled" : ""} `}
                       onClick={() => product.inCart == false && 
                        handleCart(product.id)}>
                       {product.inCart ? "In Cart" : "Add To Cart"}
                   </button>

                </div>
            </div>
        </div>
     );
}
 
export default ProductDetail;