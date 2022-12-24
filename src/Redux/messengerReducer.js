import saniaAvatar from "../img/sania.png"
import kostiaAvatar from "../img/kostia.png"
import vasiaAvatar from "../img/vasia.png"
import masiaAvatar from "../img/masia.png"
import kirillAvatar from "../img/kirill.png"
import leninAvatar from "../img/lenin.png"
const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
    messagesData:
    [
        {id:1,sender:'Lenin', body:'Howdy brother!'},
        {id:2,sender:'Masia', body:'Cringe'},
        {id:3,sender:'Lenin', body:"It's not cringe, you are"}
    ],
    dialoguesData:
    [
        {id:1,name:'Sania',avatar:saniaAvatar},
        {id:2,name:'Kostia',avatar:kostiaAvatar},
        {id:3,name:'Vasia',avatar:vasiaAvatar},
        {id:4,name:'Masia',avatar:masiaAvatar},
        {id:5,name:'Kirill',avatar:kirillAvatar},
        {id:6,name:'Lenin',avatar:leninAvatar}
    ],
    newMessageText:'some new message text!'
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => 
({type:UPDATE_NEW_MESSAGE_TEXT, text:text})

const messengerReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case SEND_MESSAGE:
            if (state.newMessageText!=="") {
                let lastMessageId = state.messagesData[state.messagesData.length-1].id
                let newMessage = 
                {
                    id: lastMessageId + 1, 
                    sender:'Lenin', 
                    body:state.newMessageText
                }
                stateCopy.messagesData = [...state.messagesData]
                stateCopy.messagesData.push(newMessage);
    
                stateCopy.newMessageText=''
            }
            return stateCopy
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText=action.text;
            return stateCopy
        default:
            return state;
    }
}

export default messengerReducer