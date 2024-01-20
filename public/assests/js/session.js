import {NavBar} from "../components/nav_bar/_nav-bar.js"
import {Footer} from "../components/footer/footer.js"
import { getUrlParam ,getToken} from "../components/utilities/utilities.js";
window.customElements.define("navbar-tag", NavBar);
window.customElements.define("footer-tg",Footer)
const chapterHeader= document.querySelectorAll(".chapter__head");
const playerSide = document.getElementById("playerSide");
const sessionsListWrapper = document.getElementById("sessionsListWrapper");
const lessonsWrapper = document.getElementById("lessons");
const chapterHeaderWrapper = document.getElementById("chapterHeader");
const asideInfo = document.getElementById("asideInfo");
const accardionSession = (e,ICON)=>{
e.classList.toggle("chapter__head--active")
ICON.classList.toggle("rotate-180")
}
// get session datas
const getSessionDatas = async()=>{
    const urlParam = getUrlParam("name");
    const sessionId= getUrlParam("id");
    const token = getToken();
    const fetchSessionData = await fetch(`http://localhost:4000/v1/courses/${urlParam}/${sessionId}`,{
        headers:{
            Authorization : `Bearer ${token}`
        }
    })
    const getSessionRes  = await fetchSessionData.json();
    const fetchCourseData= await fetch(`http://localhost:4000/v1/courses/${urlParam}`,{
    Authorization : `Bearer ${token}`
})
const getRes = await fetchCourseData.json();
    showSessionInfo(getSessionRes.session,getRes.name)
    showAsideSessions(getSessionRes.sessions,getRes)
    show_Aside_Course_Session_Info(getRes)
}


