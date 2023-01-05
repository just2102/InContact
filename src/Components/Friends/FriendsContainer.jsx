import { connect } from "react-redux";
import Friends from "./Friends"

function mapStateToProps(state) {
    return {
        friends: state.friendsPage.friends,

        currentUser:    state.auth.currentUser,
        isAuthorized:   state.auth.isAuthorized,

    }
}
function mapDispatchToProps(dispatch) {
    //nothing yet
}

const FriendsContainer = connect(mapStateToProps, null) (Friends)

 
export default FriendsContainer;