import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, createProfile } from "../../actions/profile";

const Profile = ({ profile, getCurrentProfile, createProfile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  const number = useRef<any>(null);

  const onClick = () => {
    if (number.current) createProfile({ phone: number.current.value });
  };

  if (!profile.profile)
    return (
      <div className="profile">
        <h1>Verify you account</h1>
        <p>Please give us your phone number</p>
        <input
          placeholder="Phone number"
          type="number"
          className="input"
          ref={number}
        ></input>
        <div>
          <button onClick={onClick} className="btn">
            Add Number
          </button>
        </div>
      </div>
    );

  return (
    <div className="profile">
      <h1>Profile</h1>
      <h2>Favorite Movies</h2>
      <div className="favorite">
        {profile.profile.movies.length === 0 ? (
          <p>No favorites</p>
        ) : (
          profile.profile.movies.map((m) => <p>Movie</p>)
        )}
      </div>
      <h2>Favorite TV Shows</h2>
      <div className="favorite">
        {profile.profile.movies.length === 0 ? (
          <p>No favorites</p>
        ) : (
          profile.profile.series.map((s) => <p>Tv Show</p>)
        )}
      </div>
    </div>
  );
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, createProfile })(
  Profile
);
