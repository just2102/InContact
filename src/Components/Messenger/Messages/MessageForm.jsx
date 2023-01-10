import { useForm } from "react-hook-form";
import s from "./Messages.module.css"


const MessageForm = (props) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    
    const onSubmit = (data) => {
        props.onMessageSend(data.msg)
        reset({msg: ""})
    }
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.textarea}></div>
            <textarea type="text" id="msg" {...register("msg", {minLength:1})}/>
            <input type="submit" id={s.send_message_button} value={"Send"}/>
        </form>
     );
}
 
export default MessageForm;