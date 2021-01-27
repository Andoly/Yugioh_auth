import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 120px;
  position: relative;
  min-height: 80vh;
`;
export const Title = styled.p`
  color: #070b28;
  font-size: 20px;
  font-weight: 700;
`;
export const Wishlist = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GridFavorite = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr
  }
`;
export const CardInGrid = styled.img`
  width: 240px;
  height: auto;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Empty = styled.img`
  position: relative;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
