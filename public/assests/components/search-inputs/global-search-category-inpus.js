import { getUrlParam } from "../utilities/utilities.js";
import { cardContent } from "../sort-courses/sort.js";
const categoryCourseWrapper = document.getElementById("cat_course_wrapper");
const searchCatBtn = document.getElementById("searchCatBtn");
const emptyFieldWrapper = document.getElementById("empty-field-wrapper");
const searchCourses = async (e) => {
  const urlParam = getUrlParam("value");
  const fetchRelateData = await fetch(`http://localhost:4000/v1/courses/related/${urlParam}`);
  const getRlateRespose = await fetchRelateData.json();
const fetByValueData= await fetch(`http://localhost:4000/v1/courses/${urlParam}`)
const getDataResponse = await fetByValueData.json();
let changeDataToArr = [...getRlateRespose]
  changeDataToArr.push(getDataResponse);
  let inputValue = e.target.value;

  const matchSearchWord = changeDataToArr.filter((course) => {
    if (course.name.includes(inputValue.toUpperCase())) {
      return course.name;
    }
  });
  if (matchSearchWord) {
    showSearchResult(matchSearchWord);
  }
};
const showSearchResult = (searhArr) => {
  categoryCourseWrapper.innerHTML = "";
  if (searhArr.length === 0) {
    emptyFieldWrapper.classList.remove("hidden");
  } else {
    emptyFieldWrapper.classList.add("hidden");

    searhArr.forEach((course) => {
      cardContent(course);
    });
  }
};

searchCatBtn.addEventListener("submit", (e) => {
  e.preventDefault();
});

export { searchCourses };
