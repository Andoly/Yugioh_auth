import styled from "styled-components";

export const Main = styled.div`
  max-width: 1300px;
  margin: 0px;
  @media (max-width: 600px) {
    position: relative;
    width: 220px;
    height: 100%;
  }
`;

export const Wrapper = styled.section`
  .slick-dots {
    list-style: none;
    display: flex !important;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    li {
      background: #fff;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 8px;
      cursor: pointer;
      &.slick-active {
        background: #98ff0a;
      }
    }
    button {
      opacity: 0;
      width: 1.2rem;
      height: 1.2rem;
      cursor: pointer;
    }
  }
  @media (max-width: 600px) {
    .slick-dots {
      position: relative;
      right: 0;
      flex-direction: row;
      height: 100%;
      top: -10px;
      margin: 0;
      li {
        margin: 2px;
      }
    }
  }
`;

export const Slide = styled.div`
  margin-top: 60px;
  width: 300px;
  padding: 180px 0;
  border: 0.1rem solid #fff;
  color: #98ff00;
  text-align: center;
  @media (max-width: 600px) {
    margin-top: 10px;
    width: 200px;
    padding: 150px 0;
    left: 0;
  }
`;
