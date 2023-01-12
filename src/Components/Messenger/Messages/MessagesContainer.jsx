import Messages from "./Messages";
import {
  getMessages,
  sendMessage,
  // updateNewMessageText,
} from "../../../Redux/messengerReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MessagesContainer = (props) => {
  const params = useParams()
  const dispatch = useDispatch();
  const messagesData = useSelector(state=> state.messengerPage.messagesData)
  const dialoguesData = useSelector(state=> state.messengerPage.dialoguesData)
  const currentUser = useSelector(state=> state.auth.currentUser)
  useEffect(()=> {
    if (params.friendId) {
      dispatch(getMessages(params.friendId))
    }
  }, [params.friendId])
  const onMessageSend = (msg) => {
    dispatch(sendMessage(params.friendId, msg))
  }
  if (!params.friendId) {return <></>}
  return (
    <Messages messagesData={messagesData} onMessageSend={onMessageSend} currentUser={currentUser} dialoguesData={dialoguesData}></Messages>
   );
}
// function mapStateToProps(state) {
//   return {
//     messagesData: state.messengerPage.messagesData,
//     dialoguesData: state.messengerPage.dialoguesData,
//     newMessageText: state.messengerPage.newMessageText,
//   };
// }
export default MessagesContainer;
