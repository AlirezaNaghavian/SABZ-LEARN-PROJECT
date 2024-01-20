import {NavBar} from "../components/nav_bar/_nav-bar.js"
import {Footer} from "../components/footer/footer.js"
import { getUrlParam ,getToken} from "../components/utilities/utilities.js";
window.customElements.define("navbar-tag", NavBar);
window.customElements.define("footer-tg",Footer)
const chapterHeader= document.querySelectorAll(".chapter__head");

const accardionSession = (e,ICON)=>{
e.classList.toggle("chapter__head--active")
ICON.classList.toggle("rotate-180")
}
// get session datas
const getSessionDatas = async()=>{
    const urlParam = getUrlParam("name");
    const sessionId= getUrlParam("id");
    const token = getToken();
    const fetchSessionData = await fetch(`http://localhost:4000/v1/courses/${urlParam}/${sessionId}`,{
        headers:{
            Authorization : `Bearer ${token}`
        }
    })
    const getSessionRes  = await fetchSessionData.json();
    console.log(getSessionRes);

}


getSessionDatas()


chapterHeader.forEach(chapter =>{
    let arrowiCON = chapter.lastElementChild
    chapter.addEventListener("click",(e)=>{
        accardionSession(chapter,arrowiCON)
    })
})

