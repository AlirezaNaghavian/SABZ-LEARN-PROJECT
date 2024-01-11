import {NavBar} from "../components/nav_bar/_nav-bar.js"

const getCourseContentDesc = document.getElementsByClassName("course_content")[0];
const courseContentShadow = document.getElementsByClassName("course-content-shadow")[0];
const getchevronIcon =  document.getElementsByClassName("chevron-icon")[0]
const getexpandTitle =  document.getElementsByClassName("expand-title")[0] 
const expandBtn = document.getElementById("expand-btn");
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
expandBtn.addEventListener("click",expandDescription)
window.customElements.define("navbar-tag", NavBar)

