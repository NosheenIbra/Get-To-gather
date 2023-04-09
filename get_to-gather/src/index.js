//SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES
const messageNotification = document.querySelector('#messages-notification');
const messags = document.querySelector('.messages');
const message = messags.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette=document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

//remove active class from all menu items
function changeActiveItem() {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

// ================SIDE BAR======================

 menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    // for notification-popup         
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    }
    else {
        document.querySelector(".notifications-popup").style.display = "block";
      // hide notifications count as well
      document.querySelector("#notifications .notifications-count").style.display = "none";
    }
  });
});

// // ==================================MESSAGES=============

// Search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').innerText.toLowerCase();
        if (name.includes(val))
            chat.style.display = "flex"
        else
            chat.style.display = "none"
    })
}

// // //search chat
messageSearch.addEventListener('keyup', searchMessage);

// // // highlight message card when  menu message is clicked
messageNotification.addEventListener('click',()=>{
    messags.style.boxShadow = '0 0 1rem var(--color-primary)';
    // document.querySelector(".right").style.display = "blo"
    // messags.style.zIndex = 60;
    messageNotification.querySelector('#notifications').style.display ='none';
    setTimeout(() =>{
       messags.style.boxShadow = 'none';
    }, 2000);
})

// // THEME/DISPLAY CUSTOMIZATION

// // opens modal
const openThemeModal = () => themeModal.style.display = 'grid';

// // closes modal
const closeThemeModal = (e) => e.target.parentNode.parentNode.classList.contains("customize-theme") ? themeModal.style.display = 'none':"";

// // close modal
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

// // ======================FONTS====================

// remove active  class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector()
        let fontSize;;
        size.classList.toggle('active');

        if (size.classList.contains("font-size-1")) {
            fontSize = '10px';
            root.style.setProperty('---sticky-top-left', '5.4rem');
            root.style.setProperty('---sticky-top-right', '5.4rem');
        } else if (size.classList.contains("font-size-2")) {
            fontSize = '12px';
            root.style.setProperty('---sticky-top-left', '5.4rem');
            root.style.setProperty('---sticky-top-right', '-7rem');
        } else if (size.classList.contains("font-size-3")) {
            fontSize = '14px';
            root.style.setProperty('---sticky-top-left', '-2rem');
            root.style.setProperty('---sticky-top-right', '-7rem');
        } else if (size.classList.contains("font-size-4")) {
            fontSize = '16px';
            root.style.setProperty('---sticky-top-left', '-5rem');
            root.style.setProperty('---sticky-top-right', '-25rem');
        } else if (size.classList.contains("font-size-5")) {
            fontSize = '17px';
            root.style.setProperty('---sticky-top-left', '-12rem');
            root.style.setProperty('---sticky-top-right', '-35rem');
        }

        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})

// remove active class from colors
const changeActiveColorClass = () =>{
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}

// change primary colors

colorPalette.forEach(color =>{
    color.addEventListener('click', () =>{
        let primary;
        // remove active class from colors
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue=333;
        }else if(color.classList.contains('color-2')){
            primaryHue=170;
        }else if (color.classList.contains('color-3')){
            primaryHue=1000;
        } else if (color.classList.contains('color-4')){
            primaryHue=233;
        } else if(color.classList.contains('color-5')){
            primaryHue=440;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue);

    })
})

// theme BACKGROUND values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//Change background color
const changeBG = () =>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener("click",() =>{
    
    // add active class
    Bg1.classList.add('active');
    // remove active class from others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    // remove customize changes from local storage
   window.location.reload(); 
    
})



Bg2.addEventListener("click",() =>{
    darkColorLightness = '86%';
    whiteColorLightness = '67%';
    lightColorLightness = '49%';

    // add active class
    Bg2.classList.add('active');
    // remove active class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
    
})

Bg3.addEventListener("click",() =>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg3.classList.add('active');
    // remove active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
    
})
document.querySelector("#app > nav > div > div.log-out > div.btn.btn-primary").addEventListener("click",(e)=>{
  
    console.log(e.target); 
    
})