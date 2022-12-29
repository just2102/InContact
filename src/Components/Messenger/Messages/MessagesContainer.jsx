import Messages from "./Messages";

import {
  sendMessage,
  updateNewMessageText,
} from "../../../Redux/messengerReducer";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    messagesData: state.messengerPage.messagesData,
    dialoguesData: state.messengerPage.dialoguesData,
    newMessageText: state.messengerPage.newMessageText,
  };
}

const MessagesContainer = connect(
  mapStateToProps,
  {
    sendMessage,
    updateNewMessageText,
  }
)(Messages);

export default MessagesContainer;
