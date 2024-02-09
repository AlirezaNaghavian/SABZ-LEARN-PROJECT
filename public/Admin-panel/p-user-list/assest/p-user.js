import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js"
import Aside from "../../../assests/components/side-bar-panel/aside.js";
import { getToken } from "../../../assests/components/utilities/utilities.js";
const userTbody = document.getElementById("user-tBody")
const getAllUsers = async ()=>{
    const fetchUsers = await fetch(`http://localhost:4000/v1/users`,{
        headers:{
            Authorization : `Berear ${getToken()}`
        }
    })
    const getUserRes = await fetchUsers.json();
    console.log(getUserRes);
 getUserRes.forEach((user,index)=>{
    userTbody.insertAdjacentHTML("beforeend",`
    
    <tr class="grid grid-cols-9  w-full child:my-auto child:text-center  child:mx-auto  mt-8 child:text-gray-700 rounded-lg bg-gray-300   child:py-2">

    <td class=" flex justify-center text-right ml-auto my-auto" id="id">${index < 9 ? `0${index + 1}` : index + 1}</td>
    <td class=" flex justify-center text-center text-sm my-auto "  id="name">${user.name}</td>
    <td class=" flex justify-center text-center text-sm my-auto "  id="name">${user.username}</td>
    <td class=" flex justify-center text-center text-sm my-auto "  id="userPhone">${user.phone}</td>
    <td class=" flex text-wrap flex-wrap justify-center text-center text-xs my-auto"  id="userEmail">${user.email}</td>
    <td class=" flex justify-center text-center text-sm my-auto "  id="userRole">${user.role}</td>
    <td class=" flex justify-center my-auto">
        <button type="button"  class="edit-btn btn bg-secondary p-2 rounded-lg text-white" id="edit-btn">تغییر نقش</button>
    </td>

        <td class=" my-auto"><button type="button"  onclick=deleteUser("${user._id}")  class="del-btn text-white bg-rose-500 p-2 rounded-lg" id="delete-btn">حذف</button></td>
        <td class=" my-auto"><button type="button"  onclick=banUser("${user._id}")  class=" del-btn text-white bg-gray-500 p-2 rounded-lg" id="ban-btn">بن کردن</button></td>
      
    </tr>
    `)
 })
}


const deleteUser =async (userId)=>{

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
        text: "کاربر مورد نظر حذف گردید",
        icon: "success",
      });
      const fetchData = await fetch(
        `http://localhost:4000/v1/users/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Berear ${getToken()}`,
          },
        }
      );
      const getResData = await fetchData.json();
      console.log(getResData);
      location.reload();
    }
   
  })
}
const banUser = async (userId)=>{
    await Swal.fire({
        title: "آیا از بن کردن کاربر مطمئن هستید؟",
        text: "برای رفع بن کاربر باید شماره تلفن کاربر از دیتابیس پاک شود",
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
            text: "کاربر مورد نظر بن گردید",
            icon: "success",
          });
          const fetchData = await fetch(
            `http://localhost:4000/v1/users/ban/${userId}`,
            {
              method: "PUT",
              headers: {
                Authorization: `Berear ${getToken()}`,
              },
            }
          );
          const fetchDeleteData = await fetch(
            `http://localhost:4000/v1/users/${userId}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Berear ${getToken()}`,
              },
            }
          );
          const fetBanUserRes = fetchData.json();
          const getResData = await fetchDeleteData.json();
          console.log(getResData);
          console.log(fetBanUserRes);
          location.reload();
        }
       
      })
}
window.banUser = banUser;
window.deleteUser = deleteUser;
window.addEventListener("load",()=>{
    getAllUsers();
})



window.customElements.define("header-tg",HeaderTemplate)
window.customElements.define("aside-tg",Aside);