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
      const cardMap = favoriteList.map(
        (card) => `{_id: ${card._id}, card_images: ${card.card_images}}`
      );
      const cardId = favoriteList.map((card) => card._id);
      // const cardReduce = cardMap.reduce(function (acm, current) {
      //   return acm.concat(current);
      // }, []);
      setListFavorite(cardMap);
      setIdCard(cardId);
      console.log("CARD MAP:", cardMap);
      // console.log("CARD REDUCE:", cardReduce);
      console.log("CARD ID:", cardId);
    }
    return { error: false, data: response.data };
  };
  // useEffect(() => {}, [listFavorite, userFavorite]);

  const removeFavorite = (event, id) => {
    event.target.defaultPrevent();

    const response = api.delete(
      `/favorites/${id}`,
      { id },
      { headers: { Authorization: "Bearer " + userToken } }
    );
    if (response.data) {
      const favoriteList = response.data.data.favorites;
      console.log("Novo lista:", favoriteList);
    }
  };
  console.log('Lista interna',listFavorite)

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
              {JSON.parse(listFavorite).map((item) => {
                console.log('id:',item._id)
                return (
                  <S.CardInGrid
                    key={item._id}
                    onDoubleClick={removeFavorite}
                    src={item.card_images}
                    alt="Card"
                  />
                );
              })}
            </S.GridFavorite>
          )}
        </S.Wishlist>
      </S.Container>
    </Fragment>
  );
};

export default Favorite;
