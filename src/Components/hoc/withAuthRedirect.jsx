import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
function mapAuthPropsToState (state) {
    return {
        isAuthorized: state.auth.isAuthorized
    }
}

function withAuthRedirect (Component) {
    const ComponentWrapper = (props) => {
        if (props.isAuthorized===false) return <Navigate to="/login"></Navigate>
        return <Component {...props}></Component>
    }
    let componentWrapperConnected = connect(mapAuthPropsToState) (ComponentWrapper)
    return componentWrapperConnected
}
export default withAuthRedirect