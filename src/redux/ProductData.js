import { createSlice } from "@reduxjs/toolkit";

// const initialState = {

//   // cart: [
//   //   {
//   //     id: 1,
//   //     title: "Google Pixel - Black",
//   //     img: "img/product-1.png",
//   //     price: 10,

//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Google Pixel - Black",
//   //     img: "img/product-1.png",
//   //     price: 10000,

//   //   }
//   // ],

//   products: [
//     {
//         id: 1,
//         title: "Google Pixel - Black",
//         img: "img/product-1.png",
//         price: 10,
//         company: "GOOGLE",
//         info:
//           "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//         inCart: true,
//         count: 0,
//         total: 0
//       },
//       {
//         id: 2,
//         title: "Samsung S7",
//         img: "img/product-2.png",
//         price: 16,
//         company: "SAMSUNG",
//         info:
//           "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//         inCart: false,
//         count: 0,
//         total: 0
//       },
//       {
//         id: 3,
//         title: "HTC 10 - Black",
//         img: "img/product-3.png",
//         price: 8,
//         company: "htc",
//         info:
//           "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//         inCart: false,
//         count: 0,
//         total: 0
//       },
//       {
//         id: 4,
//         title: "HTC 10 - White",
//         img: "img/product-4.png",
//         price: 18,
//         company: "htc",
//         info:
//           "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//         inCart: false,
//         count: 0,
//         total: 0
//       },
//       {
//         id: 5,
//         title: "HTC Desire 626s",
//         img: "img/product-5.png",
//         price: 24,
//         company: "htc",
//         info:
//           "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//         inCart: false,
//         count: 0,
//         total: 0
//       },
//       {
//         id: 6,
//         title: "Vintage Iphone",
//         img: "img/product-6.png",
//         price: 17,
//         company: "apple",
//         info:
//           "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//         inCart: false,
//         count: 0,
//         total: 0
//       },
//       {
//         id: 7,
//         title: "Iphone 7",
//         img: "img/product-7.png",
//         price: 30,
//         company: "apple",
//         info:
//           "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//         inCart: false,
//         count: 0,
//         total: 0
//       },
//       {
//         id: 8,
//         title: "Smashed Iphone",
//         img: "img/product-8.png",
//         price: 2,
//         company: "apple",
//         info:
//           "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//         inCart: false,
//         count: 0,
//         total: 0
//       }
//   ]
// }

