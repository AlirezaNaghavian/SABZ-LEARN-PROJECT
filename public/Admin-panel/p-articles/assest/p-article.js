import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js"
import Aside from "../../../assests/components/side-bar-panel/aside.js";
const articleTBody = document.getElementById("article-tBody");
const getAllArticles = async ()=>{
    const fetchArticles = await fetch(`http://localhost:4000/v1/articles`)
    const getArticleRes= await fetchArticles.json();
    console.log(getArticleRes);
    getArticleRes.forEach((article,index)=>{
        articleTBody.insertAdjacentHTML("beforeend",`
        
        <tr class="grid grid-cols-6  w-full child:my-auto child:text-center  child:mx-auto  mt-8 child:text-gray-700 rounded-lg bg-gray-300  child:font-DanaBold child:py-2">

        <td class=" flex justify-center text-right ml-auto my-auto" id="id">${index < 9 ? `0${index + 1}` : index + 1}</td>
        <td class=" flex justify-center text-center text-base my-auto "  id="name">${article.title}</td>
        <td class=" flex justify-center text-center text-base my-auto "  id="name">${article.publish == 1 ? "منتشر شده" : "منتشر نشده"}</td>
        <td class=" flex justify-center text-center text-base my-auto "  id="userPhone">${new Date(article.createdAt).toLocaleDateString("en-Us",{dateStyle:"medium"})}</td>
        <td class=" flex text-wrap flex-wrap justify-center text-center text-base my-auto"  id="userEmail">${article.creator.name}</td>
        <td class=" my-auto"><button type="button"  onclick=deleteUser("${article._id}")  class="del-btn text-white bg-rose-500 p-2 rounded-lg" id="delete-btn">حذف</button></td>
           
          
        </tr>
        
        `)
    })
}
window.addEventListener("load",()=>{
    getAllArticles();
})








window.customElements.define("header-tg",HeaderTemplate)
window.customElements.define("aside-tg",Aside);