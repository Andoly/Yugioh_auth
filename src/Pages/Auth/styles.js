import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;
export const SubContrainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 50px; 
  @media (max-width: 600px) {
    padding: 0px; 
  }
`;

export const Imagem = styled.img`
  position: relative;
  width: 100vh;
  height: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  @media (max-width: 600px) {
    display: none;
  }
`;
