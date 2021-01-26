import React, { Fragment, useEffect } from "react";
import Header from "../Header/Header";
import Favorite from "../Favorite/Favorite";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector(({ auth }) => auth.name);

  useEffect(() => {
  }, [userData]);
  return (
    <Fragment>
      <Header />
      <Favorite />
      <Footer />
    </Fragment>
  );
};

export default Profile;
