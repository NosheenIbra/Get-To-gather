// import { createProfile,createMenuItem,createPost,createMessageCategory,createRequests,createMessage,createFeed,createNotification, } from "./components/tags"
import * as tag from "./components/tags"
import * as data from "./components/data"
// import * as data from "./components/data"


const main = document.createElement("main")
const container = document.createElement("div")
const left = document.createElement("div")
const middle = document.createElement("div")
const right = document.createElement("div")
const sidebar = document.createElement('div')
const notificationpopup = document.createElement("div")
const stories = document.createElement("div")
const form = document.createElement('div')
const feeds =document.createElement("div")
const message= document.createElement("div")
const friendrequest = document.createElement("div")
const theme = document.createElement("div")


container.setAttribute("class" , "container")
left.setAttribute("class" , "left")
middle.setAttribute("class", "middle") 
right.setAttribute("class" , "right")
sidebar.setAttribute("class" , "sidebar")
notificationpopup.setAttribute("class", "notifications-popup")
stories.setAttribute("class", "stories")
form .setAttribute('class', 'create-post')
feeds.setAttribute("class", "feeds")
message.setAttribute("class","messages")
friendrequest.setAttribute("class", "friend-requests")
theme.setAttribute("class", "customize-theme")


main.insertAdjacentElement("afterbegin", container)

container.insertAdjacentElement("afterbegin", left)
container.insertAdjacentElement("beforeend", middle)
container.insertAdjacentElement("beforeend", right)

left.insertAdjacentElement("afterbegin", tag.createProfile())
left.insertAdjacentElement("beforeend", sidebar)


middle.insertAdjacentElement("afterbegin", stories)
middle.insertAdjacentElement("beforeend",form )
middle.insertAdjacentElement("beforeend", feeds )

right.insertAdjacentElement("afterbegin", message)
right.insertAdjacentElement("beforeend", friendrequest)

data.menuitemsdata.map((menuitem) => {
    sidebar.innerHTML += tag.createMenuItem(menuitem)
})
// this method is the replacment of insertAdjacentElement used for notification popup and theme 
sidebar.appendChild(notificationpopup)
main.appendChild(theme)



data.storyData.map((story) => {
    stories.innerHTML += tag.createStory(story)
})

form.innerHTML = tag.createPost()

data.feedsdata.map((feed) => {
  feeds.innerHTML += tag.createFeed(feed);
});

message.innerHTML = tag.createMessageCategory()
data.messagesdata.map((msg)=>{
    // message.innerHTML +=  tag.createMessage(msg)
    message.insertAdjacentElement('beforeend', tag.createMessage(msg))
})

friendrequest.innerHTML= tag.createRequests()
data.requestsdata.map((rqst)=>{
    friendrequest.innerHTML += tag.friendRequest(rqst)
})
console.log(friendrequest);

//==============================sidebar tag childs child======================
data.notificationssdata.map((Notification) => {
        notificationpopup.innerHTML += tag.createNotification(Notification)
})

theme.innerHTML = tag.CreateTheme()















export default main