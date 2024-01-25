const aside_template =document.createElement("template");
aside_template.innerHTML += `
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
<div class=" border-b-2 mx-2">
<!-- aside header section -->
<img src="../../assests/imges/logos/logo.png" class="w-20  object-cover py-4 mr-2" alt="">
</div>
<!-- menu list -->
<div class=" flex flex-col mt-4  space-y-4 menu-list overflow-y-auto">
<button class="w-full   py-4  text-right pr-2 font-DanaBold transition-all hover:text-white   active-menu">صفحه اصلی</button>
<button class="w-full   py-4  text-right pr-2 font-DanaBold transition-all hover:text-white">دوره ها</button>
<button class="w-full   py-4  text-right pr-2 font-DanaBold transition-all hover:text-white">منو ها</button>
<button class="w-full   py-4  text-right pr-2 font-DanaBold transition-all hover:text-white">کاربران</button>
<button class="w-full   py-4  text-right pr-2 font-DanaBold transition-all hover:text-white">دسته بندی ها</button>
<button class="w-full   py-4  text-right pr-2 font-DanaBold transition-all hover:text-white">جسات</button>
<button class="w-full   py-4  text-right pr-2 font-DanaBold transition-all hover:text-white">مقاله ها</button>
<button class="w-full   py-4  text-right pr-2 font-DanaBold transition-all hover:text-white">کامنت ها</button>
<button class="w-full   py-4  text-right pr-2 font-DanaBold transition-all hover:text-white">کد ها تخفیف</button>
<button class="w-full   py-4  text-right pr-2 font-DanaBold transition-all hover:text-white">تیکت ها</button>
<button class="w-full   py-4  text-right pr-2 font-DanaBold transition-all hover:text-white">برگزاری کمپین</button>
<button class="w-full   py-4  text-right pr-2 font-DanaBold transition-all hover:text-white">ویرایش اطلاعات</button>
<button class="w-full   py-4  text-right pr-2 font-DanaBold transition-all hover:text-white">خروج</button>
</div>

`
class Aside extends HTMLElement {
constructor(){
    super();
    this.attachShadow({mode:"open"});
    this.shadowRoot.append(aside_template.content.cloneNode(true));
   this.listMenu= this.shadowRoot.querySelectorAll(".menu-list button")   ;
    // add active menu class 
    this.listMenu.forEach(firstResult =>{
        firstResult.addEventListener("click",()=>{
            this.listMenu.forEach(secondResult =>{
                if(firstResult !== secondResult){
                    secondResult.classList.remove("active-menu")
                }
            })
            firstResult.classList.add("active-menu");
        })
    })
}
}
export default Aside