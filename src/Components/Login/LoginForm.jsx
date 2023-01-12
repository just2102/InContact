import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const LoginForm = (props) => {
    const {
      register,
      handleSubmit,
      formState: { isDirty, dirtyFields, touchedFields, errors },
      reset
    } = useForm({mode:"all"}, {defaultValues: {email: "", password: "", captcha: ""}});
    function onSubmit(data) {
      props.onFormSend(data.email, data.password, data.rememberMe, data.captcha)
      reset()
    }
    return (
      <div className="login_container">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email:</label>
          <input
            className={errors.email && "invalid_input"}
            type="email"
            id="email"
            {...register("email", {
              required: "This field is required",
              minLength: { value: 4, message: "Email cannot be shorter than 4 symbols!" },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <label htmlFor="password">Password:</label>
          <input
            className={errors.email && "invalid_input"}
            type="password"
            id="password"
            {...register("password", {
              required: "This field is required",
              minLength: {value: 3,message: "Password cannot be shorter than 3 symbols!",},
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <label htmlFor="rememberMe">Remember me</label>
          <input type="checkbox" id="rememberMe" name="rememberMe" {...register("rememberMe")}/>
          {(props.botSuspicion && props.captcha) &&
          <>
            <img src={props.captcha} alt="" />
            <label htmlFor="captcha">Enter captcha:</label>
            <input type="text" name="captcha" id="captcha" {...register("captcha", {required:"This field is required"})}/>
          </>
          }
          {props.failedLogin && <span>Email or password do not match our data, please try again!</span> }
          <input type="submit" />
        </form>
      </div>
    );
  };
  
  export default LoginForm;