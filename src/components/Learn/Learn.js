import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addInput } from "../../store/module/actions";
import * as S from "./styles";

const Learn = () => {
  const dispatch = useDispatch();
  const output = useSelector(({ operations }) => operations.inputSet);

  const [inputLocal, setInputLocal] = useState("");

  const handleOnChange = ({ target }) => {
    console.log("inputLocal", inputLocal);
    console.log("output", output);
    setInputLocal(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addInput(inputLocal));
    setInputLocal("");
  };

  return (
    <Fragment>
      <S.FormComponent onSubmit={handleSubmit}>
        <S.InputComponent
          type="text"
          value={inputLocal}
          onChange={handleOnChange}
        />
        <S.ButtonComponent type="submit">Add entrada</S.ButtonComponent>
      </S.FormComponent>
      <hr />

      <S.Exibir>
        <S.Lista>
          {output &&
            output.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </S.Lista>
      </S.Exibir>
    </Fragment>
  );
};

export default Learn;
