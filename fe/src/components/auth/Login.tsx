import React, { useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";

const Login = ({ login, auth: { isAuthenticated } }) => {
  const email = useRef<any>(null);
  const password = useRef<any>(null);
  const navigate = useNavigate();

  if (isAuthenticated) navigate("/");

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.current && password.current) {
      login(email.current.value, password.current.value);
    }
  };
  return (
    <div className="form-page">
      <h1>Login</h1>
      <Alert />
      <form onSubmit={(e) => onSubmit(e)}>
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(Login);
