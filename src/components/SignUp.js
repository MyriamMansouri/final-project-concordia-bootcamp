import React from "react";
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <form action="/signup" method="POST">
        <div>
          <label htmlFor="email">What's your email</label>
          <input
            id="email"
            name="email"
            type="enail"
            placeholder="Enter your email."
            required
          />
        </div>
        <div>
          <label htmlFor="password">Create a password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password."
            required
          />
        </div>
        <div>
          <label htmlFor="name">What sould we call you</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter a profile name."
            required
          />
        </div>

        <button type="submit">SIGN UP</button>
      </form>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default SignUp;
