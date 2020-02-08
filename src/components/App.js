import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

const App = ({ auth, changeAuth }) => {

  const renderButton = () => {
    if (auth) {
      return (
        <button onClick={() => changeAuth(false)}>Sign Out</button>
      )
    }
    else {
      return (
        <button onClick={() => changeAuth(true)}>Sign In</button>
      )
    }
  }

  const renderHeader = () => (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/post">Post a Comment</Link></li>
      <li>{renderButton()}</li>
    </ul>
  );

  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route exact path="/" component={CommentList} />
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, actions)(App);