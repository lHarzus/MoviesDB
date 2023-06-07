import React, { useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";

const Register = ({ register, auth: { isAuthenticated } }) => {
  const email = useRef<any>(null);
  const password = useRef<any>(null);
  const name = useRef<any>(null);
  const navigate = useNavigate();

  if (isAuthenticated) navigate("/");

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.current && password.current && name.current) {
      register({
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      });
    }
  };
  return (
    <div className="form-page">
      <h1>Register</h1>
      <Alert />
      <form onSubmit={(e) => onSubmit(e)}>
        <h2>Name:</h2>
        <input
          placeholder="name"
          type="text"
          className="input"
          ref={name}
        ></input>
        <h2>Email:</h2>
        <input
          placeholder="email"
          type="email"
          className="input"
          ref={email}
        ></input>
        <h2>Password:</h2>
        <input
          placeholder="password"
          type="password"
          className="input"
          ref={password}
        ></input>
        <div>
          <input type="submit" value="Submit" className="btn"></input>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { register })(Register);
