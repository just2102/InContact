import Post from "./Post/Post";
import image1 from '../../../img/post1.jpg'
import image2 from '../../../img/post2.jpg'

const MyPosts = () => {

    return ( 
        <div className="user-section_posts">
        <h2>My posts</h2>
        
        <div id="user-section_form">
          <textarea id="post" name="post"
          placeholder="What's on your mind, ?">
          </textarea>
          <button id="add-post">Post</button>
        </div>

        <div className="posts">
            <Post message="Howdy" image={image1} likeCount={125}></Post>
            <Post message="It's my first post here!" image={image2} likeCount={83}></Post>
        </div>

      </div>
     );
}
 
export default MyPosts;