import image1 from '../img/post1.jpg'
import image2 from '../img/post2.jpg'
import saniaAvatar from "../img/sania.png"
import kostiaAvatar from "../img/kostia.png"
import vasiaAvatar from "../img/vasia.png"
import masiaAvatar from "../img/masia.png"
import kirillAvatar from "../img/kirill.png"
import leninAvatar from "../img/lenin.png"

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
            //dialoguesData:users
            messagesData:
            [
                {id:1,sender:'Lenin', body:'Howdy brother!'},
                {id:2,sender:'Masia', body:'Cringe'},
                {id:3,sender:'Lenin', body:"It's not cringe, you are"}
            ],
            newMessageText:'some new message text!'
        },
        
        friends: {
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
    // addPost() {
    //     let newPost = 
    //     {
    //         id:5, 
    //         body:this._state.profilePage.newPostText, 
    //         likeCount:0
    //     }
    
    //     this._state.profilePage.postsData.push(newPost)
    //     this._state.profilePage.newPostText=''
    
    //     this._callSubscriber(this._state)
    // },

    // updateNewPostText(newText) {
    //     console.log(newText)
    //     this._state.profilePage.newPostText=newText;
    //     this._callSubscriber(this._state)
    // },

    // sendMessage() {
    //     let newMessage = 
    //     {
    //         id:4, 
    //         sender:'Lenin', 
    //         body:this._state.messengerPage.newMessageText
    //     }
    //     this._state.messengerPage.messagesData.push(newMessage);
    
    //     this._state.messengerPage.newMessageText=''
    //     this._callSubscriber(this._state)
    // },
    
    // updateNewMessageText(text) {
    //     this._state.messengerPage.newMessageText=text
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        if (action.type==="ADD-POST" && this._state.profilePage.newPostText!=="") {
            let newPost = 
            {
                id:5, 
                body:this._state.profilePage.newPostText, 
                likeCount:0
            }
            console.log(newPost.body)
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText=''
        
            this._callSubscriber(this._state)
        } 
        else if (action.type==="UPDATE-NEW-POST-TEXT") {
            console.log(action.newText)
            this._state.profilePage.newPostText=action.newText;
            this._callSubscriber(this._state)
        } 
        else if (action.type==="SEND-MESSAGE" && this._state.messengerPage.newMessageText!=="") {
            let newMessage = 
            {
                id:4, 
                sender:'Lenin', 
                body:this._state.messengerPage.newMessageText
            }
            this._state.messengerPage.messagesData.push(newMessage);
        
            this._state.messengerPage.newMessageText=''
            this._callSubscriber(this._state)
        }
        else if (action.type==="UPDATE-NEW-MESSAGE-TEXT") {
            this._state.messengerPage.newMessageText=action.text
            this._callSubscriber(this._state);
        }
    }
}
window.store = store

store._state.messengerPage.dialoguesData=store._state.users

store._state.friends.friends.push(store._state.users[0])
store._state.friends.friends.push(store._state.users[1])
store._state.friends.friends.push(store._state.users[2])

export default store