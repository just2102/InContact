import { useDispatch, useSelector } from "react-redux";
import { requestLogin } from "../../Redux/authReducer";
import LoginForm from "./LoginForm";
import { Navigate, useLocation } from "react-router-dom";

const LoginContainer = (props) => {
    const failedLogin  = useSelector((state) => state.auth.failedLogin)
    const botSuspicion = useSelector((state)=> state.auth.botSuspicion)
    const captcha      = useSelector((state)=> state.auth.captcha)
    const dispatch = useDispatch()
    function onFormSend (email, password, rememberMe, captcha) {
        dispatch(requestLogin(email,password,rememberMe, captcha))
    }
    const isAuthorized = useSelector((state)=> state.auth.isAuthorized)
    return (
        isAuthorized 
        ? <Navigate to="/profile/me"></Navigate>
        : <LoginForm onFormSend={onFormSend} failedLogin={failedLogin} botSuspicion={botSuspicion} captcha={captcha}></LoginForm>
     );
}

export default LoginContainer