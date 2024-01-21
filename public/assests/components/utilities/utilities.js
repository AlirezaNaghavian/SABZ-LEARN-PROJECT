const categoryCourseWrapper = document.getElementById("cat_course_wrapper");
const notficationWrapper =document.getElementsByClassName("notification")[0]
const saveIntoLStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
const getFromLstarage = (key) => {
  return JSON.stringify(localStorage.getItem(key));
};
const getToken = () => {
const userInfos =  JSON.parse(localStorage.getItem("user"));
return userInfos ? userInfos.token : null;
};
const getUrlParam = key =>{
  const urlParam = new URLSearchParams(window.location.search);
  return urlParam.get(key);
}
const cardContent = (course)=>{
  categoryCourseWrapper.insertAdjacentHTML("beforeend",`
  <div class="course  flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
  <!-- card-cover -->
  <div class="relative h-[168px] ">
      <a href="course.html?name=${course.shortName}" class="w-full h-full block" title="${course.name}">
          
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
          <a href="course.html?name=${course.shortName}">
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

const showNotfication = (title,content,colorIcon,colorLine)=>{
  notficationWrapper.classList.add("notification--show");
  notficationWrapper.classList.add("notification--danger");

  notficationWrapper.insertAdjacentHTML("beforeend",`
  <div class="notification__wrapper">
  <svg class="notification__icon ${colorIcon}">
      <use href="#check-circle-solid"></use>
  </svg>
  <div class="notification__content">
      <span class="notification__title">${title}</span>
      <span class="notification__text">${content}</span>
  </div>
</div>
<span class="notification__line  ${colorLine}"></span>
  
  `)
  const notifyLine = document.getElementsByClassName("notification__line")[0];
  console.log(notifyLine);
  let widthPercent = 100;
  let startTime;
  
  function animate() {
    const currentTime = new Date().getTime();
    const elapsed = currentTime - startTime;
    const duration = 5000; // 5000 milliseconds (5 seconds)
  
    widthPercent = 100 - (elapsed / duration) * 100;
    notifyLine.style.cssText = `width: calc(${widthPercent}% - 8px);`;
  
    if (widthPercent > 0) {
      requestAnimationFrame(animate);
    } else {
      setTimeout(() => {
        // Hide notification after 1 second
        notficationWrapper.classList.remove("notification--show");
        notficationWrapper.classList.remove("notification--danger");
        notifyLine.style.cssText = ""
      }, 1000);
    }
  }
  // Start animation
  startTime = new Date().getTime();
  animate();
}
export { saveIntoLStorage, getFromLstarage, getToken,getUrlParam ,cardContent ,showNotfication};
