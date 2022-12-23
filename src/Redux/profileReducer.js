import image1 from '../img/post1.jpg'
import image2 from '../img/post2.jpg'

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
  currentUser: 
  {
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
  newPostText:'some new post text!'
}

export const addPostCreator = () => {
    return {
      type: ADD_POST
    }
  }
export const updateNewPostTextCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
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
                state.postsData.push(newPost)
                state.newPostText=''
            } 
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText=action.newText;
            return state
        default:
            return state
    }
}
export default profileReducer