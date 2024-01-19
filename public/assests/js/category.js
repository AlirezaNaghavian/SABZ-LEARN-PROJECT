import {NavBar} from "../components/nav_bar/_nav-bar.js"
import {Footer} from "../components/footer/footer.js"
import {getUrlParam} from "../components/utilities/utilities.js"
import {searchCourses} from "../components/search-inputs/local-category-search.js"
import {sortCourses ,basedFreeOffer,sortFreeCheckBox} from "../components/sort-courses/sort.js"
window.customElements.define("navbar-tag",NavBar)
window.customElements.define("footer-tg",Footer)
const SortBtn = document.querySelectorAll(".sort-select-btn");
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
        categoryCourseWrapper.insertAdjacentHTML("beforeend",`
        <div class="course  flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
        <!-- card-cover -->
        <div class="relative h-[168px] ">
            <a href="#" class="w-full h-full block" title="${course.name}">
                
                <img src="http://localhost:4000/courses/covers/${course.cover}" class="w-full h-full object-cover rounded-2xl" loading="lazy" alt="">
            </a>
            <span class="absolute ${course.price === 0 ? "flex" : "hidden"} right-2.5 top-2.5 flex justify-center items-center w-12 h-6 bg-baseColor text-white rounded-xl font-DanaBold text-sm">100%</span>
        </div>
        <!-- card-body-content -->
        <div class=" flex-grow px-6 pt-2.5 pb-3.5 ">
            <a href="#" class="badge-sec inline-flex items-center justify-center  bg-sky-500/10 dark:bg-yellow-400/10  rounded mb-2.5 ">
                <span class="text-right  text-sky-500 dark:text-yellow-400 font-normal font-Dana leading-none text-xs px-1.5 py-1 ">${course.cat_title}</span>
            </a>
               <h4 class="text-zinc-700 dark:text-white   font-DanaMedium leading-normal mb-2.5 line-clamp-2 h-12">
                <a href="#">
                   ${course.name}
                </a>
               </h4>
               <p class=" text-slate-500  dark:text-slate-400 line-clamp-2 h-9 text-sm font-light font-Dana leading-tight">
                  ${course.description}
               </p> 
        </div>
        <!-- card-footer -->
        <div class="px-6 pb-2">
            <div class="flex justify-between items-center pb-3 border-b border-b-gray-100 dark:border-b-gray-700">
               <!-- teacher & TIME -->
                <div class="flex gap-2.5 flex-wrap text-slate-500 dark:text-slate-400 text-xs child:transition-colors group ">
                   <div class="flex items-center border-x-amber-100 hover:text-baseColor transition-colors">
                    <svg class="w-4 h-4 group-hover:text-baseColor"><use xlink:href="#card-user-icon"></use></svg>
                    <a href="#" class=" group-hover:text-baseColor">${course.creator}</a>
                   </div>
                    <div class="flex items-center gap-x-1 text-xs text-slate-500 dark:text-slate-400">
                        <svg class="h-4 w-4"><use xlink:href="#card-clock"></use></svg>
                        <span>${course.time}</span>
                    </div>
                </div>
                <!-- rating-us -->
                <div class="flex items-center gap-x-1 text-amber-400 text-xs">
                    <span class="leading-[1px]">${course.courseAverageScore}</span>
                    <svg class="w-4 h-4 "><use xlink:href="#card-star"></use></svg>
                </div>
            
            </div>
            <!-- price section -->
            <div class="flex items-end justify-between mt-2">
                <span class="flex items-center gap-x-1.5 text-zinc-700 dark:text-white">
                    <svg class="w-5 h-5"><use xlink:href="#solid-users"></use></svg>
                    <span>${course.studens}</span>
                </span>
                <div class="flex items-start flex-col  ">
                  <span class="price-number course__offer-price offer course-price inline-block relative font-danaLight text-zinc-700 dark:text-slate-400 text-sm -mb-1.5 ">
                     
                      <span>${course.prev_offe === 0 ? "": course.prev_offe.toLocaleString()}</span>
                    </span>  
                    <span class="course__price font-DanaMedium text-xl text-baseColor space-x-1.5 flex gap-x-1">
                    <span>
                    ${course.price === 0 ? "رایگان!" : course.price.toLocaleString()}
                    </span>
                    <svg class="${course.price === 0 ? "hidden" : "w-4 h-4"}"><use xlink:href="#toman"></use></svg>
                    </span>
                
                </div>
            </div>
        </div>
    </div>
        `)
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