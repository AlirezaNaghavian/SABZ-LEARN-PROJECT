import { getUrlParam ,getToken } from "../utilities/utilities.js"
const courseInfoHeader = document.getElementById("course-info-header");
const CourseBoxInfo = document.getElementById("courseBoxInfo")
const mobileRating = document.getElementById("mobile-rating")
const mobileTeacherData = document.getElementById("mobileTeacherData")
const fullCourseInfo = document.getElementById("full-info")
const courseSessions = document.getElementById("lessons")
const courseComment = document.getElementById("course-comment");
const asideCourseData = document.getElementById("aside-course-info");
const finallCourseTime = document.getElementById("course_whole_time");
const getCourseData = async () =>{
const token = getToken();
const urlParam = getUrlParam("name");
const fetchCourseData= await fetch(`http://localhost:4000/v1/courses/${urlParam}`,{
    Authorization : `Bearer ${token}`
})
const getRes = await fetchCourseData.json();

courseHeader(getRes)
courseInfoSec(getRes)
mobileRatesys(getRes)
mobileCreatorData(getRes)
asideSec(getRes)
fullDescriptionData(getRes)
sessions(getRes)
commentHandler(getRes)
}

const courseHeader = (arr)=>{
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
                        ${arr.isUserRegisteredToThisCourse = true ? `<span id="reg-title">شرکت در دوره</span>`:`<span id="reg-title">مشاهده جلسات</span>`}
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
const courseInfoSec = (arr) =>{
    console.log(arr);
    CourseBoxInfo.insertAdjacentHTML("beforeend",`
    
    <div class="flex flex-col md:flex-row justify-center md:justify-start  items-center gap-y-2 gap-x-4 text-center md:text-right bg-white dark:bg-gray-800 p-3.5 sm:p-5 shadow-light dark:shadow-none rounded-2xl">

    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
        <path d="M9.628,34C3.869,34,0,29.959,0,23.943V10.057C0,4.041,3.869,0,9.628,0h14.74C30.129,0,34,4.041,34,10.057V23.943C34,29.959,30.128,34,24.364,34ZM2.551,10.057V23.943c0,4.561,2.779,7.508,7.078,7.508H24.364c4.305,0,7.087-2.947,7.087-7.508V10.057c0-4.559-2.78-7.506-7.082-7.506H9.628C5.329,2.551,2.551,5.5,2.551,10.057ZM15.715,23.8V17a1.275,1.275,0,0,1,2.551,0v6.8a1.275,1.275,0,0,1-2.551,0Zm-.425-13.255a1.693,1.693,0,0,1,1.692-1.7H17a1.7,1.7,0,1,1-1.709,1.7Z" fill="#2ed573"></path>
    </svg>
    <div>
        <h4 class="font-DanaBold text-lg text-zinc-700 dark:text-white">وضعیت دوره</h4>
        <p class="text-slate-500 dark:text-gray-500 text-center md:text-right mt-0.5 sm:mt-1.5">${arr.isComplete === 0 ? "درحال برگزاری": "به اتمام رسیده"}</p>
        
    </div>
</div>
<div class="flex flex-col md:flex-row justify-center md:justify-start  items-center gap-y-2 gap-x-4 text-center md:text-right bg-white dark:bg-gray-800 p-3.5 sm:p-5 shadow-light dark:shadow-none rounded-2xl">

    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
        <path d="M9.63,34C3.869,34,0,29.959,0,23.943V10.057C0,4.041,3.869,0,9.63,0H24.369C30.129,0,34,4.041,34,10.057V23.943C34,29.959,30.129,34,24.367,34ZM2.551,10.057V23.943c0,4.561,2.779,7.508,7.079,7.508H24.367c4.3,0,7.084-2.947,7.084-7.508V10.057c0-4.559-2.78-7.506-7.082-7.506H9.63C5.329,2.551,2.551,5.5,2.551,10.057ZM22.11,21.527l-5.765-3.439a1.283,1.283,0,0,1-.621-1.1V9.578a1.275,1.275,0,1,1,2.549,0v6.691l5.145,3.065a1.276,1.276,0,0,1-.655,2.372A1.3,1.3,0,0,1,22.11,21.527Z" fill="#2ed573"></path>
    </svg>
    <div>
        <h4 class="font-DanaBold text-lg text-zinc-700 dark:text-white">مدت زمان دوره</h4>
        <p class="text-slate-500 dark:text-gray-500 text-center md:text-right mt-0.5 sm:mt-1.5">${arr.time}</p>

    </div>
</div>
<div class="flex flex-col md:flex-row justify-center md:justify-start  items-center gap-y-2 gap-x-4 text-center md:text-right bg-white dark:bg-gray-800 p-3.5 sm:p-5 shadow-light dark:shadow-none rounded-2xl">

    <svg xmlns="http://www.w3.org/2000/svg" width="30.891" height="35.833" viewBox="0 0 30.891 35.833">
        <path d="M8.745,35.833C3.35,35.833,0,32.335,0,26.7V11.622c0-5.237,2.989-8.6,7.866-8.958V1.25a1.19,1.19,0,1,1,2.377,0V2.633h10.42V1.25a1.189,1.189,0,1,1,2.375,0V2.664A8.319,8.319,0,0,1,28.632,5.1a9.239,9.239,0,0,1,2.258,6.53v15.2c0,5.553-3.352,9-8.747,9ZM2.377,26.7c0,4.275,2.261,6.63,6.369,6.63h13.4c4.107,0,6.37-2.31,6.37-6.5V14.841H2.377ZM28.514,12.34v-.718A6.641,6.641,0,0,0,26.95,6.864a5.976,5.976,0,0,0-3.912-1.693V6.735a1.189,1.189,0,1,1-2.375,0v-1.6H10.242v1.6a1.19,1.19,0,1,1-2.377,0V5.171c-3.549.313-5.489,2.575-5.489,6.451v.718ZM21.3,26.577a1.214,1.214,0,0,1,1.18-1.249H22.5A1.251,1.251,0,1,1,21.3,26.577Zm-7.029,0a1.214,1.214,0,0,1,1.18-1.249h.014a1.251,1.251,0,1,1-1.195,1.249Zm-7.046,0a1.215,1.215,0,0,1,1.182-1.249h.014a1.251,1.251,0,1,1-1.2,1.249ZM21.3,20.1a1.215,1.215,0,0,1,1.18-1.251H22.5A1.252,1.252,0,1,1,21.3,20.1Zm-7.029,0a1.215,1.215,0,0,1,1.18-1.251h.014A1.252,1.252,0,1,1,14.273,20.1Zm-7.046,0a1.217,1.217,0,0,1,1.182-1.251h.014a1.251,1.251,0,1,1-1.2,1.251Z" fill="#2ed573"></path>
    </svg>
    <div>
        <h4 class="font-DanaBold text-lg text-zinc-700 dark:text-white">آخرین بروزرسانی</h4>
        <p class="text-slate-500 dark:text-gray-500 text-center md:text-right mt-0.5 sm:mt-1.5" dir="rtl">${arr.updatedAt.slice(0,9).split("-").reverse().join(" \\ ")}</p>

    </div>
</div>
<div class="flex flex-col md:flex-row justify-center md:justify-start  items-center gap-y-2 gap-x-4 text-center md:text-right bg-white dark:bg-gray-800 p-3.5 sm:p-5 shadow-light dark:shadow-none rounded-2xl">

    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
        <path d="M0,27.688c0-6.355,9.724-6.355,12.92-6.355,5.546,0,12.918.655,12.918,6.32C25.838,34,16.115,34,12.92,34,9.387,34,0,34,0,27.688Zm2.553,0c0,2.412,3.487,3.635,10.367,3.635s10.365-1.236,10.365-3.671c0-2.418-3.487-3.643-10.365-3.643C8.191,24.01,2.553,24.647,2.553,27.688ZM29.26,28.5A1.358,1.358,0,0,1,30,26.779c1.446-.575,1.446-1.277,1.446-1.575,0-1.012-1.143-1.705-3.394-2.055a1.334,1.334,0,0,1-1.075-1.522A1.306,1.306,0,0,1,28.43,20.5c4.605.723,5.57,2.958,5.57,4.7,0,1.3-.536,3.06-3.094,4.075a1.218,1.218,0,0,1-.453.088A1.28,1.28,0,0,1,29.26,28.5ZM12.92,18.322a8.968,8.968,0,0,1-8.74-9.16A8.969,8.969,0,0,1,12.92,0a8.967,8.967,0,0,1,8.737,9.162,9.279,9.279,0,0,1-2.53,6.461,8.445,8.445,0,0,1-6.151,2.7ZM6.733,9.162a6.347,6.347,0,0,0,6.187,6.484h.052a5.977,5.977,0,0,0,4.345-1.908,6.567,6.567,0,0,0,1.789-4.571,6.351,6.351,0,0,0-6.186-6.49A6.349,6.349,0,0,0,6.733,9.162ZM23.382,15.14a1.329,1.329,0,0,1,1.086-1.511,4.5,4.5,0,0,0,3.731-4.5,4.471,4.471,0,0,0-3.63-4.486,1.333,1.333,0,0,1-1.054-1.538,1.286,1.286,0,0,1,1.466-1.1A7.1,7.1,0,0,1,30.75,9.135a7.155,7.155,0,0,1-5.927,7.145,1.278,1.278,0,0,1-1.441-1.14Z" fill="#2ed573"></path>
    </svg>
    <div>
        <h4 class="font-DanaBold text-lg text-zinc-700 dark:text-white">روش پشتیبانی</h4>
        <p class="text-slate-500 dark:text-gray-500 text-center md:text-right mt-0.5 sm:mt-1.5">${arr.support}</p>

    </div>
</div>
<div class="flex flex-col md:flex-row justify-center md:justify-start  items-center gap-y-2 gap-x-4 text-center md:text-right bg-white dark:bg-gray-800 p-3.5 sm:p-5 shadow-light dark:shadow-none rounded-2xl">

    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
        <path d="M7.135,34A6.852,6.852,0,0,1,.367,27.643l-.323-4.32A1.289,1.289,0,0,1,1.22,21.935a1.3,1.3,0,0,1,1.37,1.192l.321,4.32a4.28,4.28,0,0,0,4.223,3.97h19.73a4.278,4.278,0,0,0,4.223-3.97l.323-4.32a1.307,1.307,0,0,1,1.369-1.192,1.289,1.289,0,0,1,1.176,1.387l-.323,4.32A6.854,6.854,0,0,1,26.865,34Zm8.589-8.721v-3.1A32.082,32.082,0,0,1,.631,18.046,1.3,1.3,0,0,1,0,16.933V10.991A6.52,6.52,0,0,1,6.48,4.444H9.812A5.066,5.066,0,0,1,14.806,0h4.389a5.066,5.066,0,0,1,4.993,4.444h3.349A6.521,6.521,0,0,1,34,11.008v5.925a1.3,1.3,0,0,1-.631,1.113,32.1,32.1,0,0,1-15.093,4.137v3.1a1.276,1.276,0,1,1-2.552,0ZM2.552,10.991v5.188A30.422,30.422,0,0,0,16.914,19.62l.086,0,.085,0a30.471,30.471,0,0,0,14.364-3.441V11.008a3.949,3.949,0,0,0-3.911-3.979H6.48A3.949,3.949,0,0,0,2.552,10.991Zm19.04-6.546a2.493,2.493,0,0,0-2.4-1.86H14.806a2.493,2.493,0,0,0-2.4,1.86Z" fill="#2ed573"></path>
    </svg>
    <div>
        <h4 class="font-DanaBold text-lg text-zinc-700 dark:text-white">پیش نیاز</h4>
        <p class="text-slate-500 dark:text-gray-500 text-center md:text-right mt-0.5 sm:mt-1.5">${arr.req}</p>

    </div>
</div>
<div class="flex flex-col md:flex-row justify-center md:justify-start  items-center gap-y-2 gap-x-4 text-center md:text-right bg-white dark:bg-gray-800 p-3.5 sm:p-5 shadow-light dark:shadow-none rounded-2xl">

    <svg xmlns="http://www.w3.org/2000/svg" width="35.475" height="27.774" viewBox="0 0 35.475 27.774">
        <path d="M7.057,27.774A7.191,7.191,0,0,1,.024,21.066C.018,20.99,0,20.788.007,7.564a7.254,7.254,0,0,1,1.8-5.108A7.047,7.047,0,0,1,6.846.008C6.907,0,7.529,0,8.693,0c2.011,0,5.245.006,7.842.011l2.241,0C18.941,0,19.11,0,19.277,0a7.237,7.237,0,0,1,7.1,6.742c0,.041.005.273.008.7L29.916,4.4a3.243,3.243,0,0,1,3.614-.464,3.57,3.57,0,0,1,1.945,3.238l-.02,13.166a3.568,3.568,0,0,1-1.948,3.233A3.247,3.247,0,0,1,29.9,23.1L26.39,20.07q0,.063,0,.126a7.337,7.337,0,0,1-1.805,5.129,7.042,7.042,0,0,1-5.042,2.438c-.058,0-.622.006-1.677.006-2.156,0-5.911-.01-8.653-.016l-1.611,0c-.189.015-.366.023-.541.023Zm4.492-2.7h.014c2.556,0,5.085.008,6.57.008.812,0,1.244,0,1.32,0A4.531,4.531,0,0,0,22.7,23.507a4.583,4.583,0,0,0,1.134-3.225c0-.019,0-.039,0-.06,0-3,0-12.844-.009-13.314a4.606,4.606,0,0,0-4.578-4.222c-.126,0-.254.006-.38.016l-2.636,0c-2.995,0-6.221-.01-7.977-.01-.742,0-1.231,0-1.313,0A4.545,4.545,0,0,0,3.689,4.27,4.607,4.607,0,0,0,2.559,7.5c0,8.566,0,13.071.014,13.389a4.583,4.583,0,0,0,4.561,4.189c.124,0,.25,0,.374-.015Zm19.965-4.051a.785.785,0,0,0,.9.114.863.863,0,0,0,.486-.8l.02-13.168a.869.869,0,0,0-.484-.806.8.8,0,0,0-.9.118l-5.146,4.43q0,2.234,0,5.685Z" fill="#2ed573"></path>
    </svg>
    <div>
        <h4 class="font-DanaBold text-lg text-zinc-700 dark:text-white">نوع مشاهده</h4>
        <p class="text-slate-500 dark:text-gray-500 text-center md:text-right mt-0.5 sm:mt-1.5">به صورت آنلاین</p>
    </div>
</div>
    `)
}
const mobileRatesys = (arr)=>{
    mobileRating.insertAdjacentHTML("beforeend",`
    
    <div class="flex gap-3.5">
    <div class="flex items-center justify-between flex-grow bg-gray-100 dark:bg-gray-700 py-4 px-5 rounded-2xl">
        <svg class="text-baseColor w-8 h-8"><use xlink:href="#users-fill"></use></svg>
        <div class="flex flex-col items-center justify-center">
            <span class="font-DanaBold text-2xl text-zinc-700 dark:text-white">${arr.studens}</span>
            <p class="text-slate-500 dark:text-gray-500 text-sm">دانشجو</p>
        </div>
    </div>
    <div class="flex items-center justify-between flex-grow bg-gray-100 dark:bg-gray-700 py-4 px-5 rounded-2xl">
        <svg class="text-amber-400 dark:text-yellow-400 w-8 h-8"><use xlink:href="#star-fill"></use></svg>
        <div class="flex flex-col items-center justify-center">
            <span class="font-DanaBold text-2xl text-zinc-700 dark:text-white">5.0</span>
            <p class="text-slate-500 dark:text-gray-500 text-sm">رضایت</p>
        </div>
    </div>
</div>
<!-- mobile progress bar -->
<div class="mt-5">
    <div class="flex items-center justify-between mb-3 text-zinc-700 dark:text-white text-xl">
        <span>درصد تکمیل دوره</span>
        <span>${arr.isComplete ? "100%":`${(arr.sessions.length/23 *100).toFixed(0)}%`}</span>
    </div>
    <progress class=" rounded-2xl h-[.625rem] py-2 bg-sky-600 " value="${arr.isComplete ? "100":`${(arr.sessions.length/23 *100).toFixed(0)}`}" max="100" style="${arr.isComplete ? "width:100%;":`width:${(arr.sessions.length/23 *100).toFixed(0)}%`};"></progress>
</div>
    `)
}
const mobileCreatorData =(arr)=>{
    mobileTeacherData.insertAdjacentHTML("beforeend",`
    <div class="flex items-center justify-center gap-x-2.5 pb-5 border-b border-b-gray-100 dark:border-b-slate-600 mb-3.5">
    <img src="http://localhost:4000/courses/covers/${arr.creator.profile}" class="block h-[60px] w-[60px] object-cover rounded-full" alt="حمید رضا عبادی">
    <div class="flex flex-col items-center text-right">
        <h4 class="teacher_mobile_name text-zinc-700 dark:text-white text-2xl mb-1 font-DanaBold">${arr.creator.name}</h4>
        <p class="text-slate-500 dark:text-gray-500 text-sm mt-1.5"> توسعه دهنده  ${arr.cat_title}</p>
    </div>
</div>
<a href="#" class="flex items-center justify-center gap-x-1.5 text-slate-500 dark:text-gray-500 text-sm">
    <svg class="w-5 h-5"><use xlink:href="#arrow-right-on-rectangle"></use></svg>
    <span>مشاهده پروفایل</span>
</a>
    `)
}
const asideSec = (arr)=>{
    asideCourseData.insertAdjacentHTML("beforeend",`
    <!-- student & rating & progress -->
    <div class="hidden lg:block bg-white dark:bg-gray-800  p-5 shadow-light dark:shadow-none  rounded-2xl">
        <div class="flex gap-5">
            <div class="flex items-center justify-between flex-grow  bg-gray-100 dark:bg-gray-700 py-4 px-5 rounded-2xl">
                <svg class="w-8 h-8 text-baseColor"><use xlink:href="#users-fill"></use></svg>
                <div class="flex flex-col items-center justify-center">
                    <span class="font-DanaBold text-2xl text-zinc-700 dark:text-white">${arr.studens}</span>
                    <p class="text-slate-500 dark:text-gray-500 text-sm">دانشجو</p>
                </div>
            </div>
            <div class="flex items-center justify-between flex-grow  bg-gray-100 dark:bg-gray-700 py-4 px-5 rounded-2xl">
                <svg class="w-8 h-8 text-amber-400 dark:text-yellow-400"><use xlink:href="#star-fill"></use></svg>
                <div class="flex flex-col items-center justify-center">
                    <span class="font-DanaBold text-2xl text-zinc-700 dark:text-white">5.0</span>
                    <p class="text-slate-500 dark:text-gray-500 text-sm">رضایت</p>
                </div>
            </div>
        </div>
        <!-- progress bar -->
        <div class="mt-5">
            <div class="flex items-center justify-between mb-4 text-zinc-700 dark:text-white text-xl">
                <span>درصد تکمیل دوره</span>
                <span>${arr.isComplete ? "100%":`${(arr.sessions.length/23 *100).toFixed(0)}%`}</span>

            </div>
            <progress class=" h-[.625rem] py-[5px] bg-secondary rounded-4xl" value="${arr.isComplete ? "100":`${(arr.sessions.length/23 *100).toFixed(0)}`}" max="100" style="${arr.isComplete ? "width:100%;":`width:${(arr.sessions.length/23 *100).toFixed(0)}%`};"></progress>
        </div>
    </div>
    <!-- course teacher -->
    <div class="hidden lg:block bg-white dark:bg-gray-800 px-5 py-6 shadow-light dark:shadow-none rounded-2xl text-center">
        <img src="http://localhost:4000/courses/covers/${arr.creator.profile}" class="block mx-auto mb-2 w-[90px] h-[90px] rounded-full" alt="">
        <h4 class="text-zinc-700 dark:text-white text-2xl mb-1">${arr.creator.name}</h4>
        <a href="#" class="flex items-center justify-center gap-x-2.5 text-slate-500 dark:text-gray-500 text-sm">
            <span>مدرس دوره</span>
            <svg class="w-5 h-5"><use xlink:href="#arrow-right-on-rectangle"></use></svg>
        </a>
        <p class="text-zinc-700 dark:text-white font-Dana mt-2.5">توسعه دهنده  ${arr.cat_title}</p>
    </div>
    <!-- course short link -->
    <div class="hidden lg:block bg-white dark:bg-gray-800 px-5 py-6 shadow-light dark:shadow-none rounded-2xl">
        <span class="flex items-center gap-x-2.5 text-zinc-700 mb-5 -mr-5 dark:text-white font-DanaBold text-2xl">
            <!-- solid objec -->
            <span class="block w-7 h-2 bg-sky-500 dark:bg-secondary rounded-l-sm"></span>
            <span>لینک کوتاه</span>

        </span>
        <div class="flex gap-x-2.5 items-center justify-between px-4 h-[65px] text-slate-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 border border-dashed border-gray-600/30 rounded-xl">
          <button >
            <svg class="w-6 h-6"><use xlink:href="#clipboard-document"></use></svg>
          </button>  
          <span class="text-xl truncate " dir="ltr">https://sabzlearn.ir/?p=2860</span>
        </div>
    </div>
    
    `)
}
const fullDescriptionData = (arr)=>{
fullCourseInfo.innerHTML = arr.fullDesc? arr.fullDesc : "" + `<img src="http://localhost:4000/courses/covers/${arr.descPic}"></img>`
fullCourseInfo.innerHTML += `${arr.descPic? `<img src="http://localhost:4000/courses/covers/${arr.descPic}"></img>`:""} `
}
const sessions =  (arr) =>{
    finallCourseTime.innerHTML =arr.time
    if (arr.sessions.length) {
     arr.sessions.forEach((course,index)=>{
        courseSessions.innerHTML +=`    
        <div class="md:flex items-center gap-2.5 flex-wrap space-y-3.5 md:space-y-0 py-4 md:py-6 px-3.5 md:px-5 group ">
        <!-- course-session-title -->
        ${course.free === 1 ?  
            `
        <a href="session.html?name=${arr.shortName}&id=${course._id}" class="flex items-center gap-x-1.5 md:gap-x-2.5 shrink-0 w-[85%] ">
        <span class="flex items-center justify-center shrink-0 w-5 h-5
          md:w-7 md:h-7 bg-white font-DanaBold text-xs md:text-base text-zinc-700
           dark:text-white dark:bg-gray-800 group-hover:bg-baseColor group-hover:text-white rounded-md transition-colors">
        ${index +1}
        </span>
        <h4 class="text-zinc-700 dark:text-white group-hover:text-baseColor text-sm md:text-lg transition-colors">
        ${course.title}
        </h4>
    </a>
    ` :
     `
    <span  class="flex items-center gap-x-1.5 md:gap-x-2.5 shrink-0 w-[85%] ">
        <span class="flex items-center justify-center shrink-0 w-5 h-5
          md:w-7 md:h-7 bg-white font-DanaBold text-xs md:text-base text-zinc-700
           dark:text-white dark:bg-gray-800 group-hover:bg-baseColor group-hover:text-white rounded-md transition-colors">
        ${index +1}
        </span>
        <h4 class="text-zinc-700 dark:text-white group-hover:text-baseColor text-sm md:text-lg transition-colors">
        ${course.title}
        </h4>
    </span>
    
    `}
       
        <div class="flex items-center  w-full justify-between">
            <span class="inline-block h-[25px] leading-[25px] px-2.5 bg-gray-200 dark:bg-slate-600 text-zinc-700
             dark:text-white group-hover:bg-baseColor/10 group-hover:text-baseColor text-xs rounded transition-colors">${course.free === 0 ? "نقدی" : "جلسه رایگان"}</span>
             <div class="flex items-center gap-x-1.5 md:gap-x-2">
                <span class="text-slate-500 dark:text-gray-500 text-sm md:text-lg">${course.time}</span>
                <svg class="w-5 h-6 md:w-6 md:h-6 text-zinc-700 dark:text-white group-hover:text-baseColor transition-colors"><use xlink:href="#play-circle"></use></svg>
             </div>
        </div>
    </div>
        `
     })
    } else {
        courseSessions.innerHTML +=`
        <div class="md:flex items-center gap-2.5 flex-wrap space-y-3.5 md:space-y-0 py-4 md:py-6 px-3.5 md:px-5 group ">
<!-- course-session-title -->
<p  class="flex items-center gap-x-1.5 md:gap-x-2.5 shrink-0 w-[85%] ">
    <span class="flex items-center justify-center shrink-0 w-5 h-5
      md:w-7 md:h-7 bg-white font-DanaBold text-xs md:text-base text-zinc-700
       dark:text-white dark:bg-gray-800 group-hover:bg-baseColor group-hover:text-white rounded-md transition-colors">
  ‍1
    </span>
    <h4 class="text-zinc-700 dark:text-white group-hover:text-baseColor text-sm md:text-lg transition-colors">جسله ای منتشر نشده است</h4>
</p>
<div class="flex items-center  w-full justify-between">
    <span class="inline-block h-[25px] leading-[25px] px-2.5 bg-gray-200 dark:bg-slate-600 text-zinc-700
     dark:text-white group-hover:bg-baseColor/10 group-hover:text-baseColor text-xs rounded transition-colors">متنشر نشده</span>
     <div class="flex items-center gap-x-1.5 md:gap-x-2">
        <span class="text-slate-500 dark:text-gray-500 text-sm md:text-lg">00:00</span>
        <svg class="w-5 h-6 md:w-6 md:h-6 text-zinc-700 dark:text-white group-hover:text-baseColor transition-colors"><use xlink:href="#play-circle"></use></svg>
     </div>
</div>
</div>
        
        `
    }
}
const commentHandler = (arr)=>{
   if (arr.comments.length) {
    arr.comments.forEach(comment =>{
        console.log(comment);
        courseComment.insertAdjacentHTML("beforeend",` 
        <!-- comment list -->
        <div class="space-y-3.5 sm:space-y-5 comments_wrap">
            <div id="comment-4999900" class="p-3.5 md:p-5 bg-gray-100 dark:bg-gray-700 rounded-2xl">
                <!-- comment body -->
                <div class="flex gap-x-5 items-start">
                    <!-- comment picture flag desktop version -->
                    <div class="hidden md:flex flex-col gap-y-2">
                        <img src="${comment.creator.profile || comment.creator.role === "ADMIN" ? `http://localhost:4000/user-profile/${comment.creator.profile}`:`http://localhost:4000/user-profile/nonProfile.png`}" class="block h-10 w-10 md:h-[60px] md:w-[60px] object-cover rounded-full" alt="user-profile">
                        <div class="comment__student-flag ">${comment.creator.role === "USER" ? "دانشجو" : "مدرس" }</div>
                    </div>
                    <!-- comment reply comment , text , author,data , flag ,reply btn -->
                    <div class="w-full">
                        <!-- comment content head -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center  gap-x-2">
                                <img src="${comment.creator.profile ? `http://localhost:4000/user-profile/${comment.creator.profile}`:`http://localhost:4000/user-profile/nonProfile.png`}" class="block md:hidden w-10 h-10 object-cover rounded-full shrink-0" alt="">
                                <div class="shrink-0">
                                    <span class="text-zinc-700 dark:text-white font-DanaMedium text-base md:text-xl">${comment.creator.name}</span>
                                    <!-- comment publish time -->
                                    <div class="flex items-center gap-x-1.5 mt-1">
                                        <div class="comment__student-flag md:hidden">${comment.creator.role === "USER" ? "دانشجو" : "مدرس" }</div>
                                        <span class="font-Dana text-slate-500 dark:text-white text-xs">${comment.createdAt.slice(0,10).split("-").reverse().join("/")}</span>
                                    </div>
                                </div>
                                <!-- reply btn -->
                            </div>
                            <button class="comment__reply-btn w-6 h-5 text-slate-500 dark:text-gray-500" type="button">
                                <svg class="w-6 h-5"><use xlink:href="#reply"></use></svg>
                            </button>
                         
                        </div>
                        <!-- comment text -->
                        <div class="text-zinc-700 dark:text-white font-danaLight leading-7 mt-3.5">
                            ${comment.body}
                        </div>
                    </div>
                </div>
                <!-- replies commment -->
                <!-- replies commment -->
         
           ${comment.answerContent ? `
           
           <div class="mt-7 space-y-3.5 md:space-y-5">
           <div id="comment-49844" class="mt-7 p-3.5 md:p-5 bg-gray-200 dark:bg-slate-600 rounded-2xl">
           <div class="flex gap-x-5 items-start">
           <!-- Comment Right User Picture & flag (desktop version) -->
           <div class="hidden md:flex flex-col gap-y-2">
                   <img class="block w-10 h-10 md:w-[60px] md:h-[60px] object-cover rounded-full" src="${comment.answerContent.creator.profile ? `http://localhost:4000/courses/covers/${comment.answerContent.creator.profile}`:"http://localhost:4000/user-profile/nonProfile.png"}">
                       <div class="comment__teacher-flag bg-baseColor/30 font-Dana text-sm flex items-center justify-center rounded-sm   text-baseColor ">${comment.answerContent.creator.role === "ADMIN" ? "مدرس" : "دانشجو" }</div>
           </div>
               <!-- Comment Left Text, author, data, flag, reply btn -->
                <div class="w-full">
             <div class="flex items-center justify-between">
                <div class="flex items-center gap-x-2">
                     <img class="block md:hidden w-10 h-10 object-cover rounded-full shrink-0" src="${comment.answerContent.creator.profile ? `http://localhost:4000/courses/covers/${comment.answerContent.creator.profile}`:"http://localhost:4000/user-profile/nonProfile.png"}">
                    <div class="shrink-0">
                         <span class="text-zinc-700 dark:text-white font-DanaMedium text-base md:text-xl">${comment.answerContent.creator.name}</span>
                             <div class="flex items-center gap-x-1.5 mt-1">
                                    <div class="comment__teacher-flag md:hidden bg-baseColor/30 font-Dana text-xs flex items-center justify-center rounded-sm px-3 py-0.5   text-baseColor">${comment.answerContent.creator.role === "ADMIN" ? "مدرس" : "دانشجو" }</div>
                                 <span class="font-Dana text-slate-500 dark:text-white text-xs">${comment.answerContent.createdAt.slice(0,10).split("-").reverse().join("/")}</span>
                        </div>
                    </div>
                </div>
            </div>
           
            <!-- Comment Text -->
                <div class="text-zinc-700 dark:text-white font-danaLight leading-7 mt-3.5">
             ${comment.answerContent.body}
            </div>
        </div>
           ` 
           :
           
           ""}
    </div>
    </div>
            </div>
            </div>
            
        </div>
       
        
        
        `)
    })
    courseComment.innerHTML += `
    <!-- load more comment btn -->
    <button class="show-more  flex justify-center items-center w-52 h-14  mt-10 mx-auto bg-gray-200 dark:bg-gray-700 text-zinc-700 dark:text-white text-xl rounded-full cursor-pointer transition-colors hover:bg-gray-400  dark:hover:bg-gray-500/60">
        <div class="flex gap-x-3 items-center show-more__content ">
            <span>مشاهده بیشتر</span>
            <svg class="w-5 h-5"><use xlink:href="#chevron-down"></use></svg>
        </div>
        <svg class="show-more__loading w-6 h-6 animate-spin text-white dark:text-gray-600 fill-zinc-700 dark:fill-white hidden" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
        </svg>              
     </button>
    `
   } else if(!arr.comments.length) {
    courseComment.insertAdjacentHTML("beforeend",`
    
    <div class="text-white container flex items-center ">
   هنوز کامنتی برای این دوره ثبت نشده تو اولیش باش!‍
        </div>
    `)
   }

}
export{getCourseData}