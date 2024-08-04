import { SET_CURRENT_USER } from "./userActions";

 const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case SET_CURRENT_USER: {
      const { currentUser } = action.payload;
      return {
        ...state,
        currentUser: currentUser,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
