import { useDispatch, useSelector } from "react-redux";
import { requestLogin } from "../../Redux/authReducer";
import Login from "./Login";
import { Navigate } from "react-router-dom";

const LoginContainer = (props) => {
    const dispatch = useDispatch()
    function onFormSend (email, password, rememberMe) {
        dispatch(requestLogin(email,password,rememberMe))
    }
    const isAuthorized = useSelector((state)=> state.auth.isAuthorized)
    return (
        isAuthorized 
        ? <Navigate to="/profile/me"></Navigate>
        : <Login onFormSend={onFormSend}></Login>
     );
}

export default LoginContainer