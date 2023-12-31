const getLgSearchBtn =document.getElementById("active-search-box");
const getSearchBox =document.getElementById("search-box");
const getOvralay = document.getElementsByClassName("app-overlay")[0];
const getSwichTheme = document.getElementsByClassName("switch-theme")[0];
let changeTheme = ()=>{
document.querySelector("html").classList.toggle("dark");
if (document.querySelector("html").classList.contains("dark")) {
    localStorage.setItem("theme","dark")
} else {
    localStorage.setItem("theme","light")
    
}
}
let checkTheme = ()=>{
    let getThemeData = localStorage.getItem("theme")
if (getThemeData == "dark") {
    document.querySelector("html").classList.add("dark")
}
}
let showOverlaySearchBox = ()=>{
    getLgSearchBtn.classList.toggle("hide")
    getLgSearchBtn.classList.toggle("show")
    getSearchBox.classList.toggle("z-50")
    getOvralay.classList.toggle("hide")
    getOvralay.classList.toggle("show")
}
let onClickOverlay = ()=>{
    getLgSearchBtn.classList.add("hide")
    getLgSearchBtn.classList.remove("show")
    getSearchBox.classList.remove("z-50")
    getOvralay.classList.add("hide")
    getOvralay.classList.remove("show")

}
window.addEventListener("load",checkTheme)
getSwichTheme.addEventListener("click",changeTheme)
getOvralay.addEventListener("click",onClickOverlay)
getSearchBox.addEventListener("click",showOverlaySearchBox)