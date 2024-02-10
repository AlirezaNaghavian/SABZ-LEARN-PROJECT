import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js"
import Aside from "../../../assests/components/side-bar-panel/aside.js";
const sessionTbody  =document.getElementById("session-tBody");
const getAllSessions= async()=>{
    const fetchSessionData = await fetch(`http://localhost:4000/v1/courses/sessions`)
    const getSessionRes = await fetchSessionData.json();
    console.log(getSessionRes);
    getSessionRes.forEach((session,index)=>{
        sessionTbody.insertAdjacentHTML("beforeend",`
        <tr class="grid grid-cols-7  w-full child:my-auto child:text-center  child:mx-auto  mt-8 child:text-gray-700 rounded-lg bg-gray-300   child:py-2">

        <td class=" flex justify-center text-right ml-auto my-auto" id="id">${index < 9 ? `0${index + 1}` : index + 1}</td>
        <td class=" flex justify-center text-center text-base my-auto "  id="name">${session.title}</td>
        <td class=" flex justify-center text-center text-base my-auto "  id="name">${session.time}</td>
        <td class=" flex justify-center text-center text-base my-auto "  id="userPhone">${new Date(session.createdAt).toLocaleDateString("en-Us",{dateStyle:"medium"})}</td>
        <td class=" flex text-wrap flex-wrap justify-center text-center text-sm my-auto"  id="userEmail">${session.course.name}</td>
        <td class=" flex justify-center my-auto">
            <button type="button"  class="edit-btn btn bg-secondary p-2 rounded-lg text-white" id="edit-btn">ویرایش</button>
        </td>
    
            <td class=" my-auto"><button type="button"  onclick=deleteUser("${session._id}")  class="del-btn text-white bg-rose-500 p-2 rounded-lg" id="delete-btn">حذف</button></td>
          
        </tr>
        
        `)
    })
}
window.addEventListener("load",()=>{
    getAllSessions();
})



window.customElements.define("header-tg",HeaderTemplate)
window.customElements.define("aside-tg",Aside);