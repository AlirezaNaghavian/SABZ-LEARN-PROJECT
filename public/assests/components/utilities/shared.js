import { getToken } from "./utilities.js";
const routeAdminProtection = async( )=>{
    const fetchAdminData = await fetch(`http://localhost:4000/v1/auth/me`,{
        headers:{
            Authorization : `Berear ${getToken()}`
        }
    })
    const getAdminDataRes = await fetchAdminData.json();
    if(getAdminDataRes.role !== "ADMIN"){
     location.replace("http://127.0.0.1:5502/public/login.html")
    }
  
  }
  
  export default routeAdminProtection