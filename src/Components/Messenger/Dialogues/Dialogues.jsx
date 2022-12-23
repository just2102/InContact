import s from "./Dialogues.module.css"
import Dialogue from "./Dialogue/Dialogue";

const Dialogues = (props) => {
    let dialogues = props.dialoguesData

    let mappedUsers = dialogues.map(user=> {
        return <Dialogue name={user.name} avatar={user.avatar} id={user.id}></Dialogue>
    })

    return (
        <div className={s.dialogues}>
            {
                mappedUsers
            }
        </div>
     );

}
 
export default Dialogues;