import Header from "./Header";
import { useEffect } from "react";
import { setCurrentUserAvatar, getCurrentUserAuthData } from "../../Redux/authReducer";
import { connect } from "react-redux";


const HeaderAPIComponent = (props) => {
  useEffect(() => {
    // fetch user info ONLY if the user hasn't authorized yet AND if the user either doesn't exist (==false) or we don't know if he exists yet (==undefined)
    if (props.isAuthorized === undefined && (props.doesUserExist === undefined || props.doesUserExist === false )) {
      props.getCurrentUserAuthData()
    }
  }, [props.isAuthorized, props.doesUserExist]);

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
  setCurrentUserAvatar,

  getCurrentUserAuthData
})(HeaderAPIComponent);

export default HeaderContainer;
