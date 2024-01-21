import { NavBar } from "../components/nav_bar/_nav-bar.js";
import { Footer } from "../components/footer/footer.js";
import {getCourseData} from "../components/course-info/courseInformation.js"
const getCourseContentDesc = document.getElementsByClassName("course_content")[0];
const courseContentShadow = document.getElementsByClassName("course-content-shadow")[0];
const getexpandTitle =  document.getElementsByClassName("expand-title")[0] 
const getchevronIcon =  document.getElementsByClassName("chevron-icon")[0]
const expandBtn = document.getElementById("expand-btn");
const topicName = document.getElementsByClassName("topic-name")[0];
const topicIcon = document.querySelector(".topic-name svg")
const topicBody = document.getElementsByClassName("topic-body")[0];
const submitCommentBtn = document.getElementById("comment-submit-btn");

// expan more details
let descOpen = false
const expandDescription = ()=>{
    if (descOpen) {
        getCourseContentDesc.style.cssText = "max-height : 800px"
        courseContentShadow.classList.remove("hidden")
        getchevronIcon.classList.remove("rotate-180")
        getexpandTitle.innerHTML = "مشاهده بیشتر"
      
        descOpen = false
    } else {
        getCourseContentDesc.style.cssText = "max-height : 100%"
        courseContentShadow.classList.add("hidden")
        getchevronIcon.classList.add("rotate-180")
        getexpandTitle.innerHTML = "مشاهده کمتر"
        descOpen = true
    }
}
let topicOpen = false
const openCourseSeessions = ()=>{
    if (topicOpen) {
        topicName.classList.add("topic__name--active")
        topicIcon.classList.add("rotate-180");
        topicBody.style.cssText = "max-height : fit-content"
        topicOpen = false
    } else {
        topicName.classList.remove("topic__name--active")
        topicIcon.classList.remove("rotate-180");
        topicBody.style.cssText = "max-height : 0px"
        topicOpen = true
    }


}
topicName.addEventListener("click",openCourseSeessions)
expandBtn.addEventListener("click",expandDescription)
window.customElements.define("navbar-tag",NavBar)
window.customElements.define("footer-tg",Footer)
window.addEventListener("load",()=>{
    getCourseData();
})