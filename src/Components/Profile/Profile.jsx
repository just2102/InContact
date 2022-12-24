import { useState } from "react";
import './Profile.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserInfoContainer from "./UserInfo/UserInfoContainer";

const Profile = (props) => {
    // const [user, setUser] = useState({
    //     name:'Eli K.',
    //     dob: '01.01.1999',
    //     education: 'MIT',
    //     username: 'just2102',
    //     status: "I'm building this social network"
    // });
    return ( 
      <div className="profile">
        <UserInfoContainer 
        //store={props.store}
        ></UserInfoContainer>
        <MyPostsContainer 
        //store={props.store}
        ></MyPostsContainer>
      </div>
     );
}
 
export default Profile;