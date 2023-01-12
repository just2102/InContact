import { authAPI } from "../API/api";
import lenin from "../img/lenin.png";

const SET_CURRENT_USER = "SET_CURRENT_USER";
const SET_CURRENT_USER_AVATAR = "SET_CURRENT_USER_AVATAR";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_USER_NOT_AUTHORIZED = "SET_USER_NOT_AUTHORIZED";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
// makes reducer dirty but necessary to display error messages on failed login attempts
const SET_FAILED_LOGIN  = "SET_FAILED_LOGIN"
const SET_BOT_SUSPICION = "SET_BOT_SUSPICION"
const SET_CAPTCHA       = "SET_CAPTCHA"

let initialState = {
  currentUser: undefined,
  isFetching: false,
  isAuthorized: undefined,

  failedLogin: false,
  botSuspicion: false,
  captcha: undefined
};
const toggleIsFetching = (status) => ({
  type: TOGGLE_IS_FETCHING,
  status: status,
});
const setCurrentUser = (id, login, email, isAuthorized) => ({
  type: SET_CURRENT_USER,
  currentUser: { id, login, email, isAuthorized },
});
export const setCurrentUserAvatar = (avatar) => ({
  type: SET_CURRENT_USER_AVATAR,
  avatar,
});
const setUserNotAuthorzied = () => ({ type: SET_USER_NOT_AUTHORIZED });
const setFailedLogin = (isFailed) => ({type: SET_FAILED_LOGIN, isFailed})
const setBotSuspicion = (isBot) => ({type: SET_BOT_SUSPICION, isBot})
export function getCurrentUserAuthData() {
  return function (dispatch) {
    dispatch(toggleIsFetching(true));
    authAPI.whoAmI().then((data) => {
      if (data.resultCode === 0) {
        dispatch(
          setCurrentUser(data.data.id, data.data.login, data.data.email, true)
        );
      } else dispatch(setUserNotAuthorzied());
      dispatch(toggleIsFetching(false));
    });
  };
}
const setCaptcha = (captcha) => ({type: SET_CAPTCHA, captcha})
const getCaptcha = () => {
  return (dispatch) => {
    authAPI.getCaptcha().then(response=>{
      dispatch(setCaptcha(response.data.url))
    })
  }
}
export function requestLogin(email, password, rememberMe, captcha) {  
  return function (dispatch) {
    dispatch(toggleIsFetching(true))
    authAPI.login(email, password, rememberMe, captcha).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getCurrentUserAuthData())
        dispatch(setBotSuspicion(false))
        dispatch(setFailedLogin(false))
        dispatch(setCaptcha(undefined))
      } else if (response.data.resultCode === 1) {
        dispatch(setFailedLogin(true))
      } else if (response.data.resultCode === 10) {
        dispatch(setFailedLogin(true))
        dispatch(dispatch(setBotSuspicion(true)))
        dispatch(getCaptcha())
      } dispatch(toggleIsFetching(false))
    });
  };
}

const logoutSuccess = () => ({type: LOGOUT_SUCCESS})
export function requestLogout() {
  return function (dispatch) {
    dispatch(toggleIsFetching(true))
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setCurrentUser(undefined,undefined,undefined, false))
        // dispatch(logoutSuccess())
      } dispatch(toggleIsFetching(false))
    });
  };
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser,
        isAuthorized: action.currentUser.isAuthorized,
      };
    case SET_CURRENT_USER_AVATAR:
      if (action.avatar) {
        let stateCopy = { ...state };
        stateCopy.currentUser = { ...state.currentUser };
        stateCopy.currentUser.avatar = action.avatar;
        return stateCopy;
      } else {
        return state;
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.status,
      };
    case SET_USER_NOT_AUTHORIZED:
      return {
        ...state,
        isAuthorized: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthorized:false,
        currentUser: undefined
      }
    case SET_FAILED_LOGIN:
      return {
        ...state,
        failedLogin: action.isFailed
      }
    case SET_BOT_SUSPICION:
      return {
        ...state,
        botSuspicion: true
      }
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.captcha
      }
    default:
      return state;
  }
};
export default authReducer;
