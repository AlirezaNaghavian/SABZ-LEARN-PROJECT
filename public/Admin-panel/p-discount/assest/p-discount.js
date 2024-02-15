import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js";
import Aside from "../../../assests/components/side-bar-panel/aside.js";
import { getToken } from "../../../assests/components/utilities/utilities.js";
const discountTable = document.getElementById("discount-tBody");
const courseList = document.getElementsByClassName("courseOffList")[0];
const discountForm = document.getElementById("discount-form");
let courseSelect = null;
const getAllDiscount = async () => {
  const fetchDiscount = await fetch(`http://localhost:4000/v1/offs`, {
    headers: {
      Authorization: `Berear ${getToken()}`,
    },
  });
  const getDiscountRes = await fetchDiscount.json();
  console.log(getDiscountRes);
  getDiscountRes.forEach((code, index) => {
    discountTable.insertAdjacentHTML(
      "beforeend",
      `
    <tr class="grid grid-cols-8  w-full child:my-auto child:text-center  child:mx-auto  mt-8 child:text-gray-700 rounded-lg child:font-DanaBold bg-gray-300   child:py-2">

    <td class=" flex justify-center text-white dark:text-white text-right ml-auto p-2 rounded-lg my-auto" id="id">${index < 9 ? `0${index + 1}` : index + 1}</td>
    <td class=" flex justify-center text-center text-base my-auto "  id="name">${code.code}</td>
    <td class=" flex justify-center text-center text-sm my-auto "  id="name">${code.creator}</td>
    <td class=" flex text-wrap flex-wrap justify-center text-center text-sm my-auto"  id="userEmail">${code.percent}</td>
    <td class=" flex text-wrap flex-wrap justify-center text-center text-sm my-auto"  id="userEmail">${code.max}</td>
    <td class=" flex text-wrap flex-wrap justify-center text-center text-sm my-auto"  id="userEmail">${code.uses}</td>
    <td class=" flex justify-center text-center text-base my-auto "  id="userPhone">${new Date(code.createdAt).toLocaleDateString("fa-IR", { dateStyle: "medium" })}</td>
    <td class=" my-auto"><button type="button"  onclick=deleteOffCode("${code._id}")  class="del-btn text-white bg-rose-500 p-2  rounded-lg" >حذف</button></td>

    </tr>
    
    
    `
    );
  });
};
const prepareDataDiscount = async () => {
  const fetchCourse = await fetch(`http://localhost:4000/v1/courses`);
  const getCourseRes = await fetchCourse.json();
  getCourseRes.forEach((course) => {
    courseList.insertAdjacentHTML(
      "beforeend",
      `
    <option value=${course._id} class="font-DanaMedium text-gray-700 ">${course.name}</option>
    `
    );

    courseList.addEventListener(
      "change",
      (event) => (courseSelect = event.target.value)
    );
  });
};
const createDiscountCode = async () => {
    try{

        const discountCode = document.getElementById("discount-code");
        const discountPercent = document.getElementById("discount-percent");
        const discountExp = document.getElementById("discount-exp");
        const discountData = {
          code: discountCode.value.trim(),
          percent: discountPercent.value.trim(),
          course: courseSelect,
          max: discountExp.value.trim(),
        };
        const fetchDiscountCode = fetch(`http://localhost:4000/v1/offs`,{
          method:"POST",
          headers:{
              Authorization: `Berear ${getToken()}`,
              "Content-Type": "application/json",  
          },
          body: JSON.stringify(discountData)
        })
        if(!fetchDiscountCode.ok){
          await Swal.fire({
            position: "top-mid",
            icon: "success",
            title: "کد تخفیف جدید ایجاد شد.",
            showConfirmButton: true,
            
          });
          // location.reload();
        }else{
          throw new Error()
          
              
        }
    }catch(error){
        await Swal.fire({
            position: "top-mid",
            icon: "error",
            title:error,
            showConfirmButton: false,
            timer: 2000,
          });
          location.reload();
    }
  
};

const deleteOffCode = async(offId)=>{
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
        await  Swal.fire({
            title: "موفقیت آمیز !",
            text: "کد تخفیف مورد نظر حذف شد",
            icon: "success",
        });  
      const fetchDelOffCode = await fetch(`http://localhost:4000/v1/offs/${offId}`,{
        method:"DELETE",
        headers:{
          Authorization: `Berear ${getToken()}`,

        }
      })
          const getRes = await fetchDelOffCode.json();
      location.reload();
    }
  });
}

discountForm.addEventListener("submit",async(e)=>{
  e.preventDefault();
  await  createDiscountCode();
   location.reload();
})

window.deleteOffCode  = deleteOffCode
window.addEventListener("load", () => {
  getAllDiscount();
  prepareDataDiscount();
});

window.customElements.define("header-tg", HeaderTemplate);
window.customElements.define("aside-tg", Aside);
