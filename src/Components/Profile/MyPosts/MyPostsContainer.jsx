import React from 'react'
import { addPostCreator, updateNewPostTextCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState()

  function addPost () {
    props.store.dispatch(addPostCreator())
  }

  function onPostChange(text) {
    props.store.dispatch(updateNewPostTextCreator(text))
  }
    return ( 
        <MyPosts addPost={addPost} 
        updateNewPostText={onPostChange} 
        postsData = {state.profilePage.postsData}
        newPostText = {state.profilePage.newPostText}>
        </MyPosts>
     );
}
 
export default MyPostsContainer;