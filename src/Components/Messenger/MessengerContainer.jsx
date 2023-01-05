import { connect } from "react-redux";
import Messenger from "./Messenger";

function mapStateToProps (state) {
    return {
        currentUser:    state.auth.currentUser,
        isAuthorized:   state.auth.isAuthorized
    }
}


const MessengerContainer = connect(mapStateToProps, {

}) (Messenger)

export default MessengerContainer