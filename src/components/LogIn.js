import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "./Buttons/Button";

import { useDispatch, useSelector } from "react-redux";
import { requestUser, receiveUser, receiveUserError } from "../actions";
import { getStatus, getUser, getError } from "../reducers/user-reducer";

import { Label, Input } from "./Forms/StyledFormComponents";
import Spinner from "./Spinner";
import Error from "./Error";
import { Title1, Text } from "./Misc/typo";

const LogIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const user = useSelector(getUser);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //on page load, reset user error
  React.useEffect(() => {
    dispatch(receiveUserError(null));
  }, [dispatch]);

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
          history.push("/map");
        } else {
          dispatch(receiveUserError({ message: data.message }));
        }
      })
      .catch((err) => dispatch(receiveUserError(err)));
  };

  return (
    <>
      {status === "loading" && <Spinner />}
      {status !== "loading" && !user && (
        <section>
          <Title1>Login</Title1>
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

            <Button style={{ margin: "40px 0 20px", width: "100%" }}>
              LOG IN
            </Button>
          </form>
          <Text>
            Don't have an account ? <Link to="/signup">Sign up</Link>.
          </Text>
          {status === "error" && error && <Error>{error.message}</Error>}
        </section>
      )}
    </>
  );
};

export default LogIn;
