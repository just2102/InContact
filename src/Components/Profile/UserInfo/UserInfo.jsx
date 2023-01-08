import lenin from "../../../img/lenin.png"
import ProfileStatus from "./ProfileStatus";

const UserInfo = (props) => {
    const profile = props.profile
    return ( 
        <div className="user-section">
        <div id="user-section_image">
          {/* <img src="https://media.istockphoto.com/id/139392762/photo/venetian-mask.jpg?s=170667a&w=0&k=20&c=wgFV5biG18-7ApTtgmXieuCsYFEIZiQWJa02eqbQp3s=" alt="" /> */}
          {!profile.photos.large || !profile.photos.small
          ? <img src={lenin} alt="" /> 
          : <img src={profile.photos.large} alt="" />
          }
          </div>


        <div id="user-section_data">
          <h2 id="user-name">{profile.fullName}</h2>
          <ProfileStatus status={'Hello everyone!!!'}/>
          <p>Date of Birth: {profile.dob}</p>
          <p>Education: {profile.education}</p>
          <p>Username: @{profile.username} </p>
          <p>About me: {profile.aboutMe}</p>
        </div>

        <div className="user-section_photos">
          <h4>5 photos</h4>
          {/* <a href="" id="view-all-photos">All</a> */}
          <div className="user-section_photos-photos_container">

          </div>
        </div>


      </div>
     );
}
 
export default UserInfo;