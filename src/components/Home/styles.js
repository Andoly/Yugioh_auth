import styled from "styled-components";

export const Container = styled.div`
  clip-path: polygon(0 0, 100% 18%, 100% 100%, 0 82%);
  background-color: #5761b5;
  min-height: 80vh;
`;

export const Main = styled.div`
  position: relative;
  margin: 20px 120px;
  @media (max-width: 600px) {
    margin: 10px 80px;
  }
`;

export const Title = styled.p`
  color: #fff;
  padding-top: 35px;
  font-size: 22px;
  font-weight: 600;
`;
