import { CHECKLOGIN, LOGOUT } from "./login.type";
import loginInitialState from "./login.initialstate";

const loginReducer = (state = loginInitialState, action) => {

  let response = action.response;
  switch (action.type) {
    case CHECKLOGIN:
      return {
        ...state,
        userToken: 'scscscscscscs',
        userDeatils: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        userDeatils: null,
        userToken: null,
        show: false,
        msg: null,
      }

    default:
      return state;
  }
};

export default loginReducer;
