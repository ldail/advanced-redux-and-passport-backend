import {AUTH_USER} from './types';
import Axios from 'axios';


export const signUp = (formProps) => dispatch => {
  Axios.post('http://localhost:3090/signup', formProps);
}