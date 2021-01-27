import React, { Fragment } from "react";
import * as S from "./styles";
import SliderCards from "../../components/SliderCards/SliderCards";

const Home = () => {
  return (
    <Fragment>
      <S.Container>
        <S.Main>
          <S.Title>Cards</S.Title>
          <SliderCards />

        </S.Main>
      </S.Container>
    </Fragment>
  );
};

export default Home;
