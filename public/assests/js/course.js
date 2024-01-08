import { NavBar } from "../components/nav_bar/_nav-bar.js";
import { Footer } from "../components/footer/footer.js";
const getCourseContentDesc = document.getElementsByClassName("course_content")[0];
const courseContentShadow = document.getElementsByClassName("course-content-shadow")[0];
const getexpandTitle =  document.getElementsByClassName("expand-title")[0] 
const getchevronIcon =  document.getElementsByClassName("chevron-icon")[0]
const expandBtn = document.getElementById("expand-btn");
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



expandBtn.addEventListener("click",expandDescription)
window.customElements.define("navbar-tag",NavBar)