import React, { Fragment, useState, useEffect, useCallback } from "react";
import * as S from "./styles";
import api from "../../services/api";
import Empty from "../../img/Empty.webp";
import { useSelector } from "react-redux";

const Favorite = () => {
  // const userFavorite = useSelector(({ auth }) => auth.favorites);
  const userToken = useSelector(({ auth }) => auth.token);
  const [listFavorite, setListFavorite] = useState([]);

  const responseFavorite = useCallback(async () => {
    // console.log("LocalStorage Fav", userFavorite);
    const response = await api.get("/favorites", {
      headers: { Authorization: "Bearer " + userToken },
    });
    if (response.data) {
      const favoriteList = response.data.data.favorites;
      // console.log("response.Favorite:", favoriteList);
      const cardMap = favoriteList.map((card) => ({
        _id: card._id,
        card_images: card.card_images,
      }));
      setListFavorite(cardMap);
      // console.log("CARD MAP:", cardMap);
    }
    return { error: false, data: response.data };
  }, [userToken])

  useEffect(() => {
    const fetch = () => {
      responseFavorite()
     }
     fetch()
  },[responseFavorite]);

  const removeFavorite = async (event, id) => {
    event.preventDefault();
    api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
    await api.delete(`/favorites/${id}`);
    responseFavorite();
  };

  return (
    <Fragment>
      <S.Container>
        <S.Title>Lista de favoritos ({listFavorite.length})</S.Title>
        <S.Wishlist>
          {listFavorite.length === 0 ? (
            <S.Empty src={Empty} alt="Lista vazia" />
          ) : (
            <S.GridFavorite>
              {listFavorite.map((item) => {
                return (
                  <S.CardInGrid
                    key={item._id}
                    onDoubleClick={(e) => removeFavorite(e, item._id)}
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
