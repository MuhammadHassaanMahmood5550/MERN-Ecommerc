import { useEffect, useState } from "react";
//axios allow to easily send api request
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearOrder } from "../redux/ProductData";

function Transactions() {
  const [listOfUser, setListOfUser] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [userName, setUserName] = useState("");

  const [newName, setNewName] = useState("");

  const [search, setSearch] = useState();

  const [code, setCode] = useState();

  const [loading, setLoading] = useState(true);

  const MainName = useSelector((state) => state.ProductData.MainName);
  console.log("the cart is =", MainName);
  const MainAddress = useSelector((state) => state.ProductData.MainAddress);
  console.log("the cart is =", MainAddress);
  const MainTotal = useSelector((state) => state.ProductData.MainTotal);
  console.log("the cart is =", MainTotal);
  //createUser();

  
  const dispatch = useDispatch();

  useEffect(() => {
    //as it will return proxise so .then
    if (MainAddress) {
      createUser();
     
      clearOrder();
    }

    Axios.get("https://shop-commerce.herokuapp.com/getUsers").then((response) => {
      setListOfUser(response.data.reverse());
      setLoading(false);
    });
  }, []);

  const createUser = () => {
    Axios.post("https://shop-commerce.herokuapp.com/createUser", {
      name: MainName,
      age: MainTotal,
      username: MainAddress,
    }).then((response) => {
      setListOfUser([
        { name: MainName, age: MainTotal, username: MainAddress },
        ...listOfUser,
      ]);
    });
  };

  const handleUpdate = (id) => {
    // put = to update
    Axios.put("https://shop-commerce.herokuapp.com/updateUser", { id: id, newName: newName });
    const temp = listOfUser.filter((cur) => cur._id === id);
    console.log(temp[0]);
    const updated = { ...temp[0], username: newName };
    const final = listOfUser.map((cur) => {
      if (cur._id === id) {
        return updated;
      } else {
        return cur;
      }
    });
    console.log(final);
    setListOfUser(final);
  };

  const handleDelete = (id) => {
    Axios.delete(`https://shop-commerce.herokuapp.com/deleteUser/${id}`);
    const user = listOfUser.filter((cur) => cur._id !== id);
    console.log("after delete", user);
    setListOfUser(user);
  };

  const handleSearch = () => {
    if (search) {
      console.log("the search is =====>>>", search);
      Axios.get(`https://shop-commerce.herokuapp.com/getUser/${search}`).then((response) => {
        console.log("====================================");
        console.log("thTransactions.js responce", response.data);
        console.log("====================================");
        setListOfUser(response.data);
      });
      // .then((response) => {
      // // setListOfUser(response.data);
      // console.log("handleSearch response.data ====> ",  response.data);
      // });
    }
  };
  return (
    <div className="App">
      <h1 className="text-info display-3 mt-5 text-center">SHOPPING HISTORY</h1>
      <div className="text-center my-2" style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="search by name..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      <div className="container-fluid">
      {loading ? <h4>Loading...</h4> : "" }
      </div>
      
      <table class="table table-striped">
        <tbody>
        
          {listOfUser.map((cur) => (
            <tr>
              <td>
                <div className="users container-fluid">
                  <h1>Name: {cur.name}</h1>
                  <h1>Amount: {cur.age}</h1>
                  <h1>Address/Products: {cur.username}</h1>
                  {code == 7777 ? 
                  <div className="">
                  <input
                    type="text"
                    placeholder="new address..."
                    onChange={(e) => setNewName(e.target.value)}
                  />
              <button onClick={() => handleUpdate(cur._id)}>update</button>
                  <button onClick={() => handleDelete(cur._id)}>Delete</button>
              </div> : ""}

                  {code == 7777 ? (
                    ""
                  ) : (
                    <input
                      type="text"
                      placeholder="Enter code to manage.."
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  )}
                  
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div className="">
        <input type="text" placeholder='name' 
        onChange={(e) => setName(e.target.value)}/>
        <input type="number" placeholder='age' 
        onChange={(e) => setAge(e.target.value)}/>
        <input type="text" placeholder='username' 
        onChange={(e) => setUserName(e.target.value)}/>
        <button onClick={() => createUser()}>Create User</button>
      </div> */}
    </div>
  );
}

export default Transactions;
