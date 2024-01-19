import {NavBar} from "../components/nav_bar/_nav-bar.js"
import {Footer} from "../components/footer/footer.js"
import {getUrlParam,cardContent} from "../components/utilities/utilities.js"
import {searchCourses} from "../components/search-inputs/local-category-search.js"
import {sortCourses ,basedFreeOffer,sortFreeCheckBox} from "../components/sort-courses/sort.js"
window.customElements.define("navbar-tag",NavBar)
window.customElements.define("footer-tg",Footer)
const SortBtn = document.querySelectorAll(".sort-select-btn");
const categoryCourseWrapper = document.getElementById("cat_course_wrapper");
const freeInput = document.querySelectorAll(".freeInp");
const getbottomSheet = document.querySelector(".bottom-sheet");
const bottomSheetItem = document.querySelectorAll(".bottom-sheet__item");
const getCloseSortBtn =document.querySelector(".bottom-sheet__close-btn");
const appOverlay  = document.querySelector(".app-overlay");
const sortMobileBtn = document.getElementById("sort-btn");
const getFitlerSheet= document.querySelector(".filter-sec");
const filterBtn  = document.getElementById("filter-btn");
const filterCloseBtn = document.querySelector(".filter__close-btn");
const getSortBtn  = document.querySelectorAll(".sort-btn");
const searchInput = document.getElementById("search-input");
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
// show filter section
const showFilterSheet = ()=>{
    getFitlerSheet.classList.add("filter--open")
}
// hide filter section
const hideFilterSheet = ()=>{
    getFitlerSheet.classList.remove("filter--open") 
}
// clickable overlay
const OnClickOverlay = ()=>{
    getbottomSheet.classList.remove("bottom-sheet--open")
    appOverlay.classList.add("hide");
    appOverlay.classList.remove("show");
}
// //////////////////
// show correct data in DOM
// //////////////////
const getDataByCategory = async ()=>{
    const categoryCourseWrapper = document.getElementById("cat_course_wrapper");
    const getCatTitle  =getUrlParam("cat");
    // ///////////
    // show relate course in DOM
    // ///////////
    const fetByCatData= await fetch(`http://localhost:4000/v1/courses/category/${getCatTitle}`);
    const getDataResponse = await fetByCatData.json();
    getDataResponse.forEach(course =>{
        cardContent(course)
    })
    // ///////////
    // insert correct title
    // ///////////
    const getTitle = document.getElementsByClassName("cat-title")[0];
    const fetchTitleData = await fetch(`http://localhost:4000/v1/menus`)
    const getTitleRes= await fetchTitleData.json();
    getTitleRes.map(title =>{
        if(getCatTitle === title.href){
            return getTitle.textContent = title.title
        }
    })
    
}
filterCloseBtn.addEventListener("click",hideFilterSheet)
filterBtn.addEventListener("click",showFilterSheet)
appOverlay.addEventListener("click",OnClickOverlay)
getCloseSortBtn.addEventListener("click",hideSortWindow)
sortMobileBtn.addEventListener("click",showSortSheet)
getSortBtn.forEach((btn)=>{
btn.addEventListener("click",sortActivate)
})
window.addEventListener("load",()=>{
    getDataByCategory();
})
// ///////
// sort event listeners
// ///////
freeInput.forEach(inp =>{
   inp.addEventListener("change",(e)=>{
   if(e.target.checked){
    sortFreeCheckBox(e)
    SortBtn.forEach((sortBtn) => {
  sortBtn.addEventListener("click", (e) => {
    let getDataId  = e.target.dataset.id
    basedFreeOffer(getDataId)
  });
});
   }
   else{
    sortFreeCheckBox(e)
    SortBtn.forEach((sortBtn) => {
        sortBtn.addEventListener("click", (e) => {
          let getDataId  = e.target.dataset.id
          sortCourses(getDataId);
        });
      });
   }
   })
})
SortBtn.forEach((sortBtn) => {
    sortBtn.addEventListener("click", (e) => {
      let getDataId  = e.target.dataset.id
      sortCourses(getDataId);
    });
  });
//   //////////////
// search event listeners
//   //////////////


searchInput.addEventListener("input",(e)=>{
    searchCourses(e)
})