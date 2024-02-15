import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js";
import Aside from "../../../assests/components/side-bar-panel/aside.js";
import { getToken } from "../../../assests/components/utilities/utilities.js";
const percentInp = document.getElementById("compaign-percent");
const startCompaignForm = document.getElementById("submitCompaign");
const setCompaign = async () => {
  try {
    const compaignData = {
      discount: Number(percentInp.value.trim()),
    };
    const fetchCompaignCode = await fetch(`http://localhost:4000/v1/offs/all`, {
      method: "POST",
      headers: {
        Authorization: `Berear ${getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(compaignData),
    });
    if (!fetchCompaignCode.ok) {
      throw new Error(fetchCompaignCode.Error);
    } else {
      await Swal.fire({
        position: "top-mid",
        icon: "success",
        title: " کمپین  جدید ایجاد شد.",
        showConfirmButton: true,
      });
      location.reload();
    }
  } catch (e) {
    await Swal.fire({
      position: "top-mid",
      icon: "success",
      title: e,
      showConfirmButton: true,
    });
  }
};

startCompaignForm.addEventListener("submit",(e)=>{
    e.preventDefault();
setCompaign();
})
window.customElements.define("header-tg", HeaderTemplate);
window.customElements.define("aside-tg", Aside);
