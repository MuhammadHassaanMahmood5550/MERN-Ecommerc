// import Porducts from './Products';
// const Home = () => {
//     return ( 
//         <div id="Home">
//             <Porducts></Porducts>
//         </div>
//      );
// }
 
// export default Home;

import React from "react";
import Porducts from './Products';
class Home extends React.Component {
render() {
	return  ( 
                <div id="Home">
                    <Porducts></Porducts>
                </div>
             );
}
}

export default Home;
