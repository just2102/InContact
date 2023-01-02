import Header from "./Header";
import { useEffect } from "react";
import axios from "axios";
import { setCurrentUser, setCurrentUserAvatar, toggleIsFetching } from "../../Redux/authReducer";
import { connect } from "react-redux";


const HeaderAPIComponent = (props) => {
  useEffect(() => {
    if (props.isAuthorized === false) {
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
            if (props.isAuthorized) {
              axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response2=>{
                props.setCurrentUserAvatar(response2.data.photos.small)
              })
            }
            props.toggleIsFetching(false);
          } else {props.toggleIsFetching(false)}
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
  };
}

const HeaderContainer = connect(mapStateToProps, {
  setCurrentUser,
  setCurrentUserAvatar,
  toggleIsFetching,
})(HeaderAPIComponent);

export default HeaderContainer;
