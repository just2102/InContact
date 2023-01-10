import { useForm } from "react-hook-form";
import s from "./Messages.module.css"

const MessageForm = (props) => {
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        props.onSendMessage(data.msg)
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