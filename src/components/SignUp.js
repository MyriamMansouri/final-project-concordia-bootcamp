import React from "react";
import { Link, Redirect } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          window.location.href = "/";
        } else {
          throw new Error(data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">What's your email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password."
            required
          />
        </div>
        <div>
          <label htmlFor="name">What sould we call you</label>
          <input
            id="name"
            name="name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a profile name."
            required
          />
        </div>

        <button>SIGN UP</button>
      </form>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default SignUp;
