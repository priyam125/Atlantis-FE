import SHOP_DATA from "../../pages/shop/ShopData";

 const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  // console.log(action.payload);
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