const showSessionInfo = (session,title) =>{
    playerSide.insertAdjacentHTML("beforeend",`
    
    <!-- course title -->
    <div class="flex items-start gap-x-3.5 mb-4 md:mb-5">
        <span class="block shrink-0 w-2.5 h-10 bg-sky-500 dark:bg-secondary rounded-sm"></span>
        <h3 class="text-zinc-700 dark:text-white font-Morabba_bold text-2xl/10 lg:text-3xl/[44px]">${title}</h3>
    </div>
    <!-- course lesson -->
    <div class="relative mb-3 md:mb-5 rounded-xl md:rounded-2xl overflow-hidden">
        <div class="">

            <video
            id="my-video"
            class="video-js w-full xs:h-[14rem] md:h-[17rem]  lg:h-[20rem] xl:h-[30rem] "
            controls
            poster="http://localhost:4000/courses/covers/${session.poster}"
            data-setup="{}"
          >
            <source src="${session.video}" type="video/mp4" />
           
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a
              web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank"
                >supports HTML5 video</a
              >
            </p>
          </video>
        </div>
    </div>
    <!-- course lesson title -->
    <div class="flex items-start pb-5 mb-5 border-b border-b-gray-100 dark:border-b-gray-700">
        <span class="inline-block text-slate-500 dark:text-gray-500 font-DanaBold text-lg md:text-2xl border-l border-l-gray-200 dark:border-l-gray-700 pl-2 ml-2">
        ${session.sessionNumb}
        </span>
        <h5 class="h-auto lg:h-[86px] xl:max-h-14 text-zinc-700 dark:text-white font-DanaBold text-base md:text-xl">${session.title}</h5>
    </div>
    <!-- course CTA buttons -->
    <div class="flex justify-between items-center flex-wrap gap-4 tracking-tight">
        <div class="w-full sm:w-auto flex items-center flex-wrap gap-3 child:flex-grow child:sm:flex-grow-0">
            <a target="_blank" href="#" class="rounded-xl flex items-center justify-center py-3 gap-x-2 bg-green-400/90 px-3 bg-baseColor dark:bg-baseColor/90 text-white ">
                <svg class="w-5 h-5">
                    <use xlink:href="#arrow-down-tray"></use>
                </svg>
                دانلود ویدیو
            </a>
            <a target="_blank" href="#" class="rounded-xl flex items-center justify-center py-3 gap-x-2 px-3 bg-amber-400 dark:bg-yellow-400/10 text-white dark:text-yellow-400">
                <svg class="w-5 h-5">
                    <use xlink:href="#envelope"></use>
                </svg>
                دانلود پیوست
            </a>
        </div>
        <a target="_blank" href="#" class="rounded-xl flex items-center justify-center py-3 gap-x-2 px-3 bg-gray-200 dark:bg-gray-700 text-slate-500 dark:text-gray-300 flex-grow sm:flex-grow-0">
            <svg class="w-5 h-5">
                <use xlink:href="#arrow-down-tray"></use>
            </svg>
            <span class="inline-block">دانلود همگانی</span>
        </a>
    </div>
    
    `)
}
const showAsideSessions = (sessions,getRes) =>{
    console.log(getRes);
    chapterHeaderWrapper.insertAdjacentHTML("afterbegin",`
    <span class="text-base md:text-lg font-DanaMedium transition-colors py-5 ">جلسات دوره</span>
    `)
    sessions.forEach(lesson =>{
        console.log(lesson.free);
        lessonsWrapper.innerHTML +=` 
        <div class="lesson">                  
        <div class="flex items-center gap-x-1.5">
        <span class="lesson__status"></span>
        ${lesson.free === 1 ? ` <a href="session.html?name=${getRes.shortName}&id=${lesson._id}" class="text-sm md:text-base ">${lesson.title}</a>`
        
        :
        `<span class="text-sm md:text-base ">${lesson.title}</span>`
    
    }
       
    </div>
    <span class="text-xs md:text-sm">${lesson.time}</span>
    </div>
  `
    })
sessionsListWrapper.insertAdjacentHTML("beforeend",`

<div class="block lg:hidden space-y-4 md:space-y-5">
<div class="block">
    <div class="flex gap-3 md:gap-4 md:mt-10">
       <div class="w-full flex flex-col justify-center items-center gap-y-1 bg-white py-3 dark:bg-gray-800 text-center shadow-light dark:shadow-none rounded-2xl">
        <svg class="text-baseColor w-7 h-7"><use xlink:href="#exclamation-circle"></use></svg>
        <div class="flex flex-col items-center justify-center mt-2.5 gap-y-1">
            <span class="font-DanaBold text-lg text-zinc-700 dark:text-white">${getRes.isComplete === 0 ? "در حال برگزاری" : "به اتمام رسیده"}</span>
            <p class="text-slate-500 dark:text-gray-500 text-xs">وضعیت دوره</p>
        </div>
       </div> 
       <div class="w-full flex flex-col justify-center items-center gap-y-1 bg-white py-3 dark:bg-gray-800 text-center shadow-light dark:shadow-none rounded-2xl">
        <svg class="text-baseColor w-7 h-7"><use xlink:href="#clock"></use></svg>
        <div class="flex flex-col items-center justify-center mt-2.5 gap-y-1">
            <span class="font-DanaBold text-lg text-zinc-700 dark:text-white">${getRes.time}</span>
            <p class="text-slate-500 dark:text-gray-500 text-xs">زمان دوره</p>
        </div>
       </div> 
       <div class="w-full flex flex-col justify-center items-center gap-y-1 bg-white py-3 dark:bg-gray-800 text-center shadow-light dark:shadow-none rounded-2xl">
        <svg class="text-baseColor w-7 h-7"><use xlink:href="#video-camera"></use></svg>
        <div class="flex flex-col items-center justify-center mt-2.5 gap-y-1">
            <span class="font-DanaBold text-lg text-zinc-700 dark:text-white">${getRes.sessions.length}</span>
            <p class="text-slate-500 dark:text-gray-500 text-xs">جلسات دوره</p>
        </div>
       </div> 
    </div>
</div>
<!-- progress bar -->
<div class="bg-white dark:bg-gray-800 p-5 pb-4 shadow-light dark:shadow-none rounded-2xl">
    <div class="flex items-center justify-between mb-3.5 text-zinc-700 dark:text-white text-xl">
        <span class="font-DanaBold">پیشرفت شما</span>
        <span>${getRes.isComplete === 1 ? "100%":`${(getRes.sessions.length/23 *100).toFixed(0)}%`}</span>
    </div>
    <progress class=" rounded-2xl h-[.625rem] py-2 bg-sky-600 " value="${getRes.isComplete ? "100":`${(getRes.sessions.length/23 *100).toFixed(0)}`}" max="100" style="${getRes.isComplete ? "width:100%;":`width:${(getRes.sessions.length/23 *100).toFixed(0)}%`};"></progress>
</div>
<!-- course creator mobile -->
<div class="block lg:hidden bg-white dark:bg-gray-800 px-5 py-6 shadow-light dark:shadow-none rounded-2xl text-center">
    <img class="block mx-auto mb-2 w-[90px] h-[90px] rounded-full" src="http://localhost:4000/courses/covers/${getRes.creator.profile}" alt="${getRes.creator.name}">
    <h4 class="text-zinc-700 dark:text-white text-2xl mb-1">${getRes.creator.name}</h4>
    <a href="https://sabzlearn.ir/teacher/ce01010101it" class="flex items-center justify-center gap-x-1.5 text-slate-500 dark:text-gray-500 text-sm">
        مدرس دوره  
        <svg class="w-5 h-5">
        <use xlink:href="#arrow-right-on-rectangle"></use>
            </svg>
    </a>
        <p class="text-zinc-700 dark:text-white font-danaLight mt-2.5">توسعه دهنده ${getRes.cat_title}</p>
</div>
</div>`)
}
const show_Aside_Course_Session_Info = (getRes)=>{
    asideInfo.insertAdjacentHTML("beforeend",`
    <!-- Mini Box Information like time, status, lessons count -->
    <div class="block">
        <div class="flex gap-3 md:gap-4">
           <div class="w-full flex flex-col justify-center items-center gap-y-1 bg-white py-3 dark:bg-gray-800 text-center shadow-light dark:shadow-none rounded-2xl">
            <svg class="text-baseColor w-7 h-7"><use xlink:href="#exclamation-circle"></use></svg>
            <div class="flex flex-col items-center justify-center mt-2.5">
                <span class="font-DanaBold text-lg text-zinc-700 dark:text-white">${getRes.isComplete === 0 ? "در حال برگزاری" : "به اتمام رسیده"}</span>
                <p class="text-slate-500 dark:text-gray-500 text-xs">وضعیت دوره</p>
            </div>
           </div> 
           <div class="w-full flex flex-col justify-center items-center gap-y-1 bg-white py-3 dark:bg-gray-800 text-center shadow-light dark:shadow-none rounded-2xl">
            <svg class="text-baseColor w-7 h-7"><use xlink:href="#clock"></use></svg>
            <div class="flex flex-col items-center justify-center mt-2.5">
                <span class="font-DanaBold text-lg text-zinc-700 dark:text-white">${getRes.time}</span>
                <p class="text-slate-500 dark:text-gray-500 text-xs">زمان دوره</p>
            </div>
           </div> 
           <div class="w-full flex flex-col justify-center items-center gap-y-1 bg-white py-3 dark:bg-gray-800 text-center shadow-light dark:shadow-none rounded-2xl">
            <svg class="text-baseColor w-7 h-7"><use xlink:href="#video-camera"></use></svg>
            <div class="flex flex-col items-center justify-center mt-2.5">
                <span class="font-DanaBold text-lg text-zinc-700 dark:text-white">${getRes.sessions.length}</span>
                <p class="text-slate-500 dark:text-gray-500 text-xs">جلسات دوره</p>
            </div>
           </div> 
        </div>
    </div>
    <!-- progress desktop bar -->
    <div class="bg-white dark:bg-gray-800 p-5 pb-4 shadow-light dark:shadow-none rounded-2xl">
        <div class="flex items-center justify-between mb-3.5 text-zinc-700 dark:text-white text-xl">
            <span class="font-DanaBold">پیشرفت شما</span>
            <span>${getRes.isComplete === 1 ? "100%":`${(getRes.sessions.length/23 *100).toFixed(0)}%`}</span>
        </div>
        <progress class=" rounded-2xl h-[.625rem] py-2 bg-sky-600 " value="${getRes.isComplete ? "100":`${(getRes.sessions.length/23 *100).toFixed(0)}`}" max="100" style="${getRes.isComplete ? "width:100%;":`width:${(getRes.sessions.length/23 *100).toFixed(0)}%`};"></progress>
    </div>
    <!-- course creator desk version -->
    <div class="block bg-white dark:bg-gray-800 px-5 py-6 shadow-light dark:shadow-none rounded-2xl text-center">
        <img class="block mx-auto mb-2 w-[90px] h-[90px] rounded-full" src="http://localhost:4000/courses/covers/${getRes.creator.profile}" alt="${getRes.creator.name}">
        <h4 class="text-zinc-700 dark:text-white text-2xl mb-1">${getRes.creator.name}</h4>
        <a href="https://sabzlearn.ir/teacher/ce01010101it" class="flex items-center justify-center gap-x-1.5 text-slate-500 dark:text-gray-500 text-sm">
            مدرس دوره
            <svg class="w-5 h-5">
                <use xlink:href="#arrow-right-on-rectangle"></use>
            </svg>
        </a>
        <p class="text-zinc-700 dark:text-white font-DanaMedium mt-2.5">توسعه دهنده ${getRes.cat_title}</p>
    </div>
    `)
}

window.addEventListener("load",()=>{
    getSessionDatas()

})
chapterHeader.forEach(chapter =>{
    let arrowiCON = chapter.lastElementChild
    chapter.addEventListener("click",(e)=>{
        accardionSession(chapter,arrowiCON)
    })
})

