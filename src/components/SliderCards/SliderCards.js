import React, { useState, useCallback } from "react";
import * as S from "./styles";
import Slider from "../Slider/Slider";
import api from "../../services/api";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SliderCards = () => {
  const [cards, setCards] = useState();

  const getCards = useCallback(async () => {
    const response = await api.get(`/cards?name`);
    let cardsAux = response.data.cards.map((cards) => cards.card_images);
    const cardReduce = cardsAux.reduce(function (acm, current) {
      return acm.concat(current);
    });
    console.log("itens Reduce", cardReduce);
    console.log("itens cards", cards);
    setCards(cardReduce);
    return cardReduce;
  }, [cards]);

  return (
    <S.Main>
      <S.Wrapper>
        <Slider settings={settings}>
          <S.Slide>1</S.Slide>
          <S.Slide>2</S.Slide>
          <S.Slide>3</S.Slide>
          <S.Slide>4</S.Slide>
          <S.Slide>5</S.Slide>
          <S.Slide>6</S.Slide>
        </Slider>
      </S.Wrapper>
    </S.Main>
  );
};

export default SliderCards;
