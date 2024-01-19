import { getUrlParam ,getToken } from "../utilities/utilities.js"

const getCourseData = async () =>{
const urlParam = getUrlParam("name");
const token = getToken()
const fetchCourseData= await fetch(`http://localhost:4000/v1/auth/me`,{
    headers:{
        "Authorization":`Bearer ${token}`
    }
})
const getRes = await fetchCourseData.json();
console.log(getRes);
}

export{getCourseData}