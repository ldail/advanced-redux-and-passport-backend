import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';

const SignUp = ({errorMessage, handleSubmit, signUp, history}) => {

  const onSubmit = (formProps) => {
    signUp(formProps, () => {
      history.push('/feature')
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor="email">Email</label>
        <Field 
          name="email"
          type="text"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
          />
      </fieldset>
      <div>{errorMessage}</div>
      <button type="submit">Sign up</button>
    </form>
  );
};

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
})

export default compose(
  withRouter,
  connect(mapStateToProps, actions),
  reduxForm({form: 'signup'}))(SignUp);