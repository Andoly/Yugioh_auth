import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../img/logo.webp";
import { setResetToken } from "../../store/auth/actions";
import { FavoriteBorder as Favorite } from "@styled-icons/material/FavoriteBorder";

const Header = () => {
  const userData = useSelector(({ auth }) => auth.name);
  const dispatch = useDispatch();
  const history = useHistory();

  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (userData) {
      setStatus(true);
    }
  }, [status, userData]);

  const handleLogout = () => {
    dispatch(setResetToken(""));
    history.push("/");
  };

  return (
    <S.Container>
      <S.SubContainer>
        <S.Imagem src={Logo} alt="YuGiOh" />
        <S.ContainerProfile>
          {!status ? (
            <Link to="/signin">
              <S.Auth>Login</S.Auth>
            </Link>
          ) : (
            <S.User>
              <S.RestrictedHeader>
                <Link to="/">
                  <Favorite size={28} color={"#98ff00"} />
                </Link>
                <S.UserProfile>{userData}</S.UserProfile>
              </S.RestrictedHeader>
              <S.LogoutHeader onClick={handleLogout}>Logout</S.LogoutHeader>
            </S.User>
          )}
        </S.ContainerProfile>
      </S.SubContainer>
    </S.Container>
  );
};

export default Header;
