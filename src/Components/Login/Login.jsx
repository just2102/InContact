import LoginForm from "./LoginForm";
const Login = (props) => {
  return (
    <div className="login_container">
      <LoginForm onFormSend={props.onFormSend}/>
    </div>
  );
};

export default Login;
