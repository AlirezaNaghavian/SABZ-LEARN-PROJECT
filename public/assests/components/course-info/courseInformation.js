import { getUrlParam  } from "../utilities/utilities.js"
const courseInfoHeader = document.getElementById("course-info-header");
const CourseBoxInfo = document.getElementById("courseBoxInfo")
const mobileRating = document.getElementById("mobile-rating")
const mobileTeacherData = document.getElementById("mobileTeacherData")
const fullCourseInfo = document.getElementById("full-info")
const courseSessions = document.getElementById("lessons")
const courseComment = document.getElementById("course-comment");
const asideCourseData = document.getElementById("aside-course-info");
const getCourseData = async () =>{
const urlParam = getUrlParam("name");
const fetchCourseData= await fetch(`http://localhost:4000/v1/courses/${urlParam}`)
const getRes = await fetchCourseData.json();
courseHeader(getRes)
}
const courseHeader = (arr)=>{

        console.log(!arr.isUserRegisteredToThisCourse);
        courseInfoHeader.insertAdjacentHTML("beforeend",`
        <!-- course info -->
        <div class="flex flex-col justify-between w-full">
            <div>
                <h1 class="font-Morabba_bold text-2xl/[42px] sm:text-3xl/[48px] lg:text-[32px]/[48px] text-zinc-700 dark:text-white lg:line-clamp-2">
                    ${arr.name}
                </h1>
                <p class="font-Dana text-lg lg:text-xl/8 line-clamp-4 lg:line-clamp-2 xl:line-clamp-3 mt-3.5 xl:mt-5 text-zinc-700 dark:text-white">
                ${arr.subHeaderDescription}
                </p>
            </div>
            <div class="mt-5 pt-5 sm:pt-0 xl:mt-0 border-t sm:border-t-0 border-t-gray-100 dark:border-t-gray-700">
                <div class="flex flex-col-reverse sm:flex-row justify-between mt-6 sm:mt-3.5 items-center">
                    <!-- normal -->
                    <a href="#" class="${arr.isUserRegisteredToThisCourse =true ?"bg-baseColor w-full sm:w-auto button-xl text-white flex select-none cursor-pointer justify-center rounded-xl items-center transition-colors hover:bg-baseColor/70" : "bg-secondary w-full sm:w-auto button-xl text-white flex select-none cursor-pointer justify-center rounded-xl items-center transition-colors hover:bg-secondary/70"}">
                        <svg class="${arr.isUserRegisteredToThisCourse = true  ? "w-[25px] h-[30px]" : "hidden"}"><use xlink:href="#shield-done"></use></svg>
                        <svg class="${arr.isUserRegisteredToThisCourse = false ? "w-[25px] h-[30px] fill-white" : " hidden"}"><use xlink:href="#play-circle"></use> </svg>
                        <span id="reg-title">${arr.isUserRegisteredToThisCourse = true? "شرکت در دوره":"مشاهده جلسات"}</span>
                    </a>
                    <div class="text-center sm:text-right mb-5 sm:mb-0">
                        <div class="flex items-center justify-center sm:justify-end mb-1">
                            <!-- offer -->
                            <!-- price -->
                            <div class="font-DanaBold flex gap-x-2 justify-center text-3xl text-zinc-700 dark:text-white mr-4 sm:mr-2">
                                <span class="text-3xl">${arr.price === 0 ? arr.prev_offe.toLocaleString() : arr.price.toLocaleString()}</span>
                                <svg class="w-6 h-6"><use xlink:href="#toman"></use></svg>
                            </div>
                        </div>
                        <span class="text-baseColor"></span>
                    </div>
                </div>
            </div>
        </div>
        <!-- course banner -->
        <div class="shrink-0 mb-3 sm:mb-6 w-full h-auto md:w-10/12 lg:w-[440px] lg:h-[270px] xl:w-[610px] xl:h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden">
            <img src="http://localhost:4000/courses/covers/${arr.courseInfoCover}" alt="${arr.name}" class="w-full h-full object-cover">
        </div>
        
        `)
    
}
export{getCourseData}