import { useState } from "react";
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";

const Profile = (props) => {
    const [user, setUser] = useState({
        name:'Eli K.',
        dob: '01.01.1999',
        education: 'MIT',
        username: 'just2102',
        status: "I'm building this social network"
    });
    return ( 
      <div className="profile">
        <UserInfo user={user}></UserInfo>
        <MyPosts 
        state={props.state}
        dispatch={props.dispatch}
        ></MyPosts>
      </div>
     );
}
 
export default Profile;