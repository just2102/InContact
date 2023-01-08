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
        return <Message msgText={message.text} sender={message.sender} avatar={message.avatar} key={message.id}></Message>
    })

    function onSendMessage() {
        props.sendMessage()
    }
    function onMessageChange (e) {
        let text = e.target.value
        props.updateNewMessageText(text)
    }

    return ( 
        <div className={s.messages}>
            <div className={s.messages_header}>
                messages_header
            </div>

            {mappedMessagesData}


            <div className={s.textarea}>
                <textarea name="msg" id="msg" 
                value={props.newMessageText}
                onChange={onMessageChange}
                >
                </textarea>
                <button id={s.send_message_button} onClick={onSendMessage} >Send</button>
            </div>

        </div>
     );
}
 
export default Messages;