import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import pic from "../img/logo.svg";
import "../scss/navbar.scss";

const Navbar = () => {
  const { products } = useSelector((state) => state.ProductData);
  let allTotals = products.map((cur) => {
    return parseInt(cur.count);
  });
  console.log("allTotals", allTotals);
  let totalProducts = allTotals.reduce((pre, cur, index) => pre + cur, 0);
  console.log(totalProducts);
  let nee = "1.png";
  return (
    <div id="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="d-flex flex-row">
              <div className="">
                <Link to="/">
                  <img src={pic} alt="" className="mr-5 align-self-center" />
                </Link>
              </div>
              <div className="align-self-center">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <span className="font-weight-bold">Products</span>
                </Link>

              </div>
           
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-md-auto">
            <div className="align-self-center mb-2 mb-md-0 ">
              <Link to="/Transactions" style={{ textDecoration: "none", color: "white" }}>
                  <span className="font-weight-bold mr-3">H i s t o r y</span>
                </Link>
                </div>

              <Link to="/Cart" style={{textDecoration: "none"}}>
                    <button className="btn btn-outline-info btn-lg btn-block">
                      <span class="fa-stack fa-1x has-badge" data-count={totalProducts}>
                        <i class="fa fa-circle fa-stack-2x fa-inverse"></i>
                        <i class="fa fa-shopping-cart fa-stack-2x red-cart"></i>
                      </span>{" "}
                      My Cart
                    </button>
              </Link>
            
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
