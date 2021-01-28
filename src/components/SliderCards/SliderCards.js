import React, { useState, useCallback, useEffect } from "react";
import Loading from "../Loading/Loading";
import * as S from "./styles";
import Slider from "../Slider/Slider";
import api from "../../services/api";
// import { FavoriteBorder as Favorite } from "@styled-icons/material/FavoriteBorder";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  cssEase: "linear",
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
      },
    },
  ],
};

const SliderCards = () => {
  const [cards, setCards] = useState([]);
  const [loadingRequest, setLoadingRequest] = useState(false);

  const getCards = useCallback(async () => {
    setLoadingRequest(true);
    const response = await api.get(`/cards?name`);
    let cardsAux = response.data.cards.map((cards) => cards.card_images);
    const cardReduce = cardsAux.reduce(function (acm, current) {
      return acm.concat(current);
    });
    setCards(cardReduce);
    setLoadingRequest(false);
  }, []);

  useEffect(() => {
    const fetch = () => {
      getCards();
    };
    fetch();
  }, [getCards]);

  return (
    <S.Main>
      <S.Wrapper>
        {loadingRequest && (
          <S.LoadingWrapper>
            <Loading />
          </S.LoadingWrapper>
        )}
        {!loadingRequest && (
          <Slider settings={settings}>
            {cards.map((item, index) => (
              <S.Slide src={item} alt="card" key={index} />
            ))}
          </Slider>
        )}
      </S.Wrapper>
    </S.Main>
  );
};

export default SliderCards;
