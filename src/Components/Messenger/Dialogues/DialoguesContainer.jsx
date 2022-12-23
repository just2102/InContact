import Dialogues from "./Dialogues";

const DialoguesContainer = (props) => {
    let dialoguesData = props.store.getState().messengerPage.dialoguesData
    return (
        <Dialogues dialoguesData={dialoguesData}></Dialogues>
     );

}
 
export default DialoguesContainer;