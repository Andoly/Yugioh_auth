import React, { Fragment, useEffect } from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector(({ auth }) => auth.name);

  useEffect(() => {
    console.log("CADE USUARIO?", userData);
  }, [userData]);
  return (
    <Fragment>
      <Header />
      Vamos ver {userData}
    </Fragment>
  );
};

export default Profile;
