import React from "react";
import Tree from "../images/tree.jpg";
import "../styles/login.css";
import {Link} from "react-router-dom";

function Signup() {
  return (
    <section>
      <div class="container2">
        <div class="user signinBx">
          <div class="imgBx">
            <img src={Tree} />
          </div>
          <div class="formBx">
            <form>
              <h2>Create an account</h2>
              <input type="name" name="" placeholder="Full Name" />
              <br />
              <input type="email" name="" placeholder="Email Address" />
              <br />
              <input type="password" name="" placeholder="Create password" />
              <br />
              <input type="password" name="" placeholder="Confirm Password" />
              <br />
              <input type="submit" name="" value="Signup" />
              <br />
              <p class="signup">
                Already have an account ?
                  <Link to="/login">Login</Link>
                  
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
