import React from "react";
import s from "./Messages.module.css"
import MessageForm from "./MessageForm";

const Messages = (props) => {
    let messages = props.messagesData
    // let dialogues = props.dialoguesData

    let mappedMessagesData = messages.map(message=> {
        return (
            <div className={s.message}>
                <div className={s.message_sender_avatar}>ava</div>
                <div className={s.message_sender}>{message.senderId===props.currentUser.id ? "Me" : message.senderName}</div>
                <div className={s.message_text}>{message.body}</div>
            </div>
        )
    })
    function onMessageSend(msg) {
        props.onMessageSend(msg)
    }
    // function onMessageChange (e) {
    //     let text = e.target.value
    //     props.updateNewMessageText(text)
    // }
    return ( 
        <div className={s.messages}>
            <div className={s.messages_header}>
                messages_header
            </div>
            <div>{mappedMessagesData}</div>
            <MessageForm onMessageSend = {onMessageSend}></MessageForm>
        </div>
     );
}
 
export default Messages;