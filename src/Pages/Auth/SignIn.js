import React, { Fragment } from "react";
import Yugioh from "../../img/YuGiOh.webp";
import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos";
import { Link } from "react-router-dom";
import * as S from "./styles";
import SignIn from "../../components/SignIn/SignIn";

const Auth = () => {
  return (
    <Fragment>
      <S.Container>
        <S.Imagem src={Yugioh} alt="Imagem" />
        <S.SubContrainer>
          <Link to="/">
            <ArrowLeft size={30} color={"#f062c0"} />
          </Link>
          <SignIn />
        </S.SubContrainer>
      </S.Container>
    </Fragment>
  );
};

export default Auth;
