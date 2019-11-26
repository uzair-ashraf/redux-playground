import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SignUp extends React.Component {

  userSignUp(formValues) {
    console.log(formValues);
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <div>
        <h1 className="center">Sign Up!</h1>

        <form onSubmit={handleSubmit(this.userSignUp)}>
          <div className="row">
            <div className="col s12 input-field">
              <Field type="text" name="Name" id="Name" component="input"/>
              <label htmlFor="Name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12 input-field">
              <Field text="text"name="Email" id="Email" component="input"/>
              <label htmlFor="Email">Email</label>
            </div>
          </div>
          <div className="row right">
              <button className="btn blue">Create Account</button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "sign-up"
})(SignUp);
