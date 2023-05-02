import React, { useState } from "react";
import Tree from "../images/tree.jpg";
import "../styles/login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("https://localhost:8000/user/saveuser", {
        userEmail: email,
        fullName: fullName,
        userPassword: password,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <section>
      <div class="container2">
        <div class="user signinBx">
          <div class="imgBx">
            <img src={Tree} />
          </div>
          <div class="formBx">
            <form onSubmit={handleSubmit}>
              <h2>Create an account</h2>
              <input
                type="name"
                name=""
                placeholder="Full Name"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
              <br />
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
                placeholder="Create password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <input
                type="password"
                name=""
                placeholder="Confirm Password"
                onChange={(e) => {
                  setCnfPassword(e.target.value);
                }}
              />
              <br />
              <input type="submit" name="" value="Signup" />
              <br />
              <p class="signup">
                Already have an account ?<Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
