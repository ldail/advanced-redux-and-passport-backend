import {AUTH_USER, AUTH_ERROR} from './types';
import Axios from 'axios';


export const signUp = (formProps, callback) => dispatch => {
  try {
    Axios.post('http://localhost:3090/signup', formProps)
      .then(response => {
        console.log('response starting');
          console.log(response);
          return response;
        })
      .then(resJson => dispatch({type: AUTH_USER, payload: resJson.data.token}))
      .then(() => callback())
      .catch(error => {
        console.log('error in here');
        dispatch({type: AUTH_ERROR, payload: 'Email in use'})
      });
    
  //   let newResponse = response.json();
  //   console.log(newResponse);
  //   return newResponse;});
  // console.log('passed the await');
  // if (!response.data.error) {
  //   dispatch({type: AUTH_USER, payload: response.data.token})
  // }
  // else {
  //   dispatch({type: AUTH_ERROR, payload: 'Email in use'})
  // }
  }
  catch(error) {
    dispatch({type: AUTH_ERROR, payload: 'Email in use'})
  }
};