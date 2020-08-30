import React from "react";
import { Link } from "react-router-dom";
import Button from "./Buttons/Button";
import { Label, Input } from "./Forms/StyledFormComponents";
import { useDispatch, useSelector } from "react-redux";
import { getError } from "../reducers/user-reducer";
import { addUser, addUserError } from "../actions";
import Error from "./Error";

const SignUp = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
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
          dispatch(addUser(data.user));
          window.location.href = "/";
        } else {
          throw { message: data.message };
        }
      })
      .catch((err) => dispatch(addUserError(err)));
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

        <Button theme="accent">SIGN UP</Button>
      </form>
      <Link to="/login">Log in</Link>
      {error && <Error>{error.message}</Error>}
    </section>
  );
};

export default SignUp;
