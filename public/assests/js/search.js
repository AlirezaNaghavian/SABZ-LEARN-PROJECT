import {NavBar} from "../components/nav_bar/_nav-bar.js"
import {Footer} from "../components/footer/footer.js"
import {getUrlParam,cardContent,getToken} from "../components/utilities/utilities.js"
import {searchCourses} from "../components/search-inputs/global-search-category-inpus.js"
window.customElements.define("navbar-tag",NavBar);
window.customElements.define("footer-tg",Footer)
const getSortBtn  = document.querySelectorAll(".sort-btn");
const getbottomSheet = document.querySelector(".bottom-sheet");
const getFitlerSheet= document.querySelector(".filter-sec");
const bottomSheetItem = document.querySelectorAll(".bottom-sheet__item");
const appOverlay  = document.querySelector(".app-overlay");
const filterBtn  = document.getElementById("filter-btn");
const SortBtn = document.querySelectorAll(".sort-select-btn");
const filterCloseBtn = document.querySelector(".filter__close-btn");
const getCloseSortBtn =document.querySelector(".bottom-sheet__close-btn");
const sortMobileBtn = document.getElementById("sort-btn");
const freeInput = document.querySelectorAll(".freeInp");
const searchInput = document.getElementById("search-glob-input");
const categoryCourseWrapper = document.getElementById("cat_course_wrapper");
const checkBoxBtns = document.querySelectorAll(".check-sort-input");
const emptyFieldWrapper = document.getElementById("empty-field-wrapper");

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
getSortBtn.forEach((btn)=>{
    btn.addEventListener("click",sortActivate)
    })
