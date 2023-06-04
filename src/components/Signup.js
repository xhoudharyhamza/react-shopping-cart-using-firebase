import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Error from "./Error";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Signup = () => {
  const [error, setError] = useState(null);
  const [signupCredentials, setSignupCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  let signupUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      signupCredentials.email,
      signupCredentials.password
    )
      .then((userCredential) => {
        setError(null);
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="container">
      <div className="signup">
        <div className="signup-form">
          <h2>Signup</h2>
          {error && <Error error={error} />}
          <form onSubmit={signupUser}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="Enter name"
                required
                name="name"
                value={signupCredentials.name}
                onChange={(e) => {
                  setSignupCredentials({
                    ...signupCredentials,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
                name="email"
                value={signupCredentials.email}
                onChange={(e) => {
                  setSignupCredentials({
                    ...signupCredentials,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                required
                value={signupCredentials.password}
                onChange={(e) => {
                  setSignupCredentials({
                    ...signupCredentials,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              SignUp
            </button>
          </form>
          <div className="text-center">
            <p className="mt-2">Already Have an Account?</p>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", margin: 0, padding: 0 }}
            >
              SignIn Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
