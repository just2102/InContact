import { connect } from "react-redux";
import Dialogues from "./Dialogues";

function mapStateToProps(state) {
    return {
        dialoguesData: state.messengerPage.dialoguesData
    }
}
function mapDispatchToProps(dispatch) {
    return {
        
    }
}

const DialoguesContainer = connect(mapStateToProps, null) (Dialogues)


 
export default DialoguesContainer;