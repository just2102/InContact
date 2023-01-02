import Header from "./Header";
import { useEffect } from "react";
import axios from "axios";
import { setCurrentUser, setCurrentUserAvatar, toggleIsFetching, setUserNotFound } from "../../Redux/authReducer";
import { connect } from "react-redux";


const HeaderAPIComponent = (props) => {
  useEffect(() => {
    // fetch user info ONLY if the user hasn't authorized yet AND if the user either doesn't exist (false) or we don't know if he exists yet (undefined)
    if (props.isAuthorized === false && (props.doesUserExist === undefined || props.doesUserExist === false )) {
      props.toggleIsFetching(true);
      axios
        .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
          withCredentials: true,
        })
        .then((response) => {
          if (response.data.resultCode === 0) {
            props.setCurrentUser(
              response.data.data.id,
              response.data.data.login,
              response.data.data.email,
            );
            // ask for user profile to extract avatar with another get request, but only initialize it after the user's authorized
            // if (props.isAuthorized) {
            //   axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response2=>{
            //     props.setCurrentUserAvatar(response2.data.photos.small)
            //   })
            // }
            props.toggleIsFetching(false);
          } else if (response.data.resultCode !== 0) {props.toggleIsFetching(false); props.setUserNotFound()}
        });
    }
  });

  return (
    <Header
      currentUser={props.currentUser}

      isFetching={props.isFetching}
      isAuthorized={props.isAuthorized}
    ></Header>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser,

    isAuthorized: state.auth.isAuthorized,
    isFetching: state.auth.isFetching,
    doesUserExist: state.auth.doesUserExist
  };
}

const HeaderContainer = connect(mapStateToProps, {
  setCurrentUser,
  setCurrentUserAvatar,
  toggleIsFetching,
  setUserNotFound,
})(HeaderAPIComponent);

export default HeaderContainer;
