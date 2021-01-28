import React from "react";
import * as S from "./styles";
import Img404 from "../../img/Img404.png";
import Base from "../Base/Base";

const NotFound = () => {
  return (
    <Base>
      <S.Container>
        <S.NotFoundComponent src={Img404} alt="Not Found" />
      </S.Container>
    </Base>
  );
};

export default NotFound;
