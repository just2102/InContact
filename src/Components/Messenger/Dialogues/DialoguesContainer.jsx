import { connect, useDispatch, useSelector } from "react-redux";
import Dialogues from "./Dialogues";
import { getDialogues } from "../../../Redux/messengerReducer";
import { useEffect } from "react";

const DialoguesContainer = (props) => {
    const dispatch = useDispatch();
    const dialoguesData = useSelector((state) => state.messengerPage.dialoguesData)
    useEffect(() => {
        dialoguesData.length===0 && dispatch(getDialogues())
    })
    return ( 
        <Dialogues dialoguesData={dialoguesData}></Dialogues>
     );
}

export default DialoguesContainer