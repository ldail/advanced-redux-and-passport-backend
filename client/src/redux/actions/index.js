import {AUTH_USER, AUTH_ERROR} from './types';
import Axios from 'axios';


export const signUp = (formProps, callback) => async dispatch => {
  try {
    const response = await Axios.post('http://localhost:3090/signup', formProps)
    await dispatch({type: AUTH_USER, payload: response.data.token});
    window.localStorage.setItem('authenticated', response.data.token);
    callback();
  }
  catch(error) {
    dispatch({type: AUTH_ERROR, payload: 'Email in use'})
  }
};

export const signOut = () => {
  window.localStorage.removeItem('authenticated');
  return ({
    type: AUTH_USER,
    payload: ''
  })
}

export const signIn = (formProps, callback) => async dispatch => {
  try {
    const response = await Axios.post('http://localhost:3090/signin', formProps)
    await dispatch({type: AUTH_USER, payload: response.data.token});
    window.localStorage.setItem('authenticated', response.data.token);
    callback();
  }
  catch(error) {
    dispatch({type: AUTH_ERROR, payload: 'Invalid login credentials'})
  }
};