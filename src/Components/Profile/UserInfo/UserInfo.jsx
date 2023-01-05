import lenin from "../../../img/lenin.png"

const UserInfo = (props) => {
    const user = props.profile
    return ( 
        <div className="user-section">
        <div id="user-section_image">
          {/* <img src="https://media.istockphoto.com/id/139392762/photo/venetian-mask.jpg?s=170667a&w=0&k=20&c=wgFV5biG18-7ApTtgmXieuCsYFEIZiQWJa02eqbQp3s=" alt="" /> */}
          {!user.photos.large || !user.photos.small
          ? <img src={lenin} alt="" /> 
          : <img src={user.photos.large} alt="" />
          }
          </div>


        <div id="user-section_data">
          <h2 id="user-name">{user.fullName}</h2>
          <h3 id="user-status">{user.status}</h3>
          <p>Date of Birth: {user.dob}</p>
          <p>Education: {user.education}</p>
          <p>Username: @{user.username} </p>
          <p>About me: {user.aboutMe}</p>
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