import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js";
import Aside from "../../../assests/components/side-bar-panel/aside.js";
import routeAdminProtection from "../../../assests/components/utilities/shared.js";

window.addEventListener("load",()=>{
    routeAdminProtection();
})

window.customElements.define("aside-tg",Aside)
window.customElements.define("header-tg",HeaderTemplate)