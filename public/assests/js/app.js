const getLgSearchBtn = document.getElementById("active-search-box");
const getSearchBox = document.getElementById("search-box");
const getOvralay = document.getElementsByClassName("app-overlay")[0];
const getSwichTheme = document.querySelectorAll(".switch-theme");
const getUserProfileIcon = document.getElementById("user-profile-dropdown");
const userProfileWrapper = document.getElementById("userProfile");
const getMenuItemTitle = document.querySelectorAll(".mobile-menu-link-item");
const getBarsBtn = document.getElementsByClassName("navigation__open_btn")[0];
const getMobileNavigation =document.getElementsByClassName("navigation")[0];
const getCloseMobileBtn = document.getElementsByClassName("close-mobil-menu-btn")[0];
// show-Main-Mobile-Menu
const showMobileMenu = (event)=>{
    getMobileNavigation.classList.remove("-right-[100rem]")
    getMobileNavigation.classList.add("right-0")
    getMobileNavigation.classList.add("z-50")
    getOvralay.classList.add("show");
}
// hide mobile menu 
const hideMobileMenu = ()=>{
    getMobileNavigation.classList.add("-right-[100rem]")
    getMobileNavigation.classList.remove("right-0") 
    getMobileNavigation.classList.remove("z-50")
    getOvralay.classList.remove("show");
    getOvralay.classList.add("hide");
}
// showsubmenu
getMenuItemTitle.forEach((items) => {
  items.addEventListener("click", (event) => {
    const subMenu = event.target.nextElementSibling;
    getMenuItemTitle.forEach((newItem) => {
      if (newItem !== items) {
        newItem.nextElementSibling.classList.remove("active");
        newItem.classList.remove("dark:text-white");
        newItem.firstElementChild.classList.remove("rotate-180");
      }
    });
    subMenu.classList.toggle("active");
    items.classList.toggle("dark:text-white");
    event.target.firstElementChild.classList.toggle("rotate-180");
  });
});

// darkmode active
let changeTheme = () => {
  document.querySelector("html").classList.toggle("dark");
  if (document.querySelector("html").classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};
// save on l-storage
let checkTheme = () => {
  let getThemeData = localStorage.getItem("theme");
  if (getThemeData == "dark") {
    document.querySelector("html").classList.add("dark");
  }
};
// use overlay
let showOverlaySearchBox = () => {
  getLgSearchBtn.classList.toggle("hide");
  getLgSearchBtn.classList.toggle("show");
  getSearchBox.classList.toggle("z-50");
  getOvralay.classList.toggle("hide");
  getOvralay.classList.toggle("show");
};
// show userprofile
let showUserProfile = () => {
  getUserProfileIcon.classList.toggle("hide");
  getUserProfileIcon.classList.toggle("show");
  getUserProfileIcon.classList.toggle("z-50");
  userProfileWrapper.classList.toggle("z-50");
  getOvralay.classList.toggle("hide");
  getOvralay.classList.toggle("show");
};
// clickable overlay
let onClickOverlay = () => {
  getLgSearchBtn.classList.add("hide");
  getLgSearchBtn.classList.remove("show");
  getSearchBox.classList.remove("z-50");
  getOvralay.classList.add("hide");
  getOvralay.classList.remove("show");
  getUserProfileIcon.classList.add("hide");
  getUserProfileIcon.classList.remove("show");
  getUserProfileIcon.classList.remove("z-50");
  getMobileNavigation.classList.add("-right-[100rem]")
  getMobileNavigation.classList.remove("right-0") 
  getMobileNavigation.classList.remove("z-50")
};
getCloseMobileBtn.addEventListener("click",hideMobileMenu)
getBarsBtn.addEventListener("click",showMobileMenu)
userProfileWrapper.addEventListener("click", showUserProfile);
window.addEventListener("load", checkTheme);
getSwichTheme.forEach((themeBtn)=>{
themeBtn.addEventListener("click",changeTheme)
})
getOvralay.addEventListener("click", onClickOverlay);
getSearchBox.addEventListener("click", showOverlaySearchBox);
