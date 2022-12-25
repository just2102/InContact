import Messages from "./Messages";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../../Redux/messengerReducer";
import { connect } from "react-redux";

function mapStateToProps (state) {
    return {
        messagesData:state.messengerPage.messagesData,
        dialoguesData:state.messengerPage.dialoguesData,
        newMessageText:state.messengerPage.newMessageText
    }
}
function mapDispatchToProps (dispatch) {
    return {
        sendMessage:()=> {dispatch(sendMessageCreator())},
        updateNewMessageText:(text) => {dispatch(updateNewMessageTextCreator(text))}
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages)
 

export default MessagesContainer;