let btn =document.createElement("button")
btn.innerText = "logOut"
let login =document.createElement("button")
login.innerText = "logIn"
login.style.display = "none"
const nav = document.createElement("nav")
{/* <div class="btn btn-primary" for="log-out">${btn} ${login}</div> */}
nav.innerHTML = `
<div class="container">
            <h2 class="log">
                Get To Gather
            </h2>
            <div class="search-bar">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="search for creators,inspirations and projects">
            </div>
            <div class="log-out">
            <div  class="btn btn-primary" style="display:none;" >log In</div>
            <div class="btn btn-primary" >log Out</div>
                <div style="position: relative ;">
                    <div class="profile-photo"  >
                        <img src="https://img.freepik.com/free-photo/pretty-girl-touching-her-face_1153-1023.jpg?t=st=1679374717~exp=1679375317~hmac=93a3029ef283d96f891654d602153196b2570506ede9de1b7fed68577f1fa001">
                        <div class="active"></div>
                    </div>
                </div>
            </div>
        </div>
`


export default nav 
