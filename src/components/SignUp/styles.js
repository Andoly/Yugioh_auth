import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  border: 3px solid #f062c0;
  border-radius: 10px;
  padding-bottom: 50px;
  box-sizing: border-box;
  margin: 120px;
`;
export const Input = styled.input`
  min-width: 220px;
  padding: 5px 10px;
  margin: 5px;
  box-sizing: border-box;
  border-color: #eaeaea;
  border-radius: 5px;
  background: #fff;
  &:focus-within {
    box-shadow: 0 0 3px #141526;
  }
  &:nth-child(1) {
    margin: 40% 40px 5px;
  }
`;
export const Button = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  width: 220px;
  height: 29px;
  border-color: transparent;
  border-radius: 5px;
  color: #fff;
  justify-content: center;
  cursor: pointer;
  background: linear-gradient(180deg, #62a4f0 0%, #62a2f0 50%);
  &:hover {
    background: linear-gradient(180deg, #62a4f0 0%, #6286f0 50%);
  }
`;
