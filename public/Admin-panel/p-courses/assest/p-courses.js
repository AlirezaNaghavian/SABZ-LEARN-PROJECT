import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js";
import Aside from "../../../assests/components/side-bar-panel/aside.js";
import { getToken } from "../../../assests/components/utilities/utilities.js";
let categoryID = null;
let status = `start`;
let courseCover = null;
let courseData = null;
const selectCategory = document.getElementById("set_category");
const courseDescElem = document.querySelector("#editor textarea");
const courseFormData = document.getElementById("create-new-course-form");

// //////////
// get all course in table
// //////////
const getAllCourses = async () => {
  const courseItemList = document.getElementById("course_tBody");
  const fetchAllCourses = await fetch(`http://localhost:4000/v1/courses`);
  const allCoursesRes = await fetchAllCourses.json();
  allCoursesRes.forEach((course, index) => {
    courseItemList.insertAdjacentHTML(
      `beforeend`,
      `
            <tr class="grid grid-cols-10 container child:col-span-1 child:my-auto child:text-center child:gap-x-12 text-[22px] mt-8 child:text-gray-700 rounded-lg bg-gray-300 max-w-[1920px]  child:py-2">
    
            <td class="flex justify-center pl-14 my-auto " id="id">${
              index < 9 ? `0${index + 1}` : index + 1
            }</td>
            <td class="flex justify-start text-right w-full "  id="name">
              <a class="text-base" title=${course.name} href="#">${
        course.name
      }</a>
            </td>
            <td class="flex justify-center text-center items-left w-full my-auto"  id="price">${
              course.price === 0 ? "رایگان" : course.price.toLocaleString()
            }</td>
            <td class="flex justify-center text-center items-left w-full  my-auto"  id="number">${course.registers.toLocaleString()}</td>
            <td class="flex justify-center text-center items-left w-full  my-auto"  id="support">${
              course.support
            }</td>
            <td class="flex justify-center text-center items-left w-full  my-auto"  id="support">${course.categoryID.title.slice(
              12
            )}</td>
            <td class="flex justify-center text-center items-left w-full  my-auto"  id="support">${
              course.courseAverageScore
            }</td>
            <td class="flex justify-center text-center items-left w-full  my-auto"  id="support">${
              course.isComplete === 0 ? "در حال برگزاری" : "به اتمام رسیده"
            }</td>
            <td class=" mr-auto  my-auto"  class="mr-auto">
                <button type="button"  class="edit-btn btn bg-baseColor p-2 rounded-lg text-white" id="edit-btn">ویرایش</button>
            </td>
            <td class="mr-auto my-auto">
                <button type="button"  onclick=deleteCourse("${
                  course._id
                }")   class="del-btn text-white bg-rose-500 p-2 rounded-lg" id="delete-btn">حذف</button>
            </td>
            </tr>
            `
    );
  });
  const editBtn = document.querySelectorAll(".edit-btn");
  editBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      Swal.fire({
        text: "ویرایش دوره ها در بخش جلسات انجام می شود",
        confirmButtonText: "باشه",
      });
    });
  });
};
// //////////
// set category and status course section
// //////////
const setCategorySelecor = async () => {
  ClassicEditor.create( document.querySelector( '#editor' ) ).then(editor =>{
    courseData = editor
    })
    .catch( error => {
        console.error( error );
    } );
  const coursePresellStatus = document.getElementById("set-presell");
  const courseStartStatus = document.getElementById("set-start");
  const courseCoverInp = document.getElementById("course-cover");
  const fetchCategory = await fetch(`http://localhost:4000/v1/category`);
  const GetResCat = await fetchCategory.json();

  GetResCat.forEach((category) => {
    selectCategory.insertAdjacentHTML(
      "beforeend",
      `
    <option value="${category._id}" class="font-DanaMedium text-gray-700 ">${category.title}</option>
    `
    );
  });
  selectCategory.addEventListener("change", (evet) => {
    categoryID = evet.target.value;
  });

  coursePresellStatus.addEventListener(
    "change",
    (event) => (status = event.target.value)
  );
  courseStartStatus.addEventListener(
    "change",
    (event) => (status = event.target.value)
  );
  courseCoverInp.addEventListener("change", (evet) => {
    courseCover = evet.target.files[0];
    console.log(courseCover);
  });
};
// //////////
// create form data course and send in course page
// //////////
const createNewCourseData = async () => {
  try {
    const courseNameElem = document.getElementById("course-title");
    const coursePriceElem = document.getElementById("enter-course-price");
    const courseShortName = document.getElementById("course-URL");

    const courseSupport = document.getElementById("enter-course-support");
    const formData = new FormData();
    formData.append(`name`, courseNameElem.value);
    formData.append(`price`, Number(coursePriceElem.value));
    formData.append(`description`, courseData.getData());
    formData.append(`shortName`, courseShortName.value);
    formData.append(`support`, courseSupport.value);
    formData.append(`categoryID`, categoryID);
    formData.append("status", status);
    formData.append(`cover`, courseCover);
    // post all data
    const sendCourseData = await fetch(`http://localhost:4000/v1/courses`, {
      method: "POST",
      headers: {
        Authorization: `Berear ${getToken()}`,
      },
      body: formData,
    });

    if (sendCourseData.status === 201) {
      await Swal.fire({
        position: "top-mid",
        icon: "success",
        title: "دوره جدید ایجاد شد.",
        showConfirmButton: false,
        timer: 2000,
      });
      location.reload();
    } else {
      throw new Error("خطایی رخ داده است");
    }
  } catch (e) {
    await Swal.fire({
      position: "top-mid",
      icon: "error",
      title: "خطا در ایجاد دوره جدید.",
      showConfirmButton: false,
      timer: 2000,
    });
  }
};
// /////////////
// remove and edit current courses
// /////////////
const deleteCourse = async (courseId) => {
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
        text: "دوره مورد نظر حذف گردید",
        icon: "success",
      });
      const fetchData = await fetch(
        `http://localhost:4000/v1/courses/${courseId}`,
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
};
courseFormData.addEventListener("submit", async (e) => {
  e.preventDefault();
  createNewCourseData();
});
window.addEventListener("load", () => {
  getAllCourses();
  setCategorySelecor();
});
window.deleteCourse = deleteCourse;// bind event handler to whole window
window.customElements.define("header-tg", HeaderTemplate);
window.customElements.define("aside-tg", Aside);
