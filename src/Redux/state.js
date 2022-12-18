import image1 from '../img/post1.jpg'
import image2 from '../img/post2.jpg'
import saniaAvatar from "../img/sania.png"
import kostiaAvatar from "../img/kostia.png"
import vasiaAvatar from "../img/vasia.png"
import masiaAvatar from "../img/masia.png"
import kirillAvatar from "../img/kirill.png"
import leninAvatar from "../img/lenin.png"
import { renderEntireTree } from '../render'

let state = {
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


}
window.state = state

export function addPost() {
    let newPost = 
    {
        id:5, 
        body:state.profilePage.newPostText, 
        likeCount:0
    }

    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText=''

    renderEntireTree(state)
}

export function updateNewPostText(newText) {
    state.profilePage.newPostText=newText;
    renderEntireTree(state)
}

export function sendMessage() {
    let newMessage = 
    {
        id:4, 
        sender:'Lenin', 
        body:state.messengerPage.newMessageText
    }
    state.messengerPage.messagesData.push(newMessage);

    state.messengerPage.newMessageText=''
    renderEntireTree(state)
}

export function updateNewMessageText(text) {
    state.messengerPage.newMessageText=text
    renderEntireTree(state);
}

state.messengerPage.dialoguesData=state.users

state.friends.friends.push(state.users[0])
state.friends.friends.push(state.users[1])
state.friends.friends.push(state.users[2])

export default state