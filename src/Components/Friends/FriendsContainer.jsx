import { connect } from "react-redux";
import { compose } from "redux";
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

 
export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{})
)(Friends);