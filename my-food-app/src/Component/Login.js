import React from "react";
import image from "../../src/1.jpg";
import "./Login.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Login() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <img
        src={image}
        alt="backgroundimage"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "-1",
          objectFit: "cover",
        }}
      />
      <div
        className="Navbarforlogin"
        style={{
          position: "absolute",
          margin: "1em auto",
          width: "100vw",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">
          <button
            type="Home"
            className="btn btn-primary"
            style={{ margin: "1 em auto" }}
          >
            Back
          </button>
        </Link>
        <Link to="/Signup">
        <button
          type="Home"
          className="btn btn-primary"
          style={{ margin: "1 em auto" }}
        >
          Signup
        </button>
        </Link>
      </div>
      <div className="Login-wrapper" style={{ display: "flex" }}>
        <div className="Login-Information">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            beatae quas velit, dolor architecto commodi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            dolor delectus praesentium fuga quibusdam quos saepe, eligendi dicta
            totam laboriosam nihil ipsa esse ullam, non soluta expedita hic
            aspernatur assumenda.
          </p>
        </div>
        <form className="login">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
        </form>
      </div>
    </div>
  );
}
