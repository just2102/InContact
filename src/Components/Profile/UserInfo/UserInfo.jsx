const UserInfo = (props) => {
    const user = props.user

    return ( 
        <div className="user-section">
        <div id="user-section_image"><img src="https://media.istockphoto.com/id/139392762/photo/venetian-mask.jpg?s=170667a&w=0&k=20&c=wgFV5biG18-7ApTtgmXieuCsYFEIZiQWJa02eqbQp3s=" alt="" /></div>


        <div id="user-section_data">
          <h2 id="user-name">{user.name}</h2>
          <h3 id="user-status">{user.status}</h3>
          <p>Date of Birth: {user.dob}</p>
          <p>Education: {user.education}</p>
          <p>Username: @{user.username} </p>
        </div>

        <div className="user-section_photos">
          <h4>5 photos</h4>
          <a href="" id="view-all-photos">All</a>
          <div className="user-section_photos-photos_container">

          </div>
        </div>

      </div>
     );
}
 
export default UserInfo;