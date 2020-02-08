import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxPromise from 'redux-promise'
import reducers from 'reducers'
import async from 'middlewares/async';


export default({children, initialState = {}}) => {

  const store= createStore(reducers, compose(applyMiddleware(async),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};