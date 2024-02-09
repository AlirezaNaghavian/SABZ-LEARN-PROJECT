import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js"
import Aside from "../../../assests/components/side-bar-panel/aside.js";
import { getToken } from "../../../assests/components/utilities/utilities.js";
const categoryTbody = document.getElementById("catagory-tBody");
const categoryForm = document.getElementById("send-cat-form");
let catTitleValue;
let catNameValue;
const catNameInp = document.getElementById("cat-title")
const catTitleInp = document.getElementById("cat-destination")

const getAllCategory = async ()=>{
    const fetchCategory =await fetch(`http://localhost:4000/v1/category`)
    const categoryRes= await fetchCategory.json();
    console.log(categoryRes);
    categoryRes.forEach((item,index)=>{
        categoryTbody.insertAdjacentHTML("beforeend",`
    <tr class="grid grid-cols-5  w-full child:my-auto child:text-center  child:mx-auto  mt-8 child:text-gray-700 rounded-lg bg-gray-300   child:py-2">
        <td class=" flex justify-center text-right ml-auto my-auto font-DanaBold" id="id">${index < 9 ? `0${index + 1}` : index + 1}</td>
        <td class=" flex justify-center text-center text-sm my-auto  font-DanaBold"  id="catTitle">${item.name}</td>
        <td class=" flex justify-center text-center text-sm my-auto  font-DanaBold"  id="catBadge">${item.title}</td>
   
    
            <td class=" my-auto"><button type="button"  onclick=editCat("${item._id}")  class="font-DanaBold del-btn text-white bg-gray-500 p-2 rounded-lg" id="delete-btn">ویرایش</button></td>
            <td class=" my-auto"><button type="button"  onclick=delCat("${item._id}")  class=" font-DanaBold del-btn text-white bg-rose-500  p-2 rounded-lg" id="ban-btn">حذف کردن</button></td>
          
    </tr>
        `)
    })
}
const prepareValueData = ()=>{
catNameInp.addEventListener("change",event => catNameValue = event.target.value)
catTitleInp.addEventListener("change",event =>catTitleValue= event.target.value )
}
const createCategory = async(e)=>{
    const catData = {
        title :catTitleValue,
        name:catNameValue,        
    }
    const sendCatData = await fetch(`http://localhost:4000/v1/category`,{
        method:"POST",
        headers:{
            Authorization : `Berear ${getToken()}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(catData)
    })
    const getCatRes =await sendCatData.json();
    console.log(getCatRes);
}
const delCat = async(targetId)=>{
    await Swal.fire({
        title: "آیا مطمئن هستید؟",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "خیر منصرف شدم",
        confirmButtonText: "بله حذف شود",
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "موفقیت آمیز !",
            text: "دسته بندی مورد نظر حذف گردید",
            icon: "success",
          });
          const fetchData = await fetch(
            `http://localhost:4000/v1/category/${targetId}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Berear ${getToken()}`,
              },
            }
          );
          const getResData = await fetchData.json();
       
          location.reload();
        }
       
      })
}
categoryForm.addEventListener("submit",createCategory)
window.addEventListener("load",()=>{
    getAllCategory();
    prepareValueData();
 
})
window.delCat = delCat
window.customElements.define("header-tg",HeaderTemplate)
window.customElements.define("aside-tg",Aside);