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
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

export const Auth = styled.button`
  color: #98ff00;
  background: rgb(7, 11, 40);
  border: transparent;
  font-size: 18px;
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;
export const User = styled.div`
  color: #98ff00;
  display: flex;
  flex-direction: column;
`;
export const RestrictedHeader = styled.div`
  color: #98ff00;
  cursor: pointer;
  display: flex;
  :hover {
    color: #fff;
  }
`;
export const UserProfile = styled.div`
  padding-left: 10px;
`;
export const LogoutHeader = styled.div`
  text-align: end;
  font-size: 18px;
  color: #00a8ff;
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;
