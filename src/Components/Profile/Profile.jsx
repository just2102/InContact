import './Profile.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
//import UserInfoContainer from "./UserInfo/UserInfoContainer";
import UserInfo from "./UserInfo/UserInfo";
import Preloader from '../Common/Preloader';
import { Navigate } from 'react-router-dom';

const Profile = (props) => {
    // const [user, setUser] = useState({
    //     name:'Eli K.',
    //     dob: '01.01.1999',
    //     education: 'MIT',
    //     username: 'just2102',
    //     status: "I'm building this social network"
    // });
    if (!props.isAuthorized) {
      return <Navigate to="/login"></Navigate>
    }
    return ( 
      <div className="profile">
        {
        props.profile===null || props.profile === undefined || props.isGettingProfile ? <Preloader/>
        :<UserInfo profile={props.profile} />
        }

        <MyPostsContainer></MyPostsContainer>
      </div>
     );
}
 
export default Profile;