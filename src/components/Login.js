import React, { useState } from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from "../redux/slices/userSlice";
import Error from './Error';

const Login = () => {
    let navigate=useNavigate()
  const [loginCredentials, setLoginCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const loginUser = (e) => {
    e.preventDefault();
    setError(null);
    signInWithEmailAndPassword(auth, loginCredentials.email, loginCredentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser(user));
        navigate('/')
        localStorage.setItem("user", JSON.stringify(user))
      })
      .catch((error) => {
        setError("Invalid Credentials");
      });
  };

  return (
    <div className="container">
      <div className='login'>
        <div className="login-form">
          <h2>Login</h2>
          {error && <Error error={error} />}
          <form onSubmit={loginUser}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
                name='email'
                value={loginCredentials.email}
                onChange={(e) => { setLoginCredentials({ ...loginCredentials, email: e.target.value }) }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                name='password'
                required
                value={loginCredentials.password}
                onChange={(e) => { setLoginCredentials({ ...loginCredentials, password: e.target.value }) }}
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <div className="text-center">
            <p className='mt-2'>Didn't Have an Account?</p>
            <Link to={"/signup"} style={{ textDecoration: "none", margin: 0, padding: 0 }}>Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
