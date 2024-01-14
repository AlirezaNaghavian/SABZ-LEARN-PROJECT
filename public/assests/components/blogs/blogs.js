const getBlogWrapper = document.getElementById("blog-list-wrapper");
// /////////////
// get blog list data
// /////////////
const blogDatas = async ()=>{
    const fetchBlogData = await fetch(`http://localhost:4000/v1/articles`);
    const blogDataRes = await fetchBlogData.json();
    console.log(blogDataRes);
    blogDataRes.slice(0,4).forEach(blog => {
        getBlogWrapper.insertAdjacentHTML("beforeend",`
        <div class="flex flex-col overflow-hidden bg-white dark:bg-gray-800 dark:shadow-none dark:border border-gray-700 rounded-2xl">
                        <!-- blog banner -->
                        <div class="blog__banner relative h-[217px] overflow-hidden">
                            <img src="http://localhost:4000/courses/covers/${blog.cover}" alt="${blog.title}" loading="lazy"
                            class="block w-full h-full object-cover">
                        </div>
                        <!-- blog wrapper  -->
                        <div class="flex flex-col gap-y-8 flex-grow px-5">
                            <!-- blog card body -->
                            <div class="relative pt-1.5 ">
                                <!-- title -->
                                <h4 class="font-DanaMedium max-h-12 line-clamp-2 text-zinc-700 dark:text-white mb-2.5">
                                    <a href="#" >
                                    ${blog.title}
                                    </a>
                                </h4>
                                <!-- blog description -->
                                <p class="font-DanaMedium text-sm h-20 line-clamp-4 text-slate-500 dark:text-slate-400 ">
                                    ${blog.description}
                                </p>
                            </div>
                            <!-- blog footer -->
                            <div class="mt-auto space-y-4">
                                <!-- date and author -->
                                <div class="flex gap-2.5 flex-wrap text-slate-500 dark:text-slate-400 text-xs ">
                                    <div class="flex items-center gap-x-1 hover:text-baseColor transition-colors cursor-pointer">
                                      <svg class="h-4 w-4"><use xlink:href="#card-user-icon"></use></svg> 
                                      <a href="#" >${blog.publisher}</a>
                                    </div>
                                    <div class="flex items-center gap-x-1 ">
                                        <svg class="h-4 w-4"><use xlink:href="#calender-icon"></use></svg>
                                        <span class="data-numbers">${blog.publish_date}</span>
                                    </div>
                                </div>
                                <!-- link-address -->
                                <div class="flex justify-center py-3.5 border-t border-t-gray-100 dark:border-gray-700">
                                    <a href="#" class="text-zinc-700 flex justify-center items-end    dark:text-white hover:text-baseColor dark:hover:text-baseColor space-x-2.5 font-DanaMedium transition-colors">
                                        <span class="">
                                            مطالعه مقاله
                                        </span>
                                        <svg class="w-6 h-6"><use xlink:href="#arrow-left-circle"></use></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        `)
    });
}

window.addEventListener("load",()=>{
    blogDatas();
})