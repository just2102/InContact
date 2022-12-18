import s from './Messenger.module.css'

import Dialogues from './Dialogues/Dialogues';
import Messages from './Messages/Messages'
const Messenger = (props) => {

    return ( 
        <div className={s.messenger}>
            <Dialogues dialoguesData={props.state.dialoguesData}></Dialogues>
            
            <Messages 
            messagesData={props.state.messagesData} 
            dialoguesData={props.state.dialoguesData}

            newMessageText={props.state.newMessageText}
            sendMessage={props.sendMessage}
            updateNewMessageText={props.updateNewMessageText}
            >
            </Messages>


        </div>
     );
}
 
export default Messenger;