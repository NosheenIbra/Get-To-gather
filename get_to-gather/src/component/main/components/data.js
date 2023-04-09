
// ==============================NOTIFICATION POPUP============

// export const notifications = document.querySelector(".notifications-popup ")
export const notificationssdata = [
    {
        profile: "https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-113-520x519.jpg",
        userName: "Haiqa khan ",
        detail: "5 MINUTES AGO",
    },
    {
        profile: "https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-110-520x520.jpg",
        userName: "Aisha Khan ",
        detail: "1 MINUTES AGO",
    },
    {
        profile: "https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-5-520x520.jpg",
        userName: "Rabbia Zaidi ",
        detail: "15 MINUTES AGO",
    },
    {
        profile: "https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-23-520x521.jpg",
        userName: "Sakina Majeed",
        detail: "30 MINUTES AGO",
    },
    {
        profile: "https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-64-520x519.jpg",
        userName: "|Sania Majeed",
        detail: "1 WEEK AGO",
    },
    {
        profile: "https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-66-520x519.jpg",
        userName: "Habiba Azam ",
        detail: "1  MONTH AGO",
    },
]

// notificationssdata.map((Notification) => {
//     notifications.innerHTML += createNotification(Notification)
// })


// ==========================MESSAGES=======================

// export const messages = document.querySelector(".messages");
export const messagesdata = [
  {
    profile: "https://i.pinimg.com/564x/56/c4/b9/56c4b94dbb9905d40cb206082dac4613.jpg",
    userName: "shahzaib Zafar",
    active:true,
    message: "Hello"
  },
  {
    profile: "https://i.pinimg.com/564x/48/3d/2e/483d2e3f763ef93afe4de048faed79a6.jpg",
    userName: "Iqra wali",
    active:false,
    message: "Message me."

  },
  {
    profile: "https://i.pinimg.com/564x/24/0f/91/240f91ea610f33c3f554b0de049dd70c.jpg",
    userName: "Madiha",
    active:false,
    message: "Can you explain please"

  },
  {
    profile: "https://i.pinimg.com/564x/df/ec/98/dfec98cd7b1c2899b5d33cd50b5a1fd0.jpg",
    active:true,
    userName: "Laraib khan",
    message: "What's about your family?"
  },
  {
    profile: "https://i.pinimg.com/564x/d0/2d/e8/d02de8e3975a9e91f537bb80c3bfa265.jpg",
    active:false,
    userName: "sumbal zeeshan",
    message: "Send me the notes."
  },
  {
    profile: "https://dp.profilepics.in/profile_pictures/pakistani_girls/pakistani_girls_61.jpg",
    userName: "Edem Quist",
    active:false,
    message: "your email address.."

  },
];
// messagesdata.map((message) => {
//   messages.innerHTML += createMessage(message);
// });


// =============================FRIEND REQUESTS===================

// export const requests=document.querySelector(".friend-requests")
export const requestsdata=[
    {

        profile: "https://i.pinimg.com/564x/d4/1d/cc/d41dcc512922b29a565c508b4adf2650.jpg",
        username: " Shah Noor",
        no: "6",
    },
    {

        profile: "https://i.pinimg.com/564x/63/49/ce/6349ce8ad4db887829764ed8903364c1.jpg",
        username: " Hijabi Queen",
        no: "10",
    },
    {

        profile: "https://i.pinimg.com/564x/df/88/15/df8815f28d72a643da74f40e796e0fb0.jpg",
        username: "Horiya Muskaan",
        no: "20",
    },

] 
// requestsdata.map((request) =>{
//     requests.innerHTML += friendRequest(request);
// })

// ================================SIDEBAR==================

// export const menuitems = document.querySelector(".sidebar")
export const menuitemsdata = [
    {
        icon: "fa-solid fa-house",
        menuitem: "Home",
        active:true,
        
    },
    {
        icon: "fa-solid fa-compass",
        menuitem: "Explore",
        active:false,
    },
    {
        icon: "fa-solid fa-bell",
        menuitem: "Notifications",
        notifications : 9 +"+", 
        id: "notifications",
        active:false,

    },
    {
        icon: "fa-solid fa-envelope",
        menuitem: "Messages",
        notifications : 6,
        id: "messages-notification",
        active:false,
    },
    {
        icon: "fa-solid fa-bookmark",
        menuitem: "Bookmarks",
        active:false,
    },
    {
        icon: "fa-solid fa-chart-line",
        menuitem: "Analytics",
        active:false,
    },
    {
        icon: "fa-solid fa-palette",
        menuitem: "Theme",
        id:'theme',
        active:false,
    },
    {
        icon: "fa-solid fa-gear",
        menuitem: "Setting",
        active:false,
    },
    {
      icon: "fa-solid fa-cart-shopping",
      menuitem: "Add to Cart",
      ref: "/src/pages/addtocart.html",
      active:false,
    },
    {
        icon: "fa-regular fa-flag",
        menuitem: "About",
        ref: "/src/pages/aboutUs.html",
        active:false,
    },
    
];
// menuitemsdata.map((menuitem) => {
//     menuitems.innerHTML += CreateMenuItem(menuitem)
// })

