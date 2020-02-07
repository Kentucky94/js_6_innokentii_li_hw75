import axiosOrders from "../axiosOrders";

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const changePassword = newPassword => ({type: CHANGE_PASSWORD, newPassword});

export const CHANGE_DECODED = 'CHANGE_DECODED';

export const changeDecoded = newDecoded => ({type: CHANGE_DECODED, newDecoded});

export const CHANGE_ENCODED = 'CHANGE_ENCODED';

export const changeEncoded = newEncoded => ({type: CHANGE_ENCODED, newEncoded});

export const postToEncode = (password, message) => {
  return async dispatch => {

    const response = await axiosOrders.post('/encode', {password, message});

    dispatch(changeDecoded(response.data))
  }
};

export const postToDecode = (password, message) => {
  return async dispatch => {

    const response = await axiosOrders.post('/decode', {password, message});

    dispatch(changeEncoded(response.data))
  }
};




