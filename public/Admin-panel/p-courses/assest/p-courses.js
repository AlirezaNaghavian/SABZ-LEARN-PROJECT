import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js";
import Aside from "../../../assests/components/side-bar-panel/aside.js";
import { getToken } from "../../../assests/components/utilities/utilities.js";
let categoryID = null;
let status = `start`;
let courseCover = null;
const selectCategory = document.getElementById("set_category");
const addCourseBtn = document.getElementById("addNewCourseBtn");
const courseDescElem = document.querySelector("#editor textarea");

// //////////
// get all course in table
// //////////
const getAllCourses = async () => {
  const courseItemList = document.getElementById("course_tBody");
  const fetchAllCourses = await fetch(`http://localhost:4000/v1/courses`);
  const allCoursesRes = await fetchAllCourses.json();
  allCoursesRes.forEach((course, index) => {
    courseItemList.insertAdjacentHTML(
      "beforeend",
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
                <button type="button" class="btn bg-baseColor p-2 rounded-lg text-white" id="edit-btn">ویرایش</button>
            </td>
            <td class="mr-auto my-auto">
                <button type="button" class="text-white bg-rose-500 p-2 rounded-lg" id="delete-btn">حذف</button>
            </td>
            </tr>`
    );
  });
};
// //////////
// set category and status course section
// //////////
const setCategorySelecor = async () => {
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
// let articleEditor = null;

// ClassicEditor.create(document.querySelector('#editor'), {
//     language: 'fa'
// }).then(editor => {
//     articleEditor = editor;
// }).catch(error => {
//     console.log(error);
// });
const createNewCourseData = async () => {
  const courseNameElem = document.getElementById("course-title");
  const coursePriceElem = document.getElementById("enter-course-price");
  const courseShortName = document.getElementById("course-URL");

  const courseSupport = document.getElementById("enter-course-support");
  const formData = new FormData();
  formData.append(`name`, courseNameElem.value);
  formData.append(`price`, Number(coursePriceElem.value));
  formData.append(`description`, courseDescElem.value.trim());
  formData.append(`shortName`, courseShortName.value);
  formData.append(`support`, courseSupport.value);
  formData.append(`categoryID`, categoryID);
  formData.append("status", status);
  formData.append(`cover`, courseCover);
console.log(formData);
  // post all data
  const sendCourseData = await fetch(`http://localhost:4000/v1/courses`, {
    method: "POST",
    headers: {
      Authorization: `Berear ${getToken()}`,
    },
    body: formData,
  });

  console.log(sendCourseData);
};

addCourseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createNewCourseData(e);
});
window.addEventListener("load", () => {
  getAllCourses();
  setCategorySelecor();
});

window.customElements.define("header-tg", HeaderTemplate);
window.customElements.define("aside-tg", Aside);
