
// =================================NOTIFICATION POPUP=========

export const createNotification = (obj) => {
    return `
            <div class: "Notification">
                <div class="profile-photo">
                    <img src=${obj.profile}>
                </div>

                <div class="notification-body">
                    <b>${obj.userName}</b> accepted your friend request
                    <small class="text-muted">2 ${obj.detail}</small>
                </div>
            </div>
    `
}


// ==============================MESSAGES========================

export const createMessage = (obj) => {
    let d = document.createElement("div")
    d.setAttribute("class","message")
    d.innerHTML= `
       
              <div class="profile-photo">
                  <img src=${obj.profile}>
                  <div class="${obj.active ? 'active' : ''}"></div>
              </div>
              <div class="message-body">
                  <h5>${obj.userName}</h5>
                  <p class="text-muted"> ${obj.message} </p>
              </div>
                          
          `
          return d;
  };



//   =============================FRIEND REQUESTS================

export const friendRequest = (obj) => {
    return `
              <div class="request">
                  <div class="info">
                      <div class="profile-photo">
                          <img src=${obj.profile}>
                      </div>
                      <div class="req.mes">
                          <div>${obj.username}</div>
                          <p class="text-muted"> ${obj.no} mutual friends </p>
                      </div>
                  </div>
                  <div class="actions">
                      <button class="btn btn-primary">Accept</button>
                      <button class="btn">Decline</button>
                  </div>
              </div>
      
      `;
  };



//===================================SIDE BAR=======================

export const createMenuItem = (obj) => {
    let small = `<small id="messages" class="notifications-count">${obj.notifications} </small>`
    return `
            <a  ${obj.ref? 'href='+obj.ref : ''} class="menu-item ${obj.active ? 'active' : ''}" id=${obj.id? obj.id : ""} >
                <span><i class="${obj.icon}">${obj.notifications?  small : "" }</i></span>
                <h3>${obj.menuitem}</h3>
            </a>
    
         `

}

// ===================================STORIES========================

export const createStory = (obj) => {
    return `
    <div class="story" style ="background: url(${obj.bgImg}) no-repeat center center/cover">
            <div class="profile-photo">
               <img src="${obj.profile}">
            </div>
            <p class="name">${obj.name}</p>
            </div>
            `

};


// ===================================FEEDS=======================

export const createFeed = (obj) => {
    // https://i.pinimg.com/564x/f4/26/e7/f426e72a9ea322652ddca1e7f9b645ee.jpg
    return `
          <div class="feed">
          <div class="head">
          <div class="user">
          <div class="profile-photo">
               <img src="${obj.profile}">
               </div>
               <div class="ingo">
               <h3>${obj.userName}</h3></h3>
               <small>${obj.details}</small>
               </div>
               </div>
               <span class="edit">
               <i class="fa-solid fa-ellipsis"></i>
               </span>
               </div>
               
               <div class="photo">
               <img src=${obj.post}>
               </div>
               
               <div class="action-button">
               <div class="interaction-button">
               <span><i class="fa-regular fa-heart"></i></span>
               <span><i class="fa-regular fa-comment-dots"></i></span>
               <span><i class="fa-solid fa-share"></i></span>
               </div>
               <div class="bookmark">
               <span><i class="fa-regular fa-bookmark"></i></span>
               </div>
               </div>
               
               <div class="liked-by">
               <span><img src='${obj.likes.img[0]}'></span>
               <span><img src="${obj.likes.img[1]}"></span>
               <span><img src="${obj.likes.img[2]}"></span>
               <p>liked by <b>${obj.likes.name}</b> and <b>${obj.likes.detail}</b></p>
               </div>
               <div class="caption">
               <p><b>${obj.description.name}</b>${obj.description.text} <span class="harsh-tag">${obj.description.harshText}</span></p>
               </div>
               <div class="comment text-muted"> ${obj.viewComments}</div>
               </div>
               `
  };
// ==========================LEFT PROFILE=================
  export const createProfile = () => {
    let a = document.createElement("a")
    a.setAttribute("class", "profile")
    a.innerHTML = `
                    <div class="profile-photo">
                        <img src="https://img.freepik.com/free-photo/pretty-girl-touching-her-face_1153-1023.jpg?t=st=1679374717~exp=1679375317~hmac=93a3029ef283d96f891654d602153196b2570506ede9de1b7fed68577f1fa001">
                        <div class="active"></div>
                    </div>
                    <div class="handle">
                        <h4>Ibra Nosheen</h4>
                        <p class="text-muted">
                            @gmail.com
                        </p>
                    </div>
    
        `
        return a
  }



//   =================================left Button=================
// export const createAbout = () =>{
//     return`
//     <a for="/src/pages/aboutUs.html" > About Us </a> 
//     `
// }
// ====================================Middle post================
  export const createPost =() =>{
    return`
                    <div class="profile-photo">
                        <img src="https://img.freepik.com/free-photo/pretty-girl-touching-her-face_1153-1023.jpg?t=st=1679374717~exp=1679375317~hmac=93a3029ef283d96f891654d602153196b2570506ede9de1b7fed68577f1fa001">
                        <div class="active"></div>
                    </div>
                    <input type="text" placeholder="what's in your mind. Diana?" id="create-post">
                    <input type="submit" value="Post" class="btn btn-primary">
    `
  }

//   ============================CREATE MESSAGES CATEGORY===============
export const createMessageCategory = () =>{
    return`
                    <div class="heading">
                        <h4>Messages</h4><i class="fa-solid fa-pen-to-square"></i>
                    </div>
                    <!-- ------------SEARCH BAR------- -->
                    <div class="search-bar">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="search" placeholder="search messages" id="message-search">
                    </div>
                    <!-- ------------MESSAGES CATEGORY------- -->
                    <div class="category">
                        <h6 class="active"> primary </h6>
                        <h6> General </h6>
                        <h6 class="message-requests "> Requests(7) </h6>
                    </div>
            `
}
//==============================MESSAGE REQUESTS========================
export const createRequests= () =>{
    return`
            <h4>Requests</h4>
        `
}
export const CreateTheme = () =>{
    return`
    <div class="card">
            <div>
                <h2>customize Your View</h2>
                <p class="text-muted">Manage your font size,color, and background.</p>
                <!-- ------------------------------FONT SIZES------------ -->
                <div class="font-size">
                    <h4>Font Size</h4>
                    <div>
                        <h6>Aa</h6>
                        <div class="choose-size">
                            <span class="font-size-1"></span>
                            <span class="font-size-2"></span>
                            <span class="font-size-3 active"></span>
                            <span class="font-size-4"></span>
                            <span class="font-size-5"></span>
                        </div>
                        <h3>Aa</h3>
                    </div>
                </div>

                <!-- ------------------PRIMARY COLORS ------- -->
                <div class="color">
                    <h4>Color</h4>
                    <div class="choose-color">
                        <span class="color-1 active"></span>
                        <span class="color-2"></span>
                        <span class="color-3"></span>
                        <span class="color-4"></span>
                        <span class="color-5"></span>
                    </div>
                </div>
                <!-- -----------BACK GROUND COLORS ---------- -->
                <div class="background">
                    <h4>Back Ground</h4>
                    <div class="choose-bg">
                        <div class="bg-1 active">
                            <span></span>
                            <h5 for="bg-1">Light</h5>
                        </div>
                        <div class="bg-2">
                            <span></span>
                            <h5 for="bg-2">Dim</h5>
                        </div>
                        <div class="bg-3">
                            <span></span>
                            <h5 for="bg-3">Lights out</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}