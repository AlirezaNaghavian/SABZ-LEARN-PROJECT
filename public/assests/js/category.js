import {NavBar} from "../components/nav_bar/_nav-bar.js"
import {Footer} from "../components/footer/footer.js"
window.customElements.define("navbar-tag",NavBar)
window.customElements.define("footer-tg",Footer)
const getbottomSheet = document.querySelector(".bottom-sheet");
const bottomSheetItem = document.querySelectorAll(".bottom-sheet__item");
const getCloseSortBtn =document.querySelector(".bottom-sheet__close-btn");
const appOverlay  = document.querySelector(".app-overlay");
const sortMobileBtn = document.getElementById("sort-btn");
const getSortBtn  = document.querySelectorAll(".sort-btn");
const sortActivate = (event)=>{
    event.preventDefault(); 
    getSortBtn.forEach((newEvent)=>{
    if( newEvent !== event){
    newEvent.classList.remove("sort-btn--active");
    }

})
event.target.classList.add("sort-btn--active")
}
// show sort window
const showSortSheet  = ()=>{
    getbottomSheet.classList.add("bottom-sheet--open")
    appOverlay.classList.remove("hide");
    appOverlay.classList.add("show");

    bottomSheetItem.forEach((btnItem)=>{
        btnItem.addEventListener("click",(event)=>{
            const confirmItem = btnItem.lastElementChild
            bottomSheetItem.forEach((secondBtnEvent)=>{
                if(secondBtnEvent !== btnItem){
                    secondBtnEvent.classList.remove("bottom-sheet__item--selected")
                 secondBtnEvent.lastElementChild.classList.add("hidden")
                }
            })
           confirmItem.classList.remove("hidden")
            btnItem.classList.add("bottom-sheet__item--selected")
        })
    })
}
// hide sort window
const hideSortWindow = ()=>{
    getbottomSheet.classList.remove("bottom-sheet--open")
    appOverlay.classList.add("hide");
    appOverlay.classList.remove("show");
}
// clickable overlay
const OnClickOverlay = ()=>{
    getbottomSheet.classList.remove("bottom-sheet--open")
    appOverlay.classList.add("hide");
    appOverlay.classList.remove("show");
}
appOverlay.addEventListener("click",OnClickOverlay)
getCloseSortBtn.addEventListener("click",hideSortWindow)
sortMobileBtn.addEventListener("click",showSortSheet)
getSortBtn.forEach((btn)=>{
btn.addEventListener("click",sortActivate)
})


