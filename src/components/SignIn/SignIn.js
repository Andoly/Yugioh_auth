import React, { Fragment, useState } from "react";
import * as S from "./styles";
import api from "../../services/api";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../../store/auth/actions";
import { useHistory, Link } from "react-router-dom";
import Logo from "../../img/logo.webp";

const SignIn = () => {
  const [form, setForm] = useState({ login: "", password: "" });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const signIn = async (form) => {
    try {
      const response = await api.post("/signin", {
        email: form.login,
        password: form.password,
      });
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
    try {
      const r = await signIn(form);
      const responseUser = r.data.data.data.user;
      const responseToken = r.data.data.data.token;
      dispatch(setUser({ user: responseUser }));
      dispatch(setToken({ token: responseToken }));
      history.push("/");
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
        <S.Button type="submit">Login</S.Button>
        <S.Account>
        <span>Não possui conta? </span>
        <Link to="/signup">Cadastrar</Link>
      </S.Account>
      </S.Form>
    </Fragment>
  );
};

export default SignIn;
