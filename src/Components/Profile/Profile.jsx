import './Profile.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserInfo from "./UserInfo/UserInfo";
import Preloader from '../Common/Preloader';

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
        {
        props.profile===null || props.profile === undefined || props.isGettingProfile ? <Preloader/>
        :<UserInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        }

        <MyPostsContainer></MyPostsContainer>
      </div>
     );
}
 
export default Profile;