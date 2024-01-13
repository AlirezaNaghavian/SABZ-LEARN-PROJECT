const getThemeStatus = localStorage.getItem("theme");

// /////////////////
// confirm desire theme
// /////////////////
const checkThemeSt = () => {
  if (getThemeStatus === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
window.addEventListener("load", checkThemeSt);
// /////////////////
// autorization user
// /////////////////
const submitForm = document.getElementById("reg-form");
const autorizeUser = async () => {
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone-inp");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const newUserInfos = {
    name: nameInput.value,
    username: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    password: passwordInput.value,
    confirmPassword: passwordInput.value,
  };
  let fetchData = await fetch("http://localhost:4000/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserInfos),
  });
  if (fetchData.status === 201) {
  await  Swal.fire({
      position: "top-mid",
      icon: "success",
      title: "ثبت نام با موفقیت انجام شد",
      showConfirmButton: false,
      timer: 2000
    });
    let getAutorizeRespsonse =await fetchData.json();
     location.href = "index.html"
  } else if(fetchData.status === 409) {
  await  Swal.fire({
      position: "top-mid",
      icon: "error",
      title: "نام کاربری یا ایمیل قبلا وارد شده است",
      showConfirmButton: false,
      timer: 2000
    });
  }
};
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  autorizeUser();
});
