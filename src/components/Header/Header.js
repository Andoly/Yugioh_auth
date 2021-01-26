import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../img/logo.webp";
import { setResetToken } from "../../store/auth/actions";

const Header = () => {
  const userData = useSelector(({ auth }) => auth.name);
  const dispatch = useDispatch();
  const history = useHistory();

  const [status, setStatus] = useState(false);

  useEffect(() => {
    console.log("Status", status);
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
              {userData}
              <S.RestrictedHeader onClick={handleLogout}>
                Logout
              </S.RestrictedHeader>
            </S.User>
          )}
        </S.ContainerProfile>
      </S.SubContainer>
    </S.Container>
  );
};

export default Header;
