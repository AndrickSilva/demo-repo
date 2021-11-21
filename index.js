burger =  document.querySelector(".burger")
topnav =  document.querySelector(".topnav")
nav1 =  document.querySelector(".nav1")
nav2 =  document.querySelector(".nav2")


burger.addEventListener("click", ()=>{
    nav1.classList.toggle("v-class")
    nav2.classList.toggle("v-class")
    topnav.classList.toggle("h-nav")
    
})