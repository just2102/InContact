import { connect } from "react-redux";
import Messenger from "./Messenger";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { compose } from "redux";

function mapStateToProps (state) {
    return {
        currentUser:    state.auth.currentUser,
    }
}

const MessengerContainer = compose(
    connect(mapStateToProps,{}),
    withAuthRedirect
)(Messenger)

export default MessengerContainer