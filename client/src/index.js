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
import Feature from './components/Feature';
import SignOut from './components/auth/SignOut';
import SignIn from './components/auth/SignIn';

const store = createStore(reducers, {auth: {authenticated: window.localStorage.getItem('authenticated')}}, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
<BrowserRouter>
<App>
  <Route path="/" exact component={Welcome} />
  <Route path="/signup" component={SignUp} />
  <Route path="/feature" component={Feature} />
  <Route path="/signout" component={SignOut} />
  <Route path="/signin" component={SignIn} />
</App>
</BrowserRouter>
</Provider>,document.querySelector('#root'));