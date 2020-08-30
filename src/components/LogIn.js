import React from "react";
import { Link } from "react-router-dom";
import Button from "./Buttons/Button";
import { Label, Input } from "./Forms/StyledFormComponents";
import { useDispatch, useSelector } from "react-redux";
import { requestUser, receiveUser, receiveUserError } from "../actions";
import { getStatus, getUser, getError } from "../reducers/user-reducer";
import Spinner from "./Spinner";
import Error from './Error'

const LogIn = () => {
  const dispatch = useDispatch();

  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const user = useSelector(getUser);
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestUser());
    fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          dispatch(receiveUser(data.user));
          window.location.href = `/`;
        } else {
         throw {message : data.message}
        }
      })
      .catch((err) => dispatch(receiveUserError(err)));
  };

  return (
    <>
      {status === "loading" && <Spinner />}
      {status !== "loading" && !user && (
        <section>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>

            <Button>LOG IN</Button>
          </form>
          <Link to="/signup">Sign up</Link>
          {status==='error' && error && <Error>{error.message}</Error>}
        </section>
      )}
    </>
  );
};

export default LogIn;
