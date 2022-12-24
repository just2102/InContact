import { connect } from "react-redux";
import Friends from "./Friends"

function mapStateToProps(state) {
    return {
        state:state.friendsPage
    }
}
function mapDispatchToProps(dispatch) {
    //nothing yet
}

const FriendsContainer = connect(mapStateToProps, null) (Friends)

 
export default FriendsContainer;