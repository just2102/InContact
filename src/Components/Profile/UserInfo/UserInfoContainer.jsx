import UserInfo from "./UserInfo";

const UserInfoContainer = (props) => {

    let profileState = props.store.getState().profilePage
    let currentUser = profileState.currentUser

    return ( 
        <UserInfo  currentUser={currentUser}></UserInfo>
     );
}
 
export default UserInfoContainer;