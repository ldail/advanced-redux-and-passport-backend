import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxPromise from 'redux-promise'
import reducers from 'reducers'
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';


export default({children, initialState = {}}) => {

  const store= createStore(reducers, compose(applyMiddleware(stateValidator,async),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};