import React from 'react'
import Post from "./Post/Post";

//styles for this component are defined in the 'Profile.css'

const MyPosts = (props) => {
  let posts = props.postsData

  

  let postsMapped = posts.map(post=> {
    return <Post body={post.body} image={post.image} likeCount={post.likeCount}></Post>
  })

  let newPostElement = React.createRef()
  

  function addPost () {
    props.addPost()
  }

  function onPostChange() {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

    return ( 
        <div className="user-section_posts">
        <h2>My posts</h2>
        
        <div id="user-section_form">
          <textarea name="post"
          placeholder="What's on your mind, ?"
          onChange={onPostChange}
          value={props.newPostText}
          ref={newPostElement}>
          </textarea>
          <button id="add-post" onClick={addPost}>Post</button>
        </div>

        <div className="posts">
          {postsMapped}
        </div>

      </div>
     );
}
 
export default MyPosts;