import image1 from "../img/post1.jpg";
import image2 from "../img/post2.jpg";
import { profileAPI } from "../API/api";

const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";
const TOGGLE_IS_GETTING_PROFILE = "TOGGLE_IS_GETTING_PROFILE";
let initialState = {
  currentUser: {
    id: 666666,
    name: "Eli K.",
    dob: "01.01.1999",
    education: "MIT",
    username: "just2102",
    status: "I'm building this social network",
  },
  postsData: [
    { id: 1, body: "It's my first post here!", image: image1, likeCount: 10 },
    { id: 2, body: "Howdy", image: image2, likeCount: 0 },
    { id: 3, body: "edited post..", likeCount: 5 },
    { id: 4, body: "dada", likeCount: 3 },
  ],
  newPostText: "",
  profile: null,
  status: undefined,
  isGettingProfile: false,
};

export const addPost = (body) => ({ type: ADD_POST_SUCCESS,  body});

const setProfile = (profile) => ({ type: SET_PROFILE, profile });
const setStatus = (status) => ({ type: SET_STATUS, status });
const toggleIsGettingProfile = (isGetting) => ({
  type: TOGGLE_IS_GETTING_PROFILE,
  isGetting,
});

export function getProfile(userId) {
  return function (dispatch) {
    dispatch(toggleIsGettingProfile(true));

    profileAPI.getProfile(userId).then((data) => {
      dispatch(setProfile(data));
      dispatch(toggleIsGettingProfile(false));
    });
  };
}
export function getStatus(userId) {
  return function (dispatch) {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
}
export function updateStatus(status) {
  return function (dispatch) {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_SUCCESS:
      let lastPostId = state.postsData.length
      let newPost = {id:lastPostId+1, body: action.body, likeCount:0}
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case TOGGLE_IS_GETTING_PROFILE:
      return {
        ...state,
        isGettingProfile: action.isGetting,
      };
    default:
      return state;
  }
};
export default profileReducer;
