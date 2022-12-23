import React from "react";
import Messages from "./Messages";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../../Redux/messengerReducer";

const MessagesContainer = (props) => {
    let state = props.store.getState().messengerPage

    let messagesData = state.messagesData
    let dialoguesData = state.dialoguesData
    let newMessageText = state.newMessageText

    function sendMessage() {
        props.store.dispatch(sendMessageCreator())
    }
    function onMessageChange (text) {
        props.store.dispatch(updateNewMessageTextCreator(text))
    }

    return ( 
        <Messages 
        messagesData={messagesData} 
        dialoguesData={dialoguesData}
        sendMessage={sendMessage}
        onMessageChange={onMessageChange}
        newMessageText={newMessageText}></Messages>
     );
}
 
export default MessagesContainer;