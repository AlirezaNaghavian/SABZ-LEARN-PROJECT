import {NavBar} from "../components/nav_bar/_nav-bar.js"
import {Footer} from "../components/footer/footer.js"
window.customElements.define("navbar-tag", NavBar);
window.customElements.define("footer-tg",Footer)
const chapterHeader= document.querySelectorAll(".chapter__head");

const accardionSession = (e,ICON)=>{
e.classList.toggle("chapter__head--active")
ICON.classList.toggle("rotate-180")
}



chapterHeader.forEach(chapter =>{
    let arrowiCON = chapter.lastElementChild
    chapter.addEventListener("click",(e)=>{
        accardionSession(chapter,arrowiCON)
    })
})