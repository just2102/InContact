import React from 'react'
import MyPostsForm from './MyPostsForm';
import Post from "./Post/Post";

//styles for this component are defined in the 'Profile.css'

const MyPosts = (props) => {
  let posts = props.postsData

  let postsMapped = posts.map(post=> {
    return <Post body={post.body} image={post.image} likeCount={post.likeCount} key={post.id}></Post>
  })

  function onAddPost (body) {
    props.addPost(body)
  }
    return ( 
        <div className="user-section_posts">
        <h2>My posts</h2>
        
        {props.isAuthorized && <MyPostsForm onAddPost={onAddPost}/>}

        <div className="posts">
          {postsMapped}
        </div>

      </div>
     );
}
 
export default MyPosts;