import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [flag, setFlag] = useState(false);

  if (loading) return <p>Loading</p>;
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          Movies<span className="db">DB</span>
        </Link>
        <i
          className="bi bi-three-dots-vertical toggle"
          onClick={() => setFlag(!flag)}
        ></i>
      </div>
      <div className={flag ? "navbar-options" : "navbar-options disabled"}>
        <Link to="/movies" className="link">
          Movies <i className="bi bi-film"></i>
        </Link>
        <Link to="/series" className="link">
          Series <i className="bi bi-tv"></i>
        </Link>
        {isAuthenticated ? (
          <>
            <Link to="/" className="link" onClick={logout}>
              Logout <i className="bi bi-box-arrow-in-right"></i>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="link">
              Login <i className="bi bi-box-arrow-in-left"></i>
            </Link>
            <Link to="/register" className="link">
              Register <i className="bi bi-person"></i>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
