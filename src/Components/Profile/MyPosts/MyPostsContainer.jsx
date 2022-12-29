import { connect } from "react-redux";
import { addPost, updateNewPostText } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

function mapStateToProps(state) {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
}

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText,
})(MyPosts);

export default MyPostsContainer;
