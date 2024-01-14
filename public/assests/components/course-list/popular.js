const popularCourseWrapper =document.getElementById("popular-courses");
const getPopularCourseDatas = async ()=>{
    const fetchPopCourses = await fetch(`http://localhost:4000/v1/courses/popular`);
    const popDataRes = await fetchPopCourses.json();
    popDataRes.slice(0,7).forEach(popCourse =>{
        popularCourseWrapper.insertAdjacentHTML("beforeend",`
        <div class="course  flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
        <!-- card-cover -->
        <div class="relative h-[168px] ">
            <a href="#" class="w-full h-full block" title="${popCourse.name}">
                
                <img src="http://localhost:4000/courses/covers/${popCourse.cover}" class="w-full h-full object-cover rounded-2xl" loading="lazy" alt="">
            </a>
            <span class="absolute ${popCourse.price === 0 ? "flex" : "hidden"} right-2.5 top-2.5 flex justify-center items-center w-12 h-6 bg-baseColor text-white rounded-xl font-DanaBold text-sm">100%</span>
        </div>
        <!-- card-body-content -->
        <div class=" flex-grow px-6 pt-2.5 pb-3.5 ">
            <a href="#" class="badge-sec inline-flex items-center justify-center  bg-sky-500/10 dark:bg-yellow-400/10  rounded mb-2.5 ">
                <span class="text-right  text-sky-500 dark:text-yellow-400 font-normal font-Dana leading-none text-xs px-1.5 py-1 ">${popCourse.cat_title}</span>
            </a>
               <h4 class="text-zinc-700 dark:text-white   font-DanaMedium leading-normal mb-2.5 line-clamp-2 h-12">
                <a href="#">
                   ${popCourse.name}
                </a>
               </h4>
        </div>
        <!-- card-footer -->
        <div class="px-6 pb-2">
            <div class="flex justify-between items-center pb-3 border-b border-b-gray-100 dark:border-b-gray-700">
               <!-- teacher & TIME -->
                <div class="flex gap-2.5 flex-wrap text-slate-500 dark:text-slate-400 text-xs child:transition-colors group ">
                   <div class="flex items-center border-x-amber-100 hover:text-baseColor transition-colors">
                    <svg class="w-4 h-4 group-hover:text-baseColor"><use xlink:href="#card-user-icon"></use></svg>
                    <a href="#" class=" group-hover:text-baseColor">${popCourse.creator}</a>
                   </div>
                    <div class="flex items-center gap-x-1 text-xs text-slate-500 dark:text-slate-400">
                        <svg class="h-4 w-4"><use xlink:href="#card-clock"></use></svg>
                        <span>${popCourse.time}</span>
                    </div>
                </div>
                <!-- rating-us -->
                <div class="flex items-center gap-x-1 text-amber-400 text-xs">
                    <span class="leading-[1px]">${popCourse.courseAverageScore}</span>
                    <svg class="w-4 h-4 "><use xlink:href="#card-star"></use></svg>
                </div>
            
            </div>
            <!-- price section -->
            <div class="flex items-end justify-between mt-2">
                <span class="flex items-center gap-x-1.5 text-zinc-700 dark:text-white">
                    <svg class="w-5 h-5"><use xlink:href="#solid-users"></use></svg>
                    <span>${popCourse.studens}</span>
                </span>
                <div class="flex items-start flex-col  ">
                  <span class="price-number course__offer-price offer course-price inline-block relative font-danaLight text-zinc-700 dark:text-slate-400 text-sm -mb-1.5 ">
                     
                      <span>${popCourse.prev_offe === 0 ? "": popCourse.prev_offe.toLocaleString()}</span>
                    </span>  
                    <span class="course__price font-DanaMedium text-xl text-baseColor space-x-1.5 flex gap-x-1">
                    <span>
                    ${popCourse.price === 0 ? "رایگان!" : popCourse.price.toLocaleString()}
                    </span>
                    <svg class="${popCourse.price === 0 ? "hidden" : "w-4 h-4"}"><use xlink:href="#toman"></use></svg>
                    </span>
                
                </div>
            </div>
        </div>
    </div>
        `)
    })
}
window.addEventListener("load",()=>{
    getPopularCourseDatas();
})