import image1 from '../img/post1.jpg'
import image2 from '../img/post2.jpg'
import saniaAvatar from "../img/sania.png"
import kostiaAvatar from "../img/kostia.png"
import vasiaAvatar from "../img/vasia.png"
import masiaAvatar from "../img/masia.png"
import kirillAvatar from "../img/kirill.png"
import leninAvatar from "../img/lenin.png"
import profileReducer from './profileReducer'
import messengerReducer from './messengerReducer'
import friendsReducer from './friendsReducer'

let store = {
    _state: {
        users: 
        [
            {id:1,name:'Sania',avatar:saniaAvatar},
            {id:2,name:'Kostia',avatar:kostiaAvatar},
            {id:3,name:'Vasia',avatar:vasiaAvatar},
            {id:4,name:'Masia',avatar:masiaAvatar},
            {id:5,name:'Kirill',avatar:kirillAvatar},
            {id:6,name:'Lenin',avatar:leninAvatar}
        ],
    
        profilePage: {
            postsData:
            [
                {id:1,body:"It's my first post here!",image:image1,likeCount:10},
                {id:2,body:"Howdy",image:image2,likeCount:0},
                {id:3,body:"edited post..",likeCount:5},
                {id:4,body:"dada",likeCount:3}  
            ],
            newPostText:'some new post text!'
        },

        messengerPage: {
            //dialoguesData: DEFINE DIALOGUES!
            messagesData:
            [
                {id:1,sender:'Lenin', body:'Howdy brother!'},
                {id:2,sender:'Masia', body:'Cringe'},
                {id:3,sender:'Lenin', body:"It's not cringe, you are"}
            ],
            newMessageText:'some new message text!'
        },
        
        friendsPage: {
            friends:
            [
    
            ]
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messengerPage = messengerReducer(this._state.messengerPage, action)
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action)
        this._callSubscriber()
    }
}

window.store = store

store._state.messengerPage.dialoguesData=store._state.users

store._state.friendsPage.friends.push(store._state.users[0])
store._state.friendsPage.friends.push(store._state.users[1])
store._state.friendsPage.friends.push(store._state.users[2])

export default store