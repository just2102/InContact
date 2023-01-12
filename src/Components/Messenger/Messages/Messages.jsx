import React from "react";
import s from "./Messages.module.css";
import MessageForm from "./MessageForm";
import lenin from "../../../img/lenin.png";

const Messages = (props) => {
  let messages = props.messagesData;
  let dialogues = props.dialoguesData;
  function getSenderAvatar(senderId) {
    for (let i = 0; i < dialogues.length; i++) {
        if (senderId === dialogues[i].id && dialogues[i].photos.small) {
            return dialogues[i].photos.small;
        }
    }
    return lenin;
}

  let mappedMessagesData = messages.map((message) => {
    let avatar = getSenderAvatar(message.senderId);
    return (
      <div className={s.message}>
        <div className={s.message_sender_avatar}><img src={avatar} alt="" /></div>
        <div className={s.message_sender}>{message.senderId === props.currentUser.id ? "Me" : message.senderName}</div>
        <div className={s.message_text}>{message.body}</div>
      </div>
    );
  });
  function onMessageSend(msg) {
    props.onMessageSend(msg);
  }
  // function onMessageChange (e) {
  //     let text = e.target.value
  //     props.updateNewMessageText(text)
  // }
  return (
    <div className={s.messages}>
      <div className={s.messages_header}>messages_header</div>
      <div>{mappedMessagesData}</div>
      <MessageForm onMessageSend={onMessageSend}></MessageForm>
    </div>
  );
};

export default Messages;
