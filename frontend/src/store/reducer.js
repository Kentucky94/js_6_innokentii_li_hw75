import {CHANGE_DECODED, CHANGE_ENCODED, CHANGE_PASSWORD} from "./actions";

const initialState = {
  password: '',
  encoded: '',
  decoded: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_PASSWORD:
      return {...state, password: action.newPassword};
    case CHANGE_DECODED:
      return {...state, decoded: action.newDecoded};
    case CHANGE_ENCODED:
      return {...state, encoded: action.newEncoded};
    default:
      return state;
  }
};

export default reducer;
