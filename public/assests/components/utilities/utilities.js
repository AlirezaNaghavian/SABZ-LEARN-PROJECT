const saveIntoLStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
const getFromLstarage = (key) => {
  return JSON.stringify(localStorage.getItem(key));
};
const getToken = () => {
const userInfos =  JSON.parse(localStorage.getItem("user"));
return userInfos ? userInfos.token : null;
};
export { saveIntoLStorage, getFromLstarage, getToken };
