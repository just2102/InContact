import s from "./Message.module.css"

const Message = (props) => {
    let msgBody = props.msgBody
    let sender = props.sender
    let avatar = props.avatar
    return ( 
        <div className={s.message}>
            <div className={s.message_sender_avatar}><img src={avatar} alt="" /></div>
            <div className={s.message_sender}>{sender}</div>
            <div className={s.message_body}>
                {msgBody}
            </div>
        </div>
     );
}
 
export default Message;