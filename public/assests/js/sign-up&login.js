const getThemeStatus = localStorage.getItem("theme")

const checkThemeSt = ()=>{
    if (getThemeStatus === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
        
    }
}



window.addEventListener("load",checkThemeSt)