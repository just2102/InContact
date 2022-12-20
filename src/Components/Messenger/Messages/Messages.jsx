import React from "react";
import s from "./Messages.module.css"
import Message from "./Message/Message";

const Messages = (props) => {
    let messages = props.messagesData
    let dialogues = props.dialoguesData

     for (let i = 0 ; i<dialogues.length; i++) {
        for (let j = 0 ; j<messages.length; j++) {
            if(dialogues[i].name==messages[j].sender) {
                messages[j].avatar = dialogues[i].avatar
            }
        }
    }

    let mappedMessagesData = messages.map(message=> {
        return <Message msgBody={message.body} sender={message.sender} avatar={message.avatar}></Message>
    })

    let messageElement = React.createRef()

    function sendMessage() {
        let action = {type:"SEND-MESSAGE"}
        props.dispatch(action)
    }
    function onMessageChange() {
        let message = messageElement.current.value;
        let action = {type:"UPDATE-NEW-MESSAGE-TEXT", text: message}
        props.dispatch(action)
    }

    return ( 
        <div className={s.messages}>
            <div className={s.messages_header}>
                messages_header
            </div>

            {mappedMessagesData}


            <div className={s.textarea}>
                <textarea name="msg" id="msg" 
                ref={messageElement}
                value={props.newMessageText}
                onChange={onMessageChange}
                >
                </textarea>
                <button id={s.send_message_button} onClick={sendMessage} >Send</button>
            </div>

        </div>
     );
}
 
export default Messages;