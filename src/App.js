import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';
import Transactions from './Components/Transactions';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />}> 
      </Route>
      <Route path="/detail:id" element={<ProductDetail />}> 
      </Route>
      <Route path="/cart" element={<Cart />}> 
      </Route>
      <Route path="/Transactions" element={<Transactions />}> 
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
