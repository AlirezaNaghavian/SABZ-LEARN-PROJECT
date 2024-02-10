import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js"
import Aside from "../../../assests/components/side-bar-panel/aside.js";
import { getToken } from "../../../assests/components/utilities/utilities.js";
const sessionTbody  =document.getElementById("session-tBody");
const sessionSelect = document.getElementById("session-select");
const setFree = document.getElementById("free-session")  
const setMemberShip= document.getElementById("pricing-session")
const sessionVideo = document.getElementById("course-video")
const sessionForm = document.getElementById("session-form");
let selectCourse = null;
let free = null
let video = null;
const prepareDataToSend = async()=>{
    const fetchSessionData = await fetch(`http://localhost:4000/v1/courses`)
    const getSessionRes = await fetchSessionData.json();
    console.log(getSessionRes);
    getSessionRes.map((course)=>{
        sessionSelect.insertAdjacentHTML("beforeend",`
        <option value=${course._id} class="font-DanaMedium text-gray-700 ">${course.name}</option>
        
        `)
    })
    sessionSelect.addEventListener("change",(e)=> selectCourse= e.target.value)
    setFree.addEventListener("change",(e)=>free = e.target.value)
    setMemberShip.addEventListener("change",(e)=>free = e.target.value)
    sessionVideo.addEventListener("change",(e)=>{
        video = e.target.files[0];
    })
}

const getAllSessions= async()=>{
    const fetchSessionData = await fetch(`http://localhost:4000/v1/courses/sessions`)
    const getSessionRes = await fetchSessionData.json();
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
const createSessions = async()=>{
    const sessionTitle = document.getElementById("session-title");
    const sessionTime = document.getElementById("session-time");
    const formData = new FormData();
    formData.append("video" , video)
    formData.append("title", sessionTitle.value)
    formData.append("time", sessionTime.value)
    formData.append("free", Number(free))
   

    const sendSessionApi = await fetch(`http://localhost:4000/v1/courses/${selectCourse}/sessions`,{
        method:"POST",
        headers:{
            Authorization : `Berear ${getToken()}`,
            
        },
        body:formData
    })
    const getCreateRes = await sendSessionApi.json();
    if(sendSessionApi.ok){
        await Swal.fire({
            position: "top-mid",
            icon: "success",
            title: "جلسه جدید ایجاد شد.",
            showConfirmButton: false,
            timer: 2000,
          });
          location.reload();
    }
}
window.addEventListener("load",()=>{
    getAllSessions();
    prepareDataToSend();
})


sessionForm.addEventListener("submit",(e)=>{
    e.preventDefault();
createSessions()
})
window.customElements.define("header-tg",HeaderTemplate)
window.customElements.define("aside-tg",Aside);