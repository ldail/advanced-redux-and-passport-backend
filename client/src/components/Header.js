import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Header = ({auth}) => {
  const renderLinks = () => {
    if (auth) {
      return(
        <>
      <Link to="/signout">Sign out</Link>
      <Link to="/feature">Feature</Link>
      </>
      );
    }
    else {
      return (
        <>
      <Link to="/signup">Sign up</Link>
      <Link to="/signin">Sign in</Link>
      </>
      );
    }
  }
  return (
    <div>
      <Link to="/">Home</Link>
      {renderLinks()}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth.authenticated
})

export default connect(mapStateToProps, null)(Header);