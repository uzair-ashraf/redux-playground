import React from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="center">
          Welcome to our app
        </h1>
        <div className="center">
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    )
  }
}
