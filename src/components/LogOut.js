import React from "react";

const LogOut = ({ setIsLoggedIn }) => {
  const handleClick = ({}) => {
    fetch("/logout")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setIsLoggedIn(false);
        }
      })
      .catch((err) => console.log(err));
  };
  return <button onClick={handleClick}>Log out</button>;
};

export default LogOut;
