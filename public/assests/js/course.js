import { NavBar } from "../components/nav_bar/_nav-bar.js";
import { Footer } from "../components/footer/footer.js";
const getCourseContentDesc = document.getElementsByClassName("course_content")[0];
const courseContentShadow = document.getElementsByClassName("course-content-shadow")[0];
const getexpandTitle =  document.getElementsByClassName("expand-title")[0] 
const getchevronIcon =  document.getElementsByClassName("chevron-icon")[0]
const expandBtn = document.getElementById("expand-btn");
const topicName = document.getElementsByClassName("topic-name")[0];
const topicIcon = document.querySelector(".topic-name svg")
const topicBody = document.getElementsByClassName("topic-body")[0];
const getCommentForm = document.getElementById("comment-form")
const addCommentBtn =document.getElementById("add-comment-btn");
const userCommentId= document.getElementById("comment-id");
const userReplyCommnet  = document.getElementById("comment-is-reply");
const cancelCommentBtn =document.getElementById("comment-cancel-btn");
const replyBtn = document.getElementsByClassName("comment__reply-btn")[0];
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
// add course comment
// open comment section
const addComment = ()=>{
    getCommentForm.classList.add("active")
    userCommentId.value= 2860
    userReplyCommnet.value = "no"
}
// close comment section
const cancelSendComment = ()=>{
    getCommentForm.classList.remove("active")
    userCommentId.value= ""
    userReplyCommnet.value = ""
}
const replyUserComment = ()=>{
    getCommentForm.classList.add("active")
    userCommentId.value= 2860
    userReplyCommnet.value = "yes"
    // این تیکه ناقصه و فقط استایل ها هندل شده هنوز داینامیک نشده
}
replyBtn.addEventListener("click",replyUserComment)
cancelCommentBtn.addEventListener("click",cancelSendComment)
addCommentBtn.addEventListener("click",addComment)
topicName.addEventListener("click",openCourseSeessions)
expandBtn.addEventListener("click",expandDescription)
window.customElements.define("navbar-tag",NavBar)