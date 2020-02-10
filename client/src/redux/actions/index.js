import {AUTH_USER, AUTH_ERROR} from './types';
import Axios from 'axios';


export const signUp = (formProps, callback) => async dispatch => {
  try {
    const response = await Axios.post('http://localhost:3090/signup', formProps)
    await dispatch({type: AUTH_USER, payload: response.data.token});
    callback();
  }
  catch(error) {
    dispatch({type: AUTH_ERROR, payload: 'Email in use'})
  }
};