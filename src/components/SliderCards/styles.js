import styled from "styled-components";

export const Main = styled.div`
  max-width: 1400px;
  margin: 110px auto;
  @media (max-width: 600px) {
    position: relative;
    margin: 0 auto;
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
      width: 1rem;
      height: 1rem;
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
        background: #fff;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px 1px;
        cursor: pointer;
        &.slick-active {
          background: #98ff0a;
        }
      }
    }
  }
`;

export const Slide = styled.img`
  margin: 0px;
  width: 300px;
  padding: 0px 10px;
  border: 0.1rem solid transparent;
  color: #98ff00;
  text-align: center;
  @media (max-width: 600px) {
    margin-top: 10px;
    width: 200px;
    padding: 0px;
    left: 0;
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;