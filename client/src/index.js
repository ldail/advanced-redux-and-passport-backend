import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
<BrowserRouter>
<App>
  <Route path="/" exact component={Welcome} />
  <Route path="/signup" component={SignUp} />
</App>
</BrowserRouter>
</Provider>,document.querySelector('#root'));