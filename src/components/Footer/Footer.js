import React, { Fragment } from "react";
import * as S from "./styles";
import { ReactLogo as ReactJs } from "@styled-icons/boxicons-logos/ReactLogo";
import { Redux as ReduxLogo } from "@styled-icons/boxicons-logos/Redux";
import { Nodejs as NodejsLogo } from "@styled-icons/boxicons-logos/Nodejs";
import { Api as ApiLogo } from "@styled-icons/material/Api";

const Footer = () => {
  return (
    <Fragment>
      <S.Footer>
        <S.PosicionaTitle>Copyright © 2021 - Andoly</S.PosicionaTitle>
        <S.Logos>
        <ReactJs size={30} color={'#fff'} />
        <ReduxLogo size={30} color={'#fff'} />        
        <NodejsLogo size={30} color={'#fff'} />        
        <ApiLogo size={30} color={'#fff'} />        
        </S.Logos>
      </S.Footer>
    </Fragment>
  );
};

export default Footer;
