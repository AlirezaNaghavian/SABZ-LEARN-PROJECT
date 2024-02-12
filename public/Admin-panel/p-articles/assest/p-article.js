import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js"
import Aside from "../../../assests/components/side-bar-panel/aside.js";
import { getToken } from "../../../assests/components/utilities/utilities.js";
const articleTBody = document.getElementById("article-tBody");
const catSelector = document.getElementById("catArticle");
const coverInp = document.getElementById("article-cover");
const articleForm = document.getElementById("artice-form");
let articleData = null;
let categoryId = null;
let articleCover = null;


const prepareEssetialData = async()=>{
ClassicEditor.create( document.querySelector( '#editor' ) ).then(editor =>{
        articleData = editor
        })
        .catch( error => {
            console.error( error );
        } );
const getCategoryData = await fetch(`http://localhost:4000/v1/category`);
const getCatRes = await getCategoryData.json();
getCatRes.forEach((item)=>{
    catSelector.insertAdjacentHTML("beforeend",`
    <option value="${item._id}" class="font-DanaMedium text-gray-700 ">${item.title}</option>
    `)
})
catSelector.addEventListener("change",event =>categoryId = event.target.value)
coverInp.addEventListener("change",event => articleCover = event.target.files[0])
}
const createArticle = async()=>{
const articleTitle = document.getElementById("article-title")
const articleShortName = document.getElementById("enter-article-link")
const formData = new FormData();
formData.append("cover",articleCover)
formData.append("title",articleTitle.value)
formData.append("description",articleData.getData())
formData.append("body",articleData.getData())
formData.append("shortName",articleShortName.value)
formData.append("categoryID",categoryId)
const sendData = await fetch(`http://localhost:4000/v1/articles`,{
    method: "POST",
    headers:{
        Authorization : `Berear ${getToken()}`,
    },
    body: formData
})
  if (sendData.ok) {
      await Swal.fire({
        position: "top-mid",
        icon: "success",
        title: "مقاله جدید ایجاد شد.",
        showConfirmButton: false,
        timer: 2000,
      });
      location.reload();
    }
}
const getAllArticles = async ()=>{
    const fetchArticles = await fetch(`http://localhost:4000/v1/articles`)
    const getArticleRes= await fetchArticles.json();
    getArticleRes.forEach((article,index)=>{
        articleTBody.insertAdjacentHTML("beforeend",`
        
        <tr class="grid grid-cols-6  w-full child:my-auto child:text-center  child:mx-auto  mt-8 child:text-gray-700 rounded-lg bg-gray-300  child:font-DanaBold child:py-2">

        <td class=" flex justify-center text-right ml-auto my-auto" id="id">${index < 9 ? `0${index + 1}` : index + 1}</td>
        <td class=" flex justify-center text-center text-base my-auto "  id="name">${article.title}</td>
        <td class=" flex justify-center text-center text-base my-auto "  id="name">${article.publish == 1 ? "منتشر شده" : "منتشر نشده"}</td>
        <td class=" flex justify-center text-center text-base my-auto "  id="userPhone">${new Date(article.createdAt).toLocaleDateString("fa-IR",{dateStyle:"medium"})}</td>
        <td class=" flex text-wrap flex-wrap justify-center text-center text-base my-auto"  id="userEmail">${article.creator.name}</td>
        <td class=" my-auto"><button type="button"  onclick=deleteArticle("${article._id}")  class="del-btn text-white bg-rose-500 p-2 rounded-lg" id="delete-btn">حذف</button></td>
           
          
        </tr>
        
        `)
    })
}


articleForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    createArticle();
})
const deleteArticle = async(arId)=>{
    await Swal.fire({
        title: "آیا مطمئن هستید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "خیر منصرف شدم",
        confirmButtonText: "بله حذف شود",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "موفقیت آمیز !",
            text: "مقاله مورد نظر حذف گردید",
            icon: "success",
          });
          const fetchData = await fetch(
            `http://localhost:4000/v1/articles/${arId}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Berear ${getToken()}`,
              },
            }
          );
          const getResData = await fetchData.json();
          console.log(getResData);
        }
      });
}
window.deleteArticle = deleteArticle
window.addEventListener("load",()=>{
    getAllArticles();
    prepareEssetialData();
})

window.customElements.define("header-tg",HeaderTemplate)
window.customElements.define("aside-tg",Aside);