export const productDataSlice = createSlice({
  name: "productData",
  // mamoooooooooooooo
  initialState: {
    // name: "hassan",
    MainName: "",
    MainAddress: "",
    MainTotal: 0,

    cart: [
      {
        subTotal: 0,
        tax: 0,
        total: 0,
      },
    ],
    products: [
      {
        id: 1,
        title: "Google Pixel - Black",
        img: "img/product-1.png",
        price: 10,
        company: "GOOGLE",
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
      {
        id: 2,
        title: "Samsung S7",
        img: "img/product-2.png",
        price: 16,
        company: "SAMSUNG",
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
      {
        id: 3,
        title: "HTC 10 - Black",
        img: "img/product-3.png",
        price: 8,
        company: "htc",
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
      {
        id: 4,
        title: "HTC 10 - White",
        img: "img/product-4.png",
        price: 18,
        company: "htc",
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
      {
        id: 5,
        title: "HTC Desire 626s",
        img: "img/product-5.png",
        price: 24,
        company: "htc",
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
      {
        id: 6,
        title: "Vintage Iphone",
        img: "img/product-6.png",
        price: 17,
        company: "apple",
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
      {
        id: 7,
        title: "Iphone 7",
        img: "img/product-7.png",
        price: 30,
        company: "apple",
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
      {
        id: 8,
        title: "Smashed Iphone",
        img: "img/product-8.png",
        price: 2,
        company: "apple",
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
    ],
  },
  reducers: {
    // addInCart: (state, action) => {

    // // state.forEach((cur) => console.log(cur));
    // const temp = state.map((cur) => {
    //    return cur.id === action.payload;
    // });
    // console.log(temp);
    // console.log(action.payload);
    // console.log(state.products);
    // },

    storageProducts: (state, action) => {
      console.log("====================================", action.payload);
      console.log(action.payload);
      console.log("====================================");

      // window.localStorage.setItem("products", JSON.stringify(state.products));

      //local storage for products
      let list = JSON.parse(window.localStorage.getItem("products"));
      console.log("localStorage.getItem", list);

      list
        ? (state.products = list)
        : window.localStorage.setItem(
            "products",
            JSON.stringify(state.products)
          );

      //local storage for carts
      let calculation = JSON.parse(window.localStorage.getItem("cart"));
      console.log("localStorage.getcalculation =>=>=>=>----", calculation);

      calculation
        ? (state.cart = calculation)
        : window.localStorage.setItem("cart", JSON.stringify(state.cart));

      // debugger

      // let list = JSON.parse(window.localStorage.getItem('products'));
      // console.log("bhanjan localStorage.getItem", list);

      //  console.log("allo ke chalo");
      // list.length === 3 ? state.products = list : console.log("no three");
      //   return;
      // window.addEventListener('load', () => {
      //   console.log("page is loaded");
      //   list.length === 3 ? state.products = list : console.log("no three");
      // })

      // console.log("state.products before", state.products);
      // if(list){
      //   state.products = list;
      // }
      // console.log("state.products after", state.products);

      //   state.products = [...state.products,  {id: 4, title: "new new",
      //   img: "img/product-3.png", price: 800, company: "new", info:"new",
      //   inCart: false, count: 0, total: 0
      //  } ]
    },

    addInCart: (state, action) => {
      console.log("the state is = ", state);
      console.log("the state is state.products = ", state.products);
      console.log("the action.playload is", action.payload);

      const temp = state.products.find((cur) => cur.id === action.payload);
      if (temp) {
        console.log(
          "if runs and temp.inCart is = ",
          temp.inCart,
          "and temp =",
          temp
        );
        temp.inCart = !temp.inCart;
        if (temp.inCart) {
          temp.count = 1;
          temp.total = temp.price;
        } else {
          temp.count = 0;
          temp.total = 0;
        }
        // temp.inCart ? temp.count = 1 : temp.count = 0;
      }
      // let newData = [...state.products]
      window.localStorage.setItem("products", JSON.stringify(state.products));

      // let list = JSON.parse(window.localStorage.getItem('products'));
      // console.log("bhanjan localStorage.getItem", list);

      // list.length === 3 ? state.products = list : console.log("no three");

      // console.log("before cards ===> ", state.cart);
      //  state.cart = [...state.cart, {id:1, name: 'product items'}]

      // // // return state.cards.filter((cur) => cur.id !== action.payload);

      // // state.products = state.products.filter((cur) => cur.id !== action.payload);

      //  console.log("after cards ===> ", state.cart);

      //   const newPro = {
      //   id: new Date(),
      //   title: "new",
      //   img: "img/product-3.png",
      //   price: 8,
      //   company: "new",
      //   info: "new",
      //   inCart: true,
      //   count: 0,
      //   total: 0
      //   }

      //  state.push(newPro);

      //  return state.filter((cur) => cur.id !== action.payload);
    },

    ProductTotal$count: (state, action) => {
      console.log("====================================");
      console.log(action.payload.quantity, action.payload.proId);
      console.log("====================================");

      //products logic
      const temp = state.products.find(
        (cur) => cur.id === action.payload.proId
      );
      if (temp) {
        temp.count = action.payload.quantity;
        temp.total = action.payload.quantity * temp.price;
      }
      if (action.payload.quantity == 0) {
        temp.inCart = false;
      }
      // //cart logic
      // const allTotals = state.products.map((cur) => {
      //   return cur.total;
      // })
      window.localStorage.setItem("products", JSON.stringify(state.products));

      // console.log(allTotals);

      // const subTotal = allTotals.reduce((pre, cur, index) =>
      // pre + cur, 0);
      // console.log(subTotal);

      // console.log("the cart to see before", state.cart);

      // state.cart = [{subTotal: subTotal, tax: 5.6, total: 5.6 + subTotal}];

      // console.log("the cart to see after", state.cart);
      // // state.cart.subTotal = subTotal;
      // // state.cart.total = 5.6 + subTotal;

      // console.log("=============================", state.cart);
    },

    cartCalculation: (state, action) => {
      //cart logic
      const allTotals = state.products.map((cur) => {
        return cur.total;
      });

      console.log(allTotals);

      const subTotal = allTotals.reduce((pre, cur, index) => pre + cur, 0);
      console.log(subTotal);

      let tax = 0;

      subTotal ? (tax = 5.6) : (tax = 0);

      console.log("the cart to see before", state.cart);

      state.cart = [{ subTotal: subTotal, tax: tax, total: tax + subTotal }];

      console.log("the cart to see after", state.cart);
      // state.cart.subTotal = subTotal;
      // state.cart.total = 5.6 + subTotal;

      window.localStorage.setItem("cart", JSON.stringify(state.cart));

      console.log("=============================", state.cart);
    },

    placeOrder: (state, action) => {
      state.MainName = action.payload.formNmae;
      state.MainAddress = action.payload.formAddress;
      state.MainTotal = action.payload.total;
    },

    clearOrder: (state, action) => {
      state.MainName = "";
      state.MainAddress = "";
      state.MainTotal = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addInCart,
  ProductTotal$count,
  cartCalculation,
  storageProducts,
  placeOrder,
  clearOrder,
} = productDataSlice.actions;

export default productDataSlice.reducer;
