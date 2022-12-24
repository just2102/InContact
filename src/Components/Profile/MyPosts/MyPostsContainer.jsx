import { connect } from 'react-redux';
import { addPostCreator, updateNewPostTextCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';


function mapStateToProps (state) {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}
function mapDispatchToProps (dispatch) {
  return {
    updateNewPostText: (text) => {dispatch(updateNewPostTextCreator(text))},
    addPost: () => {dispatch(addPostCreator())}
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts)
 
export default MyPostsContainer;