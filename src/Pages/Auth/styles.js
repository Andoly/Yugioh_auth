import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;
export const SubContrainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Imagem = styled.img`
  position: relative;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  @media (max-width: 600px) {
    display: none;
  }
`;
