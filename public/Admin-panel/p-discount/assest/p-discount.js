import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js"
import Aside from "../../../assests/components/side-bar-panel/aside.js";
import { getToken } from "../../../assests/components/utilities/utilities.js";
const discountTable = document.getElementById("discount-tBody");

const getAllDiscount = async()=>{
const fetchDiscount = await fetch(`http://localhost:4000/v1/offs`,{
    headers:{
        Authorization : `Berear ${getToken()}`
    }
});
const getDiscountRes= await fetchDiscount.json();
console.log(getDiscountRes);
getDiscountRes.forEach((code,index)=>{
    discountTable.insertAdjacentHTML("beforeend",`
    <tr class="grid grid-cols-9  w-full child:my-auto child:text-center  child:mx-auto  mt-8 child:text-gray-700 rounded-lg child:font-DanaBold bg-gray-300   child:py-2">

    <td class=" flex justify-center text-white dark:text-white text-right ml-auto p-2 rounded-lg my-auto" id="id">${index < 9 ? `0${index + 1}` : index + 1}</td>
    <td class=" flex justify-center text-center text-base my-auto "  id="name">${code.code}</td>
    <td class=" flex justify-center text-center text-sm my-auto "  id="name">${code.creator}</td>
    <td class=" flex text-wrap flex-wrap justify-center text-center text-sm my-auto"  id="userEmail">${code.percent}</td>
    <td class=" flex text-wrap flex-wrap justify-center text-center text-sm my-auto"  id="userEmail">${code.max}</td>
    <td class=" flex text-wrap flex-wrap justify-center text-center text-sm my-auto"  id="userEmail">${code.uses}</td>
    <td class=" flex justify-center text-center text-base my-auto "  id="userPhone">${new Date(code.createdAt).toLocaleDateString("fa-IR",{dateStyle:"medium"})}</td>
    <td class=" my-auto"><button type="button"  onclick=answerComment("${code._id}")  class="del-btn text-white bg-baseColor p-2 rounded-lg" >پاسخ</button></td>
    <td class=" my-auto"><button type="button"  onclick=deleteComment("${code._id}")  class="del-btn text-white bg-rose-500 p-2  rounded-lg" >حذف</button></td>

    
    </tr>
    
    
    `)
})
}
window.addEventListener("load",()=>{
    getAllDiscount();
})


window.customElements.define("header-tg",HeaderTemplate)
window.customElements.define("aside-tg",Aside);