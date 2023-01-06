import { connect } from "react-redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import Friends from "./Friends"

function mapStateToProps(state) {
    return {
        friends: state.friendsPage.friends,

        currentUser:    state.auth.currentUser,
    }
}
function mapDispatchToProps(dispatch) {
    //nothing yet
}
let AuthRedirectComponent = withAuthRedirect(Friends)

const FriendsContainer = connect(mapStateToProps, null) (AuthRedirectComponent)

 
export default FriendsContainer;