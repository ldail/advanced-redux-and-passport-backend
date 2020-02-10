import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';

const SignOut = ({signOut}) => {

  useEffect(() => {
    signOut()
  }, [signOut])
  
  return (
    <div>
      Sorry to see you go!
    </div>
  );
};

export default connect(null,actions)(SignOut);