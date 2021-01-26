import styled from "styled-components";

export const Container = styled.div`
  background: rgb(7, 11, 40);
  height: 100px;
`;
export const SubContainer = styled.div`
  display: flex;
  margin: 0px 50px;
  height: 100%;
`;
export const Imagem = styled.img`
  position: relative;
  width: 150px;
  align-self: center;
`;

export const ContainerProfile = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const Auth = styled.button`
  color: #98ff00;
  background: rgb(7, 11, 40);
  border: transparent;
  font-size: 18px;
  cursor: pointer;
`;
export const User = styled.div`
  color: #98ff00;
  display: flex;
  flex-direction: column;
`;
export const RestrictedHeader = styled.div`
  color: #00a8ff;
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;
