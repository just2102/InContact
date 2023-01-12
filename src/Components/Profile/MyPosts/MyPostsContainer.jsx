import { connect } from "react-redux";
import { compose } from "redux";
import { addPost } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

function mapStateToProps(state) {
  return {
    postsData: state.profilePage.postsData,
    isAuthorized: state.auth.isAuthorized,
  };
}


export default compose(
  connect(mapStateToProps, {addPost})
) (MyPosts);
