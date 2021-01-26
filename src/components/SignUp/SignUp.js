import React, { Fragment, useState } from "react";
import * as S from "./styles";
import api from "../../services/api";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../../store/auth/actions";
import { useHistory } from "react-router-dom";
import Logo from "../../img/logo.webp";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    login: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const signUp = async (form) => {
    try {
      const response = await api.post(
        "/signup",
        {
          name: form.name,
          email: form.login,
          password: form.password,
          confirmPassword: form.confirmPassword,
        },
        { headers: { Authorization: "" } }
      );
      if (response.data) {
        console.log("response.data:", response.data);
      }
      return { error: false, data: response.data };
    } catch (error) {
      return { error: true, data: error.response.data.message };
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const { name, login, password, confirmPassword } = form;

    if (name === "") {
      return console.log({ name: "You must fill this field" });
    } else if (name.length <= 3) {
      return console.log({
        username: "The players name must have at least 3 characters",
      });
    }
    if (login === "") {
      return console.log({ email: "You must fill this field" });
    }
    if (password === "") {
      return console.log({ password: "You must fill this field" });
    }
    if (confirmPassword === "") {
      return console.log({ password: "You must fill this field" });
    }
    if (password !== confirmPassword) {
      return console.log({
        password: "Field do not match",
        confirmPassword: "Field do not match",
      });
    }

    try {
      const r = await signUp(form);
      const responseUser = r.data.data.data.user;
      const responseToken = r.data.data.data.token;
      dispatch(setUser({ user: responseUser }));
      dispatch(setToken({ token: responseToken }));
      history.push("/profile");
    } catch (error) {
      console.log("error:", error);
    }
    setForm({ login: "", password: "" });
  };

  return (
    <Fragment>
      <S.Form onSubmit={handleOnSubmit}>
        <S.Imagem src={Logo} alt="YuGiOh" />
        <S.Input
          placeholder="Name"
          type="text"
          value={form.name}
          name="name"
          onChange={handleOnChange}
        ></S.Input>
        <S.Input
          placeholder="E-mail"
          type="text"
          value={form.login}
          name="login"
          onChange={handleOnChange}
        ></S.Input>
        <S.Input
          placeholder="Password"
          type="password"
          value={form.password}
          name="password"
          onChange={handleOnChange}
        ></S.Input>
        <S.Input
          placeholder="Confirm password"
          type="password"
          value={form.confirmPassword}
          name="confirmPassword"
          onChange={handleOnChange}
        ></S.Input>
        <S.Button type="submit">Register</S.Button>
      </S.Form>
    </Fragment>
  );
};

export default SignUp;
