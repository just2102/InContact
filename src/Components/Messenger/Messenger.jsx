import s from './Messenger.module.css'

import DialoguesContainer from './Dialogues/DialoguesContainer';
import MessagesContainer from './Messages/MessagesContainer';
const Messenger = (props) => {
    return (  
        <div className={s.messenger}>
            <DialoguesContainer 
            >
            </DialoguesContainer>
                
            <MessagesContainer
            // dispatch={props.dispatch}
            // messagesData={props.state.messagesData} 
            // dialoguesData={props.state.dialoguesData}
            // newMessageText={props.state.newMessageText}
            >
            </MessagesContainer>
        </div>

     );
}
 
export default Messenger;