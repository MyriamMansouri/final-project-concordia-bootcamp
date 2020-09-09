import React from "react";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getError, getStatus, getUser } from "../reducers/user-reducer";
import { addUser, receiveUserError, requestUser } from "../actions";

import Button from "./Buttons/Button";
import { Label, Input } from "./Forms/StyledFormComponents";
import { Title1, Text } from "./Misc/typo";

import Error from "./Error";
import Spinner from "./Spinner";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(getUser);
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  //on page load, reset user error
  React.useEffect(() => {
    dispatch(receiveUserError(null));
  }, [dispatch]);

  const handleSubmit = (e) => {
    dispatch(requestUser());
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
          dispatch(addUser(data.user));
          history.push("/map");
        } else {
          dispatch(receiveUserError({ message: data.message }));
        }
      })
      .catch((err) => dispatch(receiveUserError(err)));
  };
  return (
    <section>
      {status === "loading" ? (
        <Spinner />
      ) : (
        !user && (
          <>
            <Title1>Sign up</Title1>
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

              <Button
                theme="accent"
                style={{ margin: "40px 0 20px", width: "100%" }}
              >
                SIGN UP
              </Button>
            </form>
            <Text>
              Have an account? <Link to="/login">Log in</Link>.
            </Text>

            {error && <Error>{error.message}</Error>}
          </>
        )
      )}
    </section>
  );
};

export default SignUp;
