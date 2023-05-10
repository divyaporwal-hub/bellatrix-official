import React from "react";
import Moon from "../images/moon.jpg";
import "../styles/login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.get("http://localhost:8000/user/getuser", {
        params: {
          userEmail: email,
          userPassword: password,
        },
      });
      if (response.data.length) {
        localStorage.setItem("userInfoBltx", JSON.stringify(response.data[0]));
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <section className="Login">
      <div className="container2">
        <div className="user signinBx">
          <div className="imgBx">
            <img src={Moon} />
          </div>
          <div className="formBx">
            <form onSubmit={handleSubmit}>
              <h2>Sign In</h2>
              <input
                type="email"
                name=""
                placeholder="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <input
                type="password"
                name=""
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <input type="submit" name="" value="Login" />
              <br />
              <p className="signup">
                Don't have an account ?<Link to="/signup">Signup</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
