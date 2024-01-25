const headerTemplate = document.createElement("template");
headerTemplate.innerHTML +=`
<link rel="stylesheet" href="../../assests/css/main-page/app.css" />
<link rel="stylesheet" href="assest/main-style.css" />
<svg class="hidden">
<symbol id="mini-bell" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 32.91 32.91 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 32.903 32.903 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.448 11.448 0 0 1 16 8a6 6 0 0 0-6-6ZM8.05 14.943a33.54 33.54 0 0 0 3.9 0 2 2 0 0 1-3.9 0Z" clip-rule="evenodd" />
  </symbol>
  <symbol id="chevron-down" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </symbol>
  
  
</svg>

<div class=" w-[80%] mx-auto header-secttion  flex justify-between ">
<!-- right-side-header -->
<div class="right-side-wrapper flex items-center">
  <form class="search-box-form">
    <input type="search"  class="bg-[#aad1fd] dark:bg-gray-400 rounded-md px-6 py-1  text-slate-700  dark:text-white " placeholder="جستجو..." />
  </form>
  <!-- notfication icon -->
  <div class="flex mr-4">
    <svg class="w-7 h-7 dark:text-gray-100 "><use xlink:href="#mini-bell"></use></svg>
  </div>
  <div class="flex justify-between items-center gap-x-4 mr-4 bg-[#aad1fd] dark:bg-gray-400 rounded-md px-6 py-1  text-slate-700  dark:text-white">
    <button type="button" id="dark-btn" class="w-6 h-6 rounded-full bg-grayTheme dark:bg-gray-100"></button>
    <button type="button" id="light-btn" class="w-6 h-6 rounded-full dark:bg-grayTheme bg-gray-100"></button>
  </div>
</div>
  <!-- left-side-header -->
  <div id="admin-pesonal-profile" class="relative left-side-wrapper flex items-center gap-x-2">
    <div class="header-person-wrapper flex gap-x-4">
               <!-- personal-admin-data -->
      <div class="flex items-center gap-x-2 cursor-pointer">
        <svg class="w-7 h-7 dark:text-gray-100 "><use xlink:href="#chevron-down"></use></svg>
        <span class="user__Admin__Name font-DanaBold text-gray-700 dark:text-white">
            آرمین شهبازی
        </span>
    </div>
  <!-- admin photo -->
  <img src="../../../backend/public/user-profile/ARMIN.png" class="rounded-full w-16 object-cover" alt="">
    </div>
    <div class="absolute z-50 drop-down-data  bg-[#aad1fd] dark:bg-gray-800/50 top-full mt-2 flex flex-col space-y-2 justify-start py-4 items-start rounded-xl shadow-light dark:shadow-none">
        
        <p class="px-4  flex justify-between child:font-DanaMedium gap-x-2">
            <span class="text-gray-700 dark:text-white ">ایمیل:</span>
            <span class="text-gray-700 dark:text-white">alireza20002485@gmail.com</span>
        </p>
        <p class="px-4  flex justify-between child:font-DanaMedium gap-x-2 w-full">
            <span class="text-gray-700 dark:text-white ">نام کاربری:</span>
            <span class="text-gray-700 dark:text-white ">armin_sh</span>
        </p>
        <p class="px-4  flex justify-between child:font-DanaMedium gap-x-2 w-full">
            <span class="text-gray-700 dark:text-white "> نقش:</span>
            <span class="text-gray-700 dark:text-white ">ADMIN</span>
        </p>
        <p class="px-4  flex justify-between child:font-DanaMedium gap-x-2 w-full">
            <span class="text-gray-700 dark:text-white "> پیوستن:</span>
            <span class="text-gray-700 dark:text-white ">۱۴۰۰/۰۵/۱۱</span>
        </p>
    </div>

  </div>
</div>

`


class HeaderTemplate extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.append(headerTemplate.content.cloneNode(true));
        this.headerWrapper = this.shadowRoot.querySelector(".header-secttion");
        this.lightBtn= this.shadowRoot.querySelector("#light-btn").addEventListener("click",()=>{
          document.querySelector("html").classList.remove("dark")
          this.headerWrapper.classList.remove("dark")
          localStorage.setItem("theme","light")
        })
        this.DarkBtn= this.shadowRoot.querySelector("#dark-btn").addEventListener("click",()=>{
          document.querySelector("html").classList.add("dark")
          this.headerWrapper.classList.add("dark")
          localStorage.setItem("theme","dark")
        })

        let checkTheme = () => {
          let getThemeData = localStorage.getItem("theme");
          if (getThemeData == "dark") {
           
            document.querySelector("html").classList.add("dark");
          }
        };
        window.addEventListener("load",()=>{
          checkTheme()
        })
    }
}
export default HeaderTemplate