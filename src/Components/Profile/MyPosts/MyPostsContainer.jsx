import { connect } from "react-redux";
import { compose } from "redux";
import { addPost, updateNewPostText } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

function mapStateToProps(state) {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
}


export default compose(
  connect(mapStateToProps, {addPost, updateNewPostText})
) (MyPosts);
