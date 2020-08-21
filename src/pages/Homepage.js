import React from "react";
import LogOut from "../components/LogOut";

const Homepage = () => {
  const [name, setName] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    fetch("/user")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setIsLoggedIn(true);
          setName(data.user.name);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoggedIn && `Hello ${name}`}
      <LogOut setIsLoggedIn={setIsLoggedIn} />
    </>
  );
};

export default Homepage;
