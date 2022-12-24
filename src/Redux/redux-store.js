import { combineReducers, createStore } from "redux";
import friendsReducer from "./friendsReducer";
import messengerReducer from "./messengerReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    messengerPage:messengerReducer,
    friendsPage:friendsReducer,
})

let store = createStore(reducers);

window.store = store
export default store;