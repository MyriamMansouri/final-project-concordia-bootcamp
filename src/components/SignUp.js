import React from "react";
import { Link } from "react-router-dom";
import Button from "./Buttons/Button";
import { Label, Input } from "./Forms/StyledFormComponents";
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
        console.log(data);
        if (data.status === 201) {
          window.location.href = "/";
        } else {
          throw new Error(data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="email">What's your email</Label>
          <Input
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
          <Label htmlFor="password">Create a password</Label>
          <Input
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
          <Label htmlFor="name">What sould we call you</Label>
          <Input
            id="name"
            name="name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a profile name."
            required
          />
        </div>

        <Button>SIGN UP</Button>
      </form>
      <Link to="/login">Log in</Link>
    </section>
  );
};

export default SignUp;
