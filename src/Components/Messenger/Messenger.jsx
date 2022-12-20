import s from './Messenger.module.css'

import Dialogues from './Dialogues/Dialogues';
import Messages from './Messages/Messages'
const Messenger = (props) => {

    return ( 
        <div className={s.messenger}>
            <Dialogues 
            dialoguesData={props.state.dialoguesData}
            
            >
            </Dialogues>
            
            <Messages 
            dispatch={props.dispatch}
            messagesData={props.state.messagesData} 
            dialoguesData={props.state.dialoguesData}

            newMessageText={props.state.newMessageText}
            >
            </Messages>


        </div>
     );
}
 
export default Messenger;