import { combineReducers, createStore } from "redux";
import friendsReducer from "./friendsReducer";
import messengerReducer from "./messengerReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    messengerPage:messengerReducer,
    friendsPage:friendsReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers);

window.store = store
export default store;