const header_user_template = document.createElement("template");
header_user_template.innerHTML +=`
<link rel="stylesheet" href="../../assests/css/main-page/app.css">
<svg class="hidden">
<symbol id="bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
</symbol>
<symbol id="sun" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
</symbol>
<symbol id="moon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>
</symbol>
<symbol id="bars" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
</symbol>
<symbol id="close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
</symbol>
<symbol id="bars-3-bottom-right" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path>
</symbol>
</svg>
<header class="container   flex items-center justify-between  dark:bg-grayTheme md:bg-transparent dark:border-b md:border-none border-b-gray-700 mb-6 md:mb-14 p-5 md:p-0">
<h3 class="hidden lg:block font-DanaBold text-2xl text-zinc-700 dark:text-white">
    علیرضا نقویان عزیز؛ خوش اومدی 🙌
</h3>
<div class="sidebar__open-btn lg:hidden flex gap-x-2 font-DanaMedium text-zinc-700 dark:text-white">
    <svg class="w-6 h-6">
        <use href="#bars-3-bottom-right"></use>
    </svg>پیشخوان
</div>
<div class="flex gap-x-3.5 md:gap-x-7">
    <!-- Notifications -->
    <div class="relative group" id="notifications">
        <div class="notifications flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gray-100 md:bg-white dark:bg-gray-800 text-slate-500 dark:text-gray-600 rounded-full cursor-pointer">
            <svg class="w-6 h-6 md:w-7 md:h-7"><use href="#bell"></use></svg>
        </div>
        <!-- When Click Box Showing -->
        <div class="absolute left-0 top-full pt-4 z-10 transition-all hide -translate-x-28 md:translate-x-0" id="notifications-dropdown">
            <div class="w-80 md:w-96 bg-white dark:bg-gray-800 py-5 px-4.5 rounded-2xl">
                <div class="flex items-center justify-between pb-3.5 mb-3.5 border-b border-b-gray-200 dark:border-b-slate-500">
                    <span class="font-danaMedium text-xl text-zinc-700 dark:text-white">اعلان ها</span>
                </div>
                <div class="notifications-list max-h-96 overflow-y-auto space-y-3 -ml-2 pl-2 text-zinc-700 dark:text-white">
                    <div class="text-center bg-gray-100 dark:bg-gray-700 p-3 rounded-xl">اعلان جدیدی وجود ندارد.</div>
                 </div>
            </div>
        </div>
    </div>
    <!-- Toggle Theme Button -->
    <div class="toggle-theme flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100 md:bg-white dark:bg-gray-800 text-slate-500 dark:text-gray-600 cursor-pointer transition-colors">
        <svg class="hidden dark:inline-block w-6 h-6 md:w-7 md:h-7">
            <use href="#sun" id="switch-theme-icon"></use>
        </svg>
        <svg class="dark:hidden w-6 h-6 md:w-7 md:h-7">
            <use href="#moon" id="switch-theme-icon"></use>
        </svg>
    </div>

</div>
</header>

`
class Header extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.append(header_user_template.content.cloneNode(true))
        this.toggleTheme = this.shadowRoot.querySelector(".toggle-theme");
        this.header = this.shadowRoot.querySelector("header")
        this.sideBarBtn = this.shadowRoot.querySelector(".sidebar__open-btn");
        const AsideWrapper = document.querySelector(".sidebar");
        const overlayApp = document.querySelector(".app-overlay");
        const closeSideBarBtn = document.querySelector(".sidebar__close-btn");
        // change theme
        this.toggleTheme.addEventListener("click",()=>{
            this.header.classList.toggle("dark");
            document.querySelector("html").classList.toggle("dark");
            if (document.querySelector("html").classList.contains("dark")) {
                localStorage.setItem("theme","dark")
            } else {
                localStorage.setItem("theme","light")
                
            }
        })
        // check theme status
        let checkThemeStatus = ()=>{
            let getThemeData = localStorage.getItem("theme");
            if(getThemeData == "dark"){
                this.header.classList.add("dark");
                document.querySelector("html").classList.add("dark");
            }
        }
        // side bar menu
        this.sideBarBtn.addEventListener("click",()=>{
            AsideWrapper.classList.remove("-right-[64rem]")
            AsideWrapper.classList.add("right-[0rem]");
            AsideWrapper.classList.add("z-50")
            overlayApp.classList.remove("hide")
            overlayApp.classList.add("show")
        })
        // close side bar menu
        const closeSideBar = ()=>{
            AsideWrapper.classList.add("-right-[64rem]")
            AsideWrapper.classList.remove("right-[0rem]");
            AsideWrapper.classList.remove("z-50")
            overlayApp.classList.add("hide")
            overlayApp.classList.remove("show")
        }
        // clickable overlay 
        const OnclickOverlay = ()=>{
            AsideWrapper.classList.add("-right-[64rem]")
            AsideWrapper.classList.remove("right-[0rem]");
            AsideWrapper.classList.remove("z-50")
            overlayApp.classList.add("hide")
            overlayApp.classList.remove("show")
        }
        closeSideBarBtn.addEventListener("click",closeSideBar)
        overlayApp.addEventListener("click",OnclickOverlay)
        window.addEventListener("load",checkThemeStatus)
    }
}
export default Header