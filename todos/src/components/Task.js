import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import  {TASK} from '../reducer/action'

const Post = () => {
  const SignIn = useSelector(state => state.SignIn)
  const mytodo = useSelector(state => state.TASK)
  console.log(mytodo);
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const token = SignIn.token;
  const [data, setData] = useState([]);

  const getPosts = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/posts`, {
        headers: { Authorization: `bearer ${token}` },
      });
      console.log(result);
      dispatch(TASK(result.data))
    } catch (error) {
      console.log(error);
    }
  };

  const del = async (id) => {
    try {
      const result = await axios.delete(`${BASE_URL}/post/${id}`, {
        headers: { Authorization: `bearer ${token}` },
      });
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const newTodo = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(
        `${BASE_URL}/post`,
        {
          desc: e.target.todo.value,
        },
        {
          headers: { Authorization: `bearer ${token}` },
        }
      );
      e.target.todo.value = "";
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='todo'>
      <h1>Todos:</h1>
      <form onSubmit={newTodo} className='new'>
        <p>New todo:</p>
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>
      {mytodo?.map((item) => {
        return (
          <div key={item._id}>
            <h2 style={{ display: "inline" }}>{item.desc}</h2>
            <button onClick={() => del(item._id)}>x</button>
            <br />
          </div>
        );
      })}

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

export default Post;