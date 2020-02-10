import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {compose} from 'redux';

const SignUp = ({handleSubmit, signUp}) => {

  const onSubmit = (formProps) => {
    signUp(formProps);
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
      <button type="submit">Sign up</button>
    </form>
  );
};

export default compose(
  connect(null, actions),
reduxForm({form: 'signup'}))(SignUp);