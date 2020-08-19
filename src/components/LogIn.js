import React from "react";
import {Link} from 'react-router-dom'

const LogIn = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action="/login" method="POST">
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="enail"
            placeholder="Email address"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <button type="submit">LOG IN</button>
      </form>
      <Link to="/signup">Sign up</Link>
    </div>
  );
};

export default LogIn;
