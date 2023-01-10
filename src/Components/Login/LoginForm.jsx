import { useForm } from "react-hook-form";

const LoginForm = (props) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    function onSubmit(data) {
      props.onFormSend(data.email, data.password, data.rememberMe)
    }
    return (
      <>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email:</label>
          <input
            className={errors.email && "invalid_input"}
            type="email"
            id="email"
            {...register("email", {
              required: "This field is required",
              minLength: { value: 4, message: "Min length is 4..." },
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
              minLength: {
                value: 3,
                message: "Password cannot be shorter than 3 symbols!",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <label htmlFor="rememberMe">Remember me</label>
          <input type="checkbox" id="rememberMe" name="rememberMe" {...register("rememberMe")}/>
          <input type="submit" />
        </form>
      </>
    );
  };
  
  export default LoginForm;