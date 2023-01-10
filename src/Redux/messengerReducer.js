import saniaAvatar from "../img/sania.png";
import kostiaAvatar from "../img/kostia.png";
import vasiaAvatar from "../img/vasia.png";
import masiaAvatar from "../img/masia.png";
import kirillAvatar from "../img/kirill.png";
import leninAvatar from "../img/lenin.png";
import { messengerAPI } from "../API/api";
const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const SET_DIALOGUES = "SET_DIALOGUES"
const SET_MESSAGES = "SET_MESSAGES"
let initialState = {
  messagesData: [
    // {id:1,sender:'Lenin', text:'Howdy brother!'},
    // {id:2,sender:'Masia', text:'Cringe'},
    // {id:3,sender:'Lenin', text:"It's not cringe, you are"}
  ],
  dialoguesData: [
    // {id:1,name:'Sania',avatar:saniaAvatar},
    // {id:2,name:'Kostia',avatar:kostiaAvatar},
    // {id:3,name:'Vasia',avatar:vasiaAvatar},
    // {id:4,name:'Masia',avatar:masiaAvatar},
    // {id:5,name:'Kirill',avatar:kirillAvatar},
    // {id:6,name:'Lenin',avatar:leninAvatar}
  ],
  // newMessageText:'some new message text!'
};

const sendMessageSuccess = (newMessage) => ({ type: SEND_MESSAGE_SUCCESS, newMessage });
// export const updateNewMessageText = (text) => ({
//   type: UPDATE_NEW_MESSAGE_TEXT,
//   text: text,
// });
export const sendMessage = (friendId, msg) => {
  return (dispatch) => {
    messengerAPI.sendMessage(friendId, msg).then((data) => {
      if (data.resultCode === 0) {
        dispatch(sendMessageSuccess(data.data.message));
      }
    });
  };
};

const setDialogues = (dialoguesData) => ({ type: SET_DIALOGUES, dialoguesData });
export const getDialogues = () => {
  return (dispatch) => {
    messengerAPI.getDialogues().then((response) => {
      if (response.status===200) {
        dispatch(setDialogues(response.data))
      }
    });
  };
};

const setMessages = (messagesData) => ({type: SET_MESSAGES, messagesData})
export const getMessages = (friendId) => {
  return (dispatch) => {
    messengerAPI.getMessages(friendId).then(response=>{
      if (response.status===200) {
        dispatch(setMessages(response.data.items))
      }
    })
  }
}

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_SUCCESS:
      debugger
      return {
        ...state,
        messagesData: [...state.messagesData, action.newMessage]
      }
    // case UPDATE_NEW_MESSAGE_TEXT:
    //   return {
    //     ...state,
    //     newMessageText: action.text,
    //   };
    case SET_DIALOGUES:
        return {
            ...state,
            dialoguesData: action.dialoguesData
        }
    case SET_MESSAGES:
          return {
              ...state,
              messagesData: action.messagesData
          }
    default:
      return state;
  }
};

export default messengerReducer;
