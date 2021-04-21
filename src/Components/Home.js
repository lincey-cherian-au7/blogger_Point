import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {selectSignedIn,
  setSignedIn, setUserData} from "../features/userDetails";

import "../styling/home.css";

const Home = () => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? (
        <div className="login__message">
          <h2>📖</h2>
          <h1 style={{textDecoration:"none"}}>Readers world...</h1>
          <p>
            Signup and start reading some quality blogs.
          </p>
          <GoogleLogin
            clientId="1093779233640-adgddrghaatn0k14gn4gu9k995nd7hll.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login__button"
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;