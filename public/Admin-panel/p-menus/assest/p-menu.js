import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js";
import Aside from "../../../assests/components/side-bar-panel/aside.js";
import { getToken } from "../../../assests/components/utilities/utilities.js";
const menuParentOption = document.getElementById("menu-p-list");
const menuFormData = document.getElementById("menu-form-data");
let targetParentId = null;
const setParentOptions = async () => {
  const fetMenuParentData = await fetch(`http://localhost:4000/v1/menus`);
  const getParentRes = await fetMenuParentData.json();
  menuParentOption.addEventListener(
    "change",
    (event) => (targetParentId = event.target.value)
  );
  getParentRes.forEach((pItem) => {
    menuParentOption.insertAdjacentHTML(
      "beforeend",
      `
    <option value="${pItem._id}" class="font-DanaMedium text-gray-700 ">${pItem.title}</option>

    `
    );
  });
};
const getAllMenuData = async () => {
  const tableBodyWrapper = document.getElementById("menu-tBody");
  const fetchMenuData = await fetch(`http://localhost:4000/v1/menus/all`);
  const getMenuDataRes = await fetchMenuData.json();
  getMenuDataRes.forEach((menu, index) => {
    tableBodyWrapper.insertAdjacentHTML(
      "beforeend",
      `
        
        <tr class="grid grid-cols-6 container child:col-span-1 child:my-auto child:text-center child:gap-x-4 text-[22px] mt-8 child:text-gray-700 rounded-lg bg-gray-300 max-w-[1920px]  child:py-2">
        
        <td class="flex justify-center pl-14 my-auto " id="id">${
          index < 9 ? `0${index + 1}` : index + 1
        }</td>
        <td class="flex justify-center ml-16 text-right w-full "  id="name">
          <a class="text-base ml-auto" title=${menu.title} href="#">${
        menu.title
      }</a>
        </td>
        <td class="flex justify-center text-center items-left w-full  my-auto"  id="number">${
          menu.href
        }</td>
        <td class="flex justify-center mr-10  mx-auto text-center items-center w-full  my-auto"  id="support">${
          menu.parent ? menu.parent.title : "___"
        }</td>
        <td class=" mr-auto  my-auto">
            <button type="button"  class="edit-btn btn bg-baseColor p-2 rounded-lg text-white" id="edit-btn">ویرایش</button>
        </td>
        <td class="mr-auto my-auto">
        <button type="button"  onclick=deleteMenu("${
          menu._id
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
        text: "این قابلیت فعلا غیر فعال است",
        confirmButtonText: "باشه",
      });
    });
  });
};
const createNewMenu = async (e) => {
  try {
    const menuTitle = document.getElementById("menu-title");
    const menuHref = document.getElementById("enter-menu-destination");

    const newMenuData = {
      title: menuTitle.value,
      href: menuHref.value,
      parent: targetParentId,
    };
    const sendNewMenu = await fetch(`http://localhost:4000/v1/menus`, {
      method: "POST",
      headers: {
        Authorization: `Berear ${getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMenuData),
    });
    const getMakeMenuRes = sendNewMenu.json();
    if (sendNewMenu.status === 201) {
      await Swal.fire({
        position: "top-mid",
        icon: "success",
        title: "دوره جدید ایجاد شد.",
        showConfirmButton: false,
        timer: 2000,
      });
      location.reload();
    }
  } catch (e) {
    await Swal.fire({
      position: "top-mid",
      icon: "error",
      title: "خطا در  ایجاد منوی جدید .",
      showConfirmButton: false,
      timer: 2000,
    });
  }
};
const deleteMenu = async (targetID) => {
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
        text: "منوی مورد نظر حذف گردید",
        icon: "success",
      });
      const fetchData = await fetch(
        `http://localhost:4000/v1/menus/${targetID}`,
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
window.deleteMenu = deleteMenu;
window.addEventListener("load", () => {
  getAllMenuData();
  setParentOptions();
});
menuFormData.addEventListener("submit", createNewMenu);
window.customElements.define("header-tg", HeaderTemplate);
window.customElements.define("aside-tg", Aside);
