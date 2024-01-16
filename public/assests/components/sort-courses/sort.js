import { getUrlParam } from "../utilities/utilities.js";
const categoryCourseWrapper = document.getElementById("cat_course_wrapper");
let getCatTitle = getUrlParam("cat");
const freeInput = document.querySelectorAll(".freeInp");
const checkBoxBtns = document.querySelectorAll(".check-sort-input");
// //////
// show card course content
// //////
const cardContent = (course)=>{
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
    return
}
const sortCourses = async (event) => {
  let dataId = event
  const fetByCatData = await fetch(`http://localhost:4000/v1/courses/category/${getCatTitle}`);
  const getDataResponse = await fetByCatData.json();
  const extractArr = [...getDataResponse];
  console.log(extractArr);
  switch (dataId) {
    case "expensive": {
       ascendMode(extractArr);
      break
    }
    case "cheapest":{
     descendMode(extractArr);
    break
    }
    case "popular":{
        popularMode(extractArr)
      break
    }
    default:{
     defaultMode(extractArr);
    }
  }

};

// ///////////////////
// sort data according dataset id
// ///////////////////

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
// ////////////////
// put data in Dom according  sort funcs
// ////////////////
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
// ////////////////
// sort data base on  presell
// ////////////////
const sortBasedPresell = async (e)=>{
    let presellId=  e.target.dataset.id;
    const fetchPresellCourses = await fetch(`http://localhost:4000/v1/courses/presell`);
    const presellResponse = await fetchPresellCourses.json();
    const presellArr= [...presellResponse];
    if(presellId === "presell" && e.target.checked){
        showPresellData(presellArr);
    }else if(presellId === "presell" && !e.target.checked){
        const fetByCatData = await fetch(`http://localhost:4000/v1/courses/category/${getCatTitle}`);
        const getDataResponse = await fetByCatData.json();
        const getCategoryArr = [...getDataResponse];
        defaultMode(getCategoryArr);
    }
    
    }
    const showPresellData = (presell)=>{
        categoryCourseWrapper.innerHTML = "";
        presell.forEach(course=>{
            if(course.categoryID.name == getCatTitle){
                cardContent(course);
            }
        })
    }
 //based free courses sort
 const basedFreeOffer = async (e)=>{
    let dataId = e
    const fetByCatData = await fetch(`http://localhost:4000/v1/courses/category/${getCatTitle}`);
    const getDataResponse = await fetByCatData.json();
    const extractArr = [...getDataResponse];
    switch (dataId) {
      case "expensive": {
        ascendPrevMode(extractArr);
        break
      }
      case "cheapest":{
        descendPrevMode(extractArr);
      break
      }
      case "popular":{
          popularPrevMode(extractArr)
        break
      }
      default:{
       defaultPrevMode(extractArr);
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


// ////////////////
// sort data base on presell
// ////////////////
const sortFreeCheckBox= async (event)=>{
let inputId = event.target.dataset.id;
const fetByCatData = await fetch(`http://localhost:4000/v1/courses/category/${getCatTitle}`);
const getDataResponse = await fetByCatData.json();
const freeDataArr= [...getDataResponse];
if(inputId === "free" && event.target.checked){
    showFreeCourses(freeDataArr)
}
else if(inputId === "free" && !event.target.checked){
defaultMode(freeDataArr)
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
export { sortCourses ,basedFreeOffer,sortFreeCheckBox};