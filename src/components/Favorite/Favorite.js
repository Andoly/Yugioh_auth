import React, { Fragment, useState, useEffect } from "react";
import * as S from "./styles";
import api from "../../services/api";
import Empty from "../../img/Empty.webp";
import { FavoriteBorder as FavoriteButton } from "@styled-icons/material/FavoriteBorder";
import { useSelector } from "react-redux";

const Favorite = () => {
  const userFavorite = useSelector(({ auth }) => auth.favorites);
  const userToken = useSelector(({ auth }) => auth.token);
  const [listFavorite, setListFavorite] = useState([]);
  const [idCard, setIdCard] = useState();

  const responseFavorite = async () => {
    const response = await api.get("/favorites", {
      headers: { Authorization: "Bearer " + userToken },
    });
    if (response.data) {
      const favoriteList = response.data.data.favorites;
      console.log("response.Favorite:", favoriteList);
      const cardMap = favoriteList.map((card) => card.card_images );
      const cardId = favoriteList.map((card) => card._id );
      const cardReduce = cardMap.reduce(function (acm, current) {
        return acm.concat(current);
      }, []);
      setListFavorite(cardReduce);
      setIdCard(cardId);
      // console.log("CARD MAP:", cardMap);
      // console.log("CARD REDUCE:", cardReduce);
      console.log("CARD ID:", cardId);
    }
    return { error: false, data: response.data };
  };
  // useEffect(() => {}, [listFavorite, userFavorite]);

  return (
    <Fragment>
      <S.Container>
        <S.Title>Lista de favoritos</S.Title>
        <FavoriteButton
          size={35}
          onClick={responseFavorite}
          color={"#98ff00"}
        />
        <S.Wishlist>
          {listFavorite.length === 0 ? (
            <S.Empty src={Empty} alt="Lista vazia" />
          ) : (
            <S.GridFavorite>
              {listFavorite.map((item, index) => {
                return <S.CardInGrid key={index} src={item} alt="Card" />;
              })}
            </S.GridFavorite>
          )}
        </S.Wishlist>
      </S.Container>
    </Fragment>
  );
};

export default Favorite;