filterCloseBtn.addEventListener("click",hideFilterSheet)
filterBtn.addEventListener("click",showFilterSheet)
appOverlay.addEventListener("click",OnClickOverlay)
getCloseSortBtn.addEventListener("click",hideSortWindow)
sortMobileBtn.addEventListener("click",showSortSheet)
// //////////////
// //////////////
// get course search data
// //////////////
// //////////////
const getDataByCategory = async (event)=>{
    try{
        let dataId = event
        const getCatTitle  =getUrlParam("value");
        // ///////////
        // show relate course 
        // ///////////
        const fetchRelateData = await fetch(`http://localhost:4000/v1/courses/related/${getCatTitle}`);
        const getRlateRespose = await fetchRelateData.json();
        // //////////
        // show value data 
        // //////////
        const fetByValueData= await fetch(`http://localhost:4000/v1/courses/${getCatTitle}`)
      
        const getDataResponse = await fetByValueData.json();
        //////////////////
        // concat both datas   
        //////////////////   
        let changeDataToArr = [...getRlateRespose]
        changeDataToArr.push(getDataResponse);
    
        switch (dataId){
            case "expensive":{
                ascendMode(changeDataToArr);
                break
            }
            case "cheapest":{
                descendMode(changeDataToArr);
               break
               }
               case "popular":{
                   popularMode(changeDataToArr)
                 break
               }
               default:{
                defaultMode(changeDataToArr);
               }
        }
    }catch(e){
        emptyFieldWrapper.classList.remove("hidden");

    }
   

}
const ascendMode = (courses) => {
    const ascendSort = courses.sort((firstValue, lastValue) => {
          return lastValue.price - firstValue.price;
    });
  return  ascendData(ascendSort);
};
const descendMode = (e) => {
    const descendSort = e.sort((firtsValue, lastValue) => {
      return firtsValue.price - lastValue.price;
    });
    return descendData(descendSort) ;
  };
  const popularMode = (e) => {
    const popularSort = e.sort((firtsValue, lastValue) => {
      return lastValue.studens - firtsValue.studens;
    });
    return popularData(popularSort) ;
  };
  const defaultMode =(e)=>{
    categoryCourseWrapper.innerHTML = ""
e.forEach(course =>{
    cardContent(course);
})
return
}
const ascendData = (ascendSort)=>{
    categoryCourseWrapper.innerHTML = ""
ascendSort.forEach(course =>{
    if(course.price !==0){

        cardContent(course)
    }
   
 
})
}
const descendData = (ascendSort)=>{
    categoryCourseWrapper.innerHTML  = ""

ascendSort.forEach(course =>{
     if(course.price !== 0){
        cardContent(course);
    }
})
}
const popularData = (ascendSort)=>{
    categoryCourseWrapper.innerHTML  = ""
ascendSort.forEach(course =>{
    if(course.price !== 0){
        cardContent(course);
    } 
})
}
// /////////////////
// show presell courses in DOM
// /////////////////
const sortBasedPresell = async (e)=>{
    let presellId=  e.target.dataset.id;
    const fetchPresellCourses = await fetch(`http://localhost:4000/v1/courses/presell`);
    const presellResponse = await fetchPresellCourses.json();
    const presellArr= [...presellResponse];
    if(presellId === "presell" && e.target.checked){
        showPresellData(presellArr);
    }else if(presellId === "presell" && !e.target.checked){
    let getCatTitle  =getUrlParam("value");
    let fetchRelateData = await fetch(`http://localhost:4000/v1/courses/related/${getCatTitle}`);
    let getRlateRespose = await fetchRelateData.json();
    let fetByValueData= await fetch(`http://localhost:4000/v1/courses/${getCatTitle}`)
  
    let getDataResponse = await fetByValueData.json();
    let changeDataToArr = [...getRlateRespose]
    changeDataToArr.push(getDataResponse);
        defaultMode(changeDataToArr);
    }
    
    }
    const showPresellData = (presell)=>{
        categoryCourseWrapper.innerHTML = "";
        presell.forEach(course=>{
            console.log(course);
            if(course.categoryID.name == "value"){
                cardContent(course);
            }else{
                emptyFieldWrapper.classList.remove("hidden");
            }
        })
    }
    // ////////////////
    // ////////////////
    // based free courses
    // ////////////////
     //based free courses sort
 const basedFreeOffer = async (e)=>{
    let dataId = e
    let getCatTitle  =getUrlParam("value");
    let fetchRelateData = await fetch(`http://localhost:4000/v1/courses/related/${getCatTitle}`);
       let getRlateRespose = await fetchRelateData.json();
   let fetByValueData= await fetch(`http://localhost:4000/v1/courses/${getCatTitle}`)
     
       let getDataResponse = await fetByValueData.json();
       let changeDataToArr = [...getRlateRespose]
       changeDataToArr.push(getDataResponse);
    switch (dataId) {
      case "expensive": {
        ascendPrevMode(changeDataToArr);
        break
      }
      case "cheapest":{
        descendPrevMode(changeDataToArr);
      break
      }
      case "popular":{
          popularPrevMode(changeDataToArr)
        break
      }
      default:{
       defaultPrevMode(changeDataToArr);
      }
    }
 } 
 const ascendPrevMode = (arr)=>{
    const ascendPrevSort = arr.sort((firtsValue, lastValue) => {
        return lastValue.prev_offe - firtsValue.prev_offe;
      });
    return  ascendPrevData(ascendPrevSort)
}
const descendPrevMode = (arr)=>{
    const descendPrevSort = arr.sort((firtsValue, lastValue) => {
        return firtsValue.prev_offe - lastValue.prev_offe;
      });
      return descendPrevData(descendPrevSort);
}
const popularPrevMode = (err)=>{
const popPrevSort=  err.sort((firtsValue,lastValue) =>{
return lastValue.studens - firtsValue.studens
})
return popularPrevData(popPrevSort)
}
const defaultPrevMode = (err)=>{
    categoryCourseWrapper.innerHTML = "";
    err.forEach(course =>{
        if(course.prev_offe !==0 && course.price ===0){
            cardContent(course)
        }
    })
}
const ascendPrevData = (ascendPrevSort)=>{
    categoryCourseWrapper.innerHTML = "";
    ascendPrevSort.forEach(course =>{
        if(course.prev_offe !==0){
            cardContent(course)
        }
    })
}
const descendPrevData = (descendPrevSort)=>{
    categoryCourseWrapper.innerHTML = "";
    descendPrevSort.forEach(course =>{
        if(course.prev_offe !==0){
            cardContent(course)
        }
    })
}
const popularPrevData = (popularPrevSort)=>{
    categoryCourseWrapper.innerHTML = "";
    popularPrevSort.forEach(course =>{
        if(course.prev_offe !==0){
            cardContent(course)
        }
    })
}
const sortFreeCheckBox= async (event)=>{
    let inputId = event.target.dataset.id;
    let getCatTitle  =getUrlParam("value");
    let fetchRelateData = await fetch(`http://localhost:4000/v1/courses/related/${getCatTitle}`);
       let getRlateRespose = await fetchRelateData.json();
   let fetByValueData= await fetch(`http://localhost:4000/v1/courses/${getCatTitle}`)
       let getDataResponse = await fetByValueData.json();
    let changeDataToArr = [...getRlateRespose]
       changeDataToArr.push(getDataResponse);
    if(inputId === "free" && event.target.checked){
        showFreeCourses(changeDataToArr)
    }
    else if(inputId === "free" && !event.target.checked){
    defaultMode(changeDataToArr)
    }
    }
    const showFreeCourses =(free)=>{
        categoryCourseWrapper.innerHTML = "";
    free.forEach(course =>{
        if(course.prev_offe !== 0){
            cardContent(course);
        }
    
    })
    }
    checkBoxBtns.forEach(sortBtn =>{
        sortBtn.addEventListener("change",(e)=>{
            sortBasedPresell(e)
        })
    })
const setResultTitle = ()=>{
    const getTitle = document.getElementsByClassName("cat-title")[0];
    const getValueParam = getUrlParam("value");
    getTitle.textContent = `جستجو: ${getValueParam}`;
}
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
       getDataByCategory(getDataId);
     });
   });


window.addEventListener("load",()=>{
    getDataByCategory();
    setResultTitle();
})
searchInput.addEventListener("input",(e)=>{
    searchCourses(e)
})