// ==============================STORIES======================

// let stories = document.getElementsByClassName("stories")[0]
export const storyData = [
    {
        profile: "https://i.pinimg.com/564x/9e/1e/47/9e1e47866da8878822e79f5af1c579dd.jpg",
        name: "Muhammad Bilal",
        bgImg: "https://i.pinimg.com/564x/9d/c4/08/9dc4088bb769b72d3dc5988364413408.jpg",
    },
    {
        profile: "https://i.pinimg.com/564x/79/3a/c2/793ac22d3e95bb93d311a13eae59531c.jpg",
        name: "Muhammad Talha",
        bgImg: "https://i.pinimg.com/564x/d9/82/aa/d982aa0628d3912784e185df4578bd47.jpg",
    },
    {
        profile: "https://i.pinimg.com/564x/d9/1c/7b/d91c7b1f935e24c05531b4341a57c988.jpg",
        name: "Hira Nosheen",
        bgImg: "https://plus.unsplash.com/premium_photo-1661685126470-8421243def69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2h1dG5leXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
        profile: "https://i.pinimg.com/564x/12/b9/78/12b978dbbb01e2ce57faa6578900260a.jpg",
        name: "Muhammad Ahsan",
        bgImg: "https://i.pinimg.com/564x/6e/38/f2/6e38f2cadc947ee72c262f2e193aac98.jpg",
    },
    {
        profile: "https://i.pinimg.com/564x/c6/0b/4a/c60b4a950107a64ab54f1aea762f26ab.jpg",
        name: "Husna shah",
        bgImg: "https://s26162.pcdn.co/wp-content/uploads/sites/3/2018/10/poe-dore-raven-3.jpg",
    },

]
// storyData.map((story) => {
//     stories.innerHTML += createStory(story)
// })

// ===================================Feeds=======================

