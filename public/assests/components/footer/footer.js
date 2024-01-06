const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<link rel="stylesheet" href="./assests/css/main-page/app.css" />
<svg class="hidden">
<symbol id="instagram" fill="currentColor" viewBox="0 0 1024 1024.008" xmlns="http://www.w3.org/2000/svg">
<path d="M273.92 43.776c-35.243 4.395-64.043 13.056-92.843 27.947A257.28 257.28 0 0 0 46.72 253.44c-3.03 16.17-3.2 29.91-3.2 258.56s.17 242.39 3.2 258.56a257.152 257.152 0 0 0 134.23 181.59c22.23 11.562 42.07 18.645 68.223 24.405l17.92 3.925h489.814l17.92-3.925c79.19-17.45 141.482-64.342 177.322-133.504 11.562-22.23 18.645-42.07 24.405-68.223l3.925-17.92V267.093l-3.925-17.92c-23.04-104.576-97.28-178.944-201.558-201.856-16.213-3.584-18.986-3.626-256.17-3.882-131.883-.17-242.09 0-244.907.34m494.165 89.6A172.8 172.8 0 0 1 891.99 261.974c2.986 12.97 3.157 25.6 3.157 250.027s-.17 237.056-3.158 250.027c-14.85 63.83-61.825 111.83-126.55 129.322-13.653 3.71-13.91 3.71-246.485 4.223-203.18.427-234.752.17-247.98-2.09a165.888 165.888 0 0 1-92.67-47.83 169.173 169.173 0 0 1-44.93-77.568l-4.522-16.298V272.213l4.523-16.298a169.173 169.173 0 0 1 44.928-77.568 165.675 165.675 0 0 1 91.733-47.83c9.984-1.792 58.24-2.176 247.083-1.962l234.667.298 16.298 4.523M727.21 240c-15.53 7.765-23.253 22.016-22.058 40.747a39.552 39.552 0 0 0 19.2 32.34c11.477 7.126 28.885 8.193 40.79 2.604 10.24-4.82 19.285-15.317 22.527-26.24 3.157-10.58 3.157-13.653 0-24.234C780.16 240 751.36 227.968 727.21 240m-243.327 58.752c-27.18 4.267-55.296 14.38-79.275 28.5-55.552 32.684-94.507 92.588-102.443 157.4-2.474 20.095-2.218 34.985.896 56.105 13.996 94.25 86.743 166.528 181.633 180.438 43.18 6.314 86.016-1.11 127.062-22.016 57.3-29.185 99.157-85.377 112.085-150.487 3.5-17.706 3.03-62.89-.81-80.725a211.285 211.285 0 0 0-61.782-111.147 205.78 205.78 0 0 0-101.46-54.953c-16.812-3.883-59.777-5.632-75.905-3.115m63.104 87.723a130.133 130.133 0 0 1 81.024 66.645c8.662 17.536 11.947 30.165 13.185 50.39 3.456 57.642-31.872 108.927-88.235 128.17-14.848 5.077-18.005 5.547-37.547 5.59-25.685.042-36.778-2.518-59.733-13.782-13.653-6.7-18.645-10.368-31.7-23.467-13.1-13.055-16.77-18.047-23.468-31.7-11.392-23.21-13.952-34.133-13.824-59.733.085-19.456.597-22.784 5.632-37.547 15.275-44.715 49.75-75.99 94.933-86.016 14.72-3.285 44.843-2.56 59.734 1.45"></path>
</symbol>
<symbol id="telegram" fill="currentColor" viewBox="0 0 1024 1027" xmlns="http://www.w3.org/2000/svg">
<path d="M834.25 127.875c-10.75.5-20.875 3.625-29.875 7.125h-.125c-9.125 3.625-52.5 21.875-118.375 49.5C620 212.25 534.5 248.25 449.625 284 280.125 355.375 113.5 425.625 113.5 425.625l2-.75s-11.5 3.75-23.5 12c-6.125 4-12.875 9.5-18.75 18.125s-10.625 21.875-8.875 35.5c2.875 23.125 17.875 37 28.625 44.625 10.875 7.75 21.25 11.375 21.25 11.375h.25l156.25 52.625c7 22.5 47.625 156 57.375 186.75 5.75 18.375 11.375 29.875 18.375 38.625 3.375 4.5 7.375 8.25 12.125 11.25 1.875 1.125 3.875 2 5.875 2.75.625.375 1.25.5 2 .625l-1.625-.375c.5.125.875.5 1.25.625 1.25.375 2.125.5 3.75.75 24.75 7.5 44.625-7.875 44.625-7.875l1.125-.875 92.25-84L662.5 866l3.5 1.5c32.25 14.125 64.875 6.25 82.125-7.625C765.5 845.875 772.25 828 772.25 828l1.125-2.875L892.875 213c3.375-15.125 4.25-29.25.5-43s-13.375-26.625-25-33.5c-11.75-7-23.375-9.125-34.125-8.625zM831 193.5c-.125 2 .25 1.75-.625 5.625v.375L712 805.25c-.5.875-1.375 2.75-3.75 4.625-2.5 2-4.5 3.25-14.875-.875L504.25 664 390 768.125l24-153.25s296.25-276.125 309-288 8.5-14.375 8.5-14.375c.875-14.5-19.25-4.25-19.25-4.25L322.625 549.625 322.5 549l-186.75-62.875V486c-.125 0-.375-.125-.5-.125.125 0 1-.375 1-.375l1-.5 1-.375S305 414.375 474.5 343c84.875-35.75 170.375-71.75 236.125-99.5 65.75-27.625 114.375-47.875 117.125-49 2.625-1 1.375-1 3.25-1z"></path>
</symbol>
</svg>
<div class="container footer">
<div class="flex justify-between flex-wrap  gap-y-5 gap-x-4 pb-5 border-b dark:border-b-gray-700">
 <div class="flex flex-col items-center sm:items-start gap-y-5 sm:flex-grow">
     <h4 class="font-DanaMedium text-2xl text-zinc-700 dark:text-white">درباره ما</h4>
     <p class="sm:max-w-xs">
         سبزلرن یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند
     </p>
 </div>
 <div class="flex flex-col gap-y-5  flex-grow">
     <h4 class="font-DanaMedium text-2xl text-zinc-700 dark:text-white">
         دسترسی سریع
     </h4>
     <div class="flex-col flex items-start gap-y-3 ">
         <a href="#" class="text-hover">قوانین و مقررات</a>
         <a href="#" class="text-hover">ارسال تیکت</a>
         <a href="#" class="text-hover">همه دوره ها</a>
     </div>
 </div>
 <div class="flex flex-col gap-y-5 flex-grow">
     <h4 class="font-DanaMedium text-2xl text-zinc-700 dark:text-white">
         لینک های مفید
     </h4>
     <div class="flex-col flex items-start gap-y-3 ">
         <a href="#" class="text-hover">آموزش جاوااسکریپت</a>
         <a href="#" class="text-hover">آموزش HTML</a>
         <a href="#" class="text-hover">آموزش CSS</a>
     </div>
 </div>
 <div class="flex flex-col gap-y-5 flex-grow">
     <h4 class="font-DanaMedium text-2xl text-zinc-700 dark:text-white">شبکه های اجتماعی</h4>
     <div class="flex-col flex items-start gap-y-3">
             <div class="flex items-center gap-x-4">
                 <div class="flex items-center justify-center rounded-full w-8 h-8 bg-orange-600 text-white bg-gradient-to-tr from-[#FEDC15] via-[#F71F87] to-[#9000DC]">
                     <svg class="w-5 h-5"><use xlink:href="#instagram"></use></svg>
                 </div>
                 <a href="#" class="text-hover font-DanaMedium" dir="ltr">@sabzlearn_</a>
             </div>
             <div class="flex items-center gap-x-4">
                 <div class="flex items-center justify-center rounded-full w-8 h-8 bg-blue-500 text-white bg-gradient-to-b from-blue-400 to-blue-600">
                     <svg class="w-5 h-5"><use xlink:href="#telegram"></use></svg>
                 </div>
                 <a href="#" class="text-hover font-DanaMedium" dir="ltr">@sabzlearn_</a>
             </div>
     </div>
 </div>
</div> 
<div class="flex justify-center xs:justify-between flex-wrap gap-x-3 gap-y-2 py-5 text-base">
 <span class="xs:mx-auto sm:mx-0">ساخته شده با ❤️ در سبزلرن</span>
 <p class="text-center xs:mx-auto sm:mx-0" dir="ltr">Copyright © 2019-2024 Sabzlearn. All rights reserved.</p>
</div>
</div>
`
class Footer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.append(footerTemplate.content.cloneNode(true));
        this.footer = this.shadowRoot.querySelector(".footer");
        this.lStorage = localStorage.getItem("theme");
        if(this.lStorage === "dark"){
            this.footer.classList.add("dark")
        }else{
            this.footer.classList.remove("dark")
            
        }
    }
}
export { Footer}