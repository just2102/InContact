import image1 from '../img/post1.jpg'
import image2 from '../img/post2.jpg'
import { profileAPI } from '../API/api'

const ADD_POST              = "ADD-POST"
const UPDATE_NEW_POST_TEXT  = "UPDATE-NEW-POST-TEXT"
const SET_PROFILE           = "SET_PROFILE"
const TOGGLE_IS_GETTING_PROFILE = "TOGGLE_IS_GETTING_PROFILE"
let initialState = {
  currentUser: 
  {
    id: 666666,
    name:'Eli K.',
    dob: '01.01.1999',
    education: 'MIT',
    username: 'just2102',
    status: "I'm building this social network"
  },
  postsData:
  [
      {id:1,body:"It's my first post here!",image:image1,likeCount:10},
      {id:2,body:"Howdy",image:image2,likeCount:0},
      {id:3,body:"edited post..",likeCount:5},
      {id:4,body:"dada",likeCount:3}  
  ],
  newPostText:'',
  profile: null,
  isGettingProfile: false
}

export const addPost = ()                 => ({type: ADD_POST})
export const updateNewPostText = (text)   => ({type: UPDATE_NEW_POST_TEXT, newText: text})
const setProfile = (profile)              => ({type: SET_PROFILE, profile})
const toggleIsGettingProfile = (isGetting)=> ({type: TOGGLE_IS_GETTING_PROFILE, isGetting})

export function getProfile (userId) {
  return function(dispatch) {
    dispatch(toggleIsGettingProfile(true))

    profileAPI.getProfile(userId).then(data=>{
      dispatch(setProfile(data))
      dispatch(toggleIsGettingProfile(false))
    })
  }
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            if (state.newPostText!=="") {
                let lastPostId = state.postsData[state.postsData.length-1].id
                let newPost = 
                {
                    id: lastPostId + 1, 
                    body: state.newPostText, 
                    likeCount: 0
                }
                return {
                  ...state,
                  postsData: [...state.postsData, newPost],
                  newPostText: ''
                }
            }
        break
        case UPDATE_NEW_POST_TEXT:
          return {
            ...state,
            newPostText: action.newText
          }
        case SET_PROFILE:
          return {
            ...state,
            profile: action.profile
          }
        case TOGGLE_IS_GETTING_PROFILE:
          return {
            ...state,
            isGettingProfile: action.isGetting
          }
        default:
            return state
    }
}
export default profileReducer