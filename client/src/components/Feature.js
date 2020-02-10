import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

const Feature = ({auth, history}) => {

  useEffect(() => {
    if (!auth) {
      history.push('/signup');
    }
  },[auth])
  return (
    <div>
      I am the feature of signing in!
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth.authenticated
})

export default withRouter(connect(mapStateToProps, null)(Feature));