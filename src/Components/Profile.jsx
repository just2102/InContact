import { useState } from "react";

const Profile = () => {
    const [user, setUser] = useState({
        name:'Eli K.',
        dob: '01.01.1999',
        education: 'MIT',
        username: 'just2102'
    });


    return ( 
        <div className="content">
        <div id="user-image"><img src="https://media.istockphoto.com/id/139392762/photo/venetian-mask.jpg?s=170667a&w=0&k=20&c=wgFV5biG18-7ApTtgmXieuCsYFEIZiQWJa02eqbQp3s=" alt="" /></div>
        <div className="user-section">
          <div id="user-data">
            <h2 id="user-name">{user.name}</h2>
            <p>Date of Birth: {user.dob}</p>
            <p>Education: {user.education}</p>
            <p>Username: @{user.username} </p>
          </div>

          <div id="user-post-form">
            <textarea id="post" name="post"
            rows="5" cols="30" placeholder="What's on your mind, ?">
            </textarea>
            <button id="add-post">Post</button>
          </div>

          <div className="user-posts">
              <div className="post">Some post...</div>
            </div>

        </div>
      </div>
     );
}
 
export default Profile;