import React from 'react';
import Moon from "../images/moon.jpg"
import "../styles/login.css"
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';


function Login() {
    const [email,setEmail]= useState("");
  return (
      <section>
        <div class="container2">
            <div class="user signinBx">
                <div class="imgBx"><img src={Moon}/></div>
                <div class="formBx">
                    <form>
                        <h2>Sign In</h2>
                        <input type="email" name="" placeholder="Email Address"/>
                        <br/>
                        <input type="password" name="" placeholder="Password"/>
                        <br/>
                        <input type="submit" name="" value="Login"/>
                        <br/>
                        <p class="signup">Don't have an account ?<Link to="/signup">Signup</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Login
