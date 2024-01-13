
const saveIntoLStorage = (key, value) => {
  return localStorage.setItem(key, value);
};
const getFromLstarage = (key) => {
  return JSON.stringify(localStorage.getItem(key));
};
const getToken = () => {
  return JSON.parse(localStorage.getItem("user")).token;
};
export {  saveIntoLStorage, getFromLstarage, getToken };