// export const feeds = document.querySelector(".feeds");
export const feedsdata = [
  {
    profile:
      "https://i.pinimg.com/564x/f4/26/e7/f426e72a9ea322652ddca1e7f9b645ee.jpg",
    post: "https://img.freepik.com/free-photo/pretty-girl-touching-her-face_1153-1023.jpg?t=st=1679374717~exp=1679375317~hmac=93a3029ef283d96f891654d602153196b2570506ede9de1b7fed68577f1fa001",
    userName: "shehroz N",
    details: "Pakistan, 15 MINUTES AGO",
    likes:{
      img :[
      
        "https://i.pinimg.com/564x/12/b9/78/12b978dbbb01e2ce57faa6578900260a.jpg",
        "https://i.pinimg.com/564x/f8/ae/25/f8ae251b6fa6ecd74dcc9e5d94fbb3fc.jpg",
        "https://i.pinimg.com/564x/40/e1/34/40e13483631a392607dd0b01fa850927.jpg",
      
          ],
       name:"Sobia khan",
       detail:"2,323 others",

      },
      description:{
        name:"Ibra Nosheen",
        text:"Lorem ipsum dolor sit.",
        harshText:"#lifeStyle",
      },
      viewComments:"view all comments",
  },
  {
    profile:
      "https://i.pinimg.com/564x/da/72/c4/da72c4f89ba943012abcc0bb37dcdf35.jpg",
    post: "https://i.pinimg.com/564x/07/c2/e6/07c2e62d8663d8676fd53fd842358389.jpg",
    userName: "Sana khan",
    details: "Pakistan, 1 MINUTES AGO",
    likes:{
      img :[
      
        "https://i.pinimg.com/564x/52/9f/4d/529f4d0e102855839d4972428573618e.jpg",
        "https://i.pinimg.com/564x/d1/00/1f/d1001fa7c77b4dd47e7315b2a715f927.jpg",
        "https://i.pinimg.com/736x/5a/9b/a4/5a9ba444fbb0be6d8ab9e4a7a033041b.jpg",
      
          ],
       name:"Talha Naeem",
       detail:"2 others",

      },
      description:{
        name:"Hira Nosheen",
        text:"Lorem ipsum dolor sit. ",
        harshText:"#lifeStyle",
      },
      viewComments:"View recent comments",
  },
  {
    profile:
      "https://i.pinimg.com/564x/ec/54/45/ec544539dbf40c573df2dbc5292559ea.jpg",
    post: "https://i.pinimg.com/564x/f9/41/5d/f9415d29c25c7a3b46bbfe91dd46dfb6.jpg",
    userName: "sania sameer",
    details: "Multan, 1 seconds AGO",
    likes:{
      img :[
      
        "https://i.pinimg.com/564x/09/2c/71/092c71af5093fdcf2b09c58c895d4f56.jpg",
        "https://i.pinimg.com/564x/d9/17/1b/d9171b8b4111b49112344834289627a0.jpg",
        "https://i.pinimg.com/736x/01/03/58/01035867b9a33073c0b0509692983c6e.jpg",
      
          ],
       name:"Sana Shuja",
       detail:"232,33 others",

      },
      description:{
        name:"Salman Nawaz",
        text:"Lorem ipsum dolor sit.",
        harshText:"lifeStyle",
      },
      viewComments:"View comments",
  },
  {
    profile:
      "https://i.pinimg.com/564x/fc/62/5a/fc625a1c0cc8c88e529a3503ec26cfa1.jpg",
    post: "https://i.pinimg.com/564x/f9/4d/dc/f94ddcc66b75140554e1b2699735847d.jpg",
    userName: "Sohail Mubeen",
    details: "Gujrat, 5 MINUTES AGO",
    likes:{
      img :[
      
        "https://i.pinimg.com/564x/86/72/59/86725944190b45df3844d562d652a7f1.jpg",
        "https://i.pinimg.com/564x/a5/54/de/a554de2769351cd36ec42f30d2eab62c.jpg",
        "https://i.pinimg.com/564x/b9/04/22/b90422fa2c9182ee108e3f647993bad4.jpg",
      
          ],
       name:"Anam Shuja",
       detail:"123,34 others",

      },
      description:{
        name:"Rubina Naeem",
        text:"Lorem ipsum dolor sit.",
        harshText:"lifeStyle",
      },
      viewComments:"View all comments",
  },
  {
    profile:
      "https://img.freepik.com/free-photo/headshot-optimistic-european-woman-feels-free-delighted_273609-25785.jpg?t=st=1679374730~exp=1679375330~hmac=5494fa5f3a76b7cded0d038b1dbaafdc2f6648419e891f363f1b347f6ebc7181",
    post: "https://i.pinimg.com/564x/e7/1a/64/e71a64be96de8590a04bec279da72645.jpg",
    userName: "Naheed Shahid",
    details: "Muree, 15 MINUTES AGO",
    likes:{
      img :[
      
        "https://i.pinimg.com/564x/c6/e5/cf/c6e5cfdd52e39878895b2cdea0eacaaf.jpg",
        "https://i.pinimg.com/564x/b9/04/22/b90422fa2c9182ee108e3f647993bad4.jpg",
        "https://i.pinimg.com/564x/c8/0d/99/c80d9914b1d4aa3c48dcac27c243fdcd.jpg",
      
          ],
       name:"Nawazish Ali",
       detail:"2 other",

      },
      description:{
        name:"Aslam-u-llah",
        text:"Lorem ipsum dolor sit.",
        harshText:"lifeStyle",
      },
      viewComments:"vie 10 comments",
  },
  {
    profile:
      "https://i.pinimg.com/564x/b9/04/22/b90422fa2c9182ee108e3f647993bad4.jpg",
    post: "https://i.pinimg.com/736x/5a/5a/48/5a5a48f5572097c7a68de8d1a284f537.jpg",
    userName: "Mahnaaz Noor",
    details: "Blochistan, 1 HOUR AGO",
    likes:{
      img :[
      
        "https://i.pinimg.com/564x/f8/ae/25/f8ae251b6fa6ecd74dcc9e5d94fbb3fc.jpg",
        "https://i.pinimg.com/564x/fc/62/5a/fc625a1c0cc8c88e529a3503ec26cfa1.jpg",
        "https://i.pinimg.com/564x/da/72/c4/da72c4f89ba943012abcc0bb37dcdf35.jpg",
      
          ],
       name:"Hina Khan",
       detail:"4 others",

      },
      description:{
        name:"Shah Nawaz",
        text:"Lorem ipsum dolor sit.",
        harshText:"lifeStyle",
      },
      viewComments:"view all 103 comments",
  },
  {
    profile:
      "https://i.pinimg.com/564x/b4/78/b3/b478b34a92a4889c7e4c1d2b592ee88f.jpg",
    post: "https://i.pinimg.com/564x/d0/38/0d/d0380d9fa89a63606a3f4343da5a4064.jpg",
    userName: "Alishba Hafeez",
    details: "Islamabad, 15 MINUTES AGO",
    likes:{
      img :[
      
        "https://i.pinimg.com/564x/f8/ae/25/f8ae251b6fa6ecd74dcc9e5d94fbb3fc.jpg",
        "https://i.pinimg.com/564x/07/c2/e6/07c2e62d8663d8676fd53fd842358389.jpg",
        "https://i.pinimg.com/564x/fc/62/5a/fc625a1c0cc8c88e529a3503ec26cfa1.jpg",
      
          ],
       name:"Horiya Muskaan",
       detail:"2 others",

      },
      description:{
        name:"Mubashir",
        text:"Lorem ipsum dolor sit.",
        harshText:"lifeStyle",
      },
      viewComments:"View 30comments",
  },
];

// feedsdata.map((feed) => {
//   feeds.innerHTML += createFeed(feed);
// });
