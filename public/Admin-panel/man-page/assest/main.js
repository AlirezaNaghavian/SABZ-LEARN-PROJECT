import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js";
import Aside from "../../../assests/components/side-bar-panel/aside.js";
import routeAdminProtection from "../../../assests/components/utilities/shared.js";
import { getToken } from "../../../assests/components/utilities/utilities.js";
const userAdminName = document.getElementById("userAdminMainName");
window.addEventListener("load",async()=>{
    const fetchAdminData = await fetch(`http://localhost:4000/v1/auth/me`,{
        headers:{
            Authorization : `Berear ${getToken()}`
        }
    })
    const getAdminRes=await fetchAdminData.json();
    userAdminName.innerHTML = getAdminRes.name
    
    routeAdminProtection();
})

window.customElements.define("aside-tg",Aside)
window.customElements.define("header-tg",HeaderTemplate)