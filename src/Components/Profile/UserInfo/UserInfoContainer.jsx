import { connect } from "react-redux";
import UserInfo from "./UserInfo";


function mapStateToProps(state) {
    return {
        currentUser: state.profilePage.currentUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
        
    }
}

const UserInfoContainer = connect(mapStateToProps, null) (UserInfo)


export default UserInfoContainer;