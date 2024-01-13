import { saveIntoLStorage } from "../components/utilities/utilities.js";
const getThemeStatus = localStorage.getItem("theme");
const checkThemeSt = () => {
  if (getThemeStatus === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
window.addEventListener("load", checkThemeSt);
// /////////////////
// access choice
// /////////////////
const loginViaEmail = document.querySelector(".access-email");
const loginForm = document.querySelector("#login-form");
const loginPhone = document.querySelector("#login-phone");
const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");
let viaEmail = false;
const accesViaEmail = () => {
  if (viaEmail) {
    loginPhone.parentElement.classList.add("hidden");
    loginEmail.parentElement.classList.remove("hidden");
    loginPassword.parentElement.classList.remove("hidden");
    loginViaEmail.firstElementChild.innerHTML = "ورود با شماره موبایل";
    viaEmail = false;
  } else {
    loginPhone.parentElement.classList.remove("hidden");
    loginEmail.parentElement.classList.add("hidden");
    loginPassword.parentElement.classList.add("hidden");
    loginViaEmail.firstElementChild.innerHTML = "ورود با ایمیل";
    viaEmail = true;
  }
};
loginViaEmail.addEventListener("click", (e) => {
  e.preventDefault();
  accesViaEmail();
});
// /////////////////
// login user with token
// /////////////////
const login = async () => {
  try {
    const userInfos = {
      identifier: loginEmail.value,
      password: loginPassword.value,
    };
    const fetchDataLogin = await fetch(`http://localhost:4000/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfos),
    });
    if (fetchDataLogin.status === 200) {
      await Swal.fire({
        position: "top-mid",
        icon: "success",
        title: "ورود موفیت آمیز بود",
        showConfirmButton: false,
        timer: 2000,
      });
      let getLoginResponse = await fetchDataLogin.json();
      location.href = "index.html";
      saveIntoLStorage("user", { token: getLoginResponse.accessToken });
    } else if (fetchDataLogin.status === 401) {
      await Swal.fire({
        position: "top-mid",
        icon: "error",
        title: "کاربری با این اطلاعات یافت نشد ",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  } catch (e) {
    console.log("something went wrong", e);
  }
};
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});
