import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import  {logIn} from '../reducer/action'
const Login = () => {
  const SignIn = useSelector(state => state.SignIn)
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [err, setErr] = useState("");
  const login = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/login`, {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      });
      if (result.data.token) {
        console.log('yes');
        dispatch(logIn({token:result.data.token, role:result.data.result.role.role}));
        if (SignIn.role == "admin") {
          navigate("/");
        } else {
          navigate("/todo");
        }
      } else {
        setErr(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formm">
      <h1>Login</h1>

      <form onSubmit={login}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <p>OR</p>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <p>{err}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Login;