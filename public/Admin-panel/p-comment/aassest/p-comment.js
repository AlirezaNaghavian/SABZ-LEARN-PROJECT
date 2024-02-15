import HeaderTemplate from "../../../assests/components/panel-header/panel-header.js"
import Aside from "../../../assests/components/side-bar-panel/aside.js";
import { getToken } from "../../../assests/components/utilities/utilities.js";
const commentTable = document.getElementById("comment-tBody");
const getAllComments = async ()=>{
    const fetchAllComments = await fetch(`http://localhost:4000/v1/comments`)
    const getResComment = await fetchAllComments.json();
    console.log(getResComment);
    getResComment.forEach((comment,index)=>{
        commentTable.insertAdjacentHTML('beforeend',`
        
        <tr class="grid grid-cols-10  w-full child:my-auto child:text-center  child:mx-auto  mt-8 child:text-gray-700 rounded-lg child:font-DanaBold bg-gray-300   child:py-2">

        <td class="${comment.answer ? "bg-green-600 text-white" :"bg-red-500 text-white"} flex justify-center text-white dark:text-white text-right ml-auto p-2 rounded-lg my-auto" id="id">${index < 9 ? `0${index + 1}` : index + 1}</td>
        <td class=" flex justify-center text-center text-base my-auto "  id="name">${comment.creator.username}</td>
        <td class=" flex justify-center text-center text-sm my-auto "  id="name">${comment.course}</td>
        <td class=" flex justify-center text-center text-base my-auto "  id="userPhone">${new Date(comment.createdAt).toLocaleDateString("fa-IR",{dateStyle:"medium"})}</td>
        <td class=" flex text-wrap flex-wrap justify-center text-center text-sm my-auto"  id="userEmail">${comment.score}</td>
        <td class=" my-auto"><button type="button"  aria-label="${comment.body}"   class="showComment del-btn text-white bg-blue-500 p-2 rounded-lg"  >مشاهده</button></td>
        <td class=" my-auto"><button type="button"  onclick=answerComment("${comment._id}")  class="del-btn text-white bg-baseColor p-2 rounded-lg" >پاسخ</button></td>
        <td class=" my-auto"><button type="button"  onclick=acceptComment("${comment._id}")  class="del-btn text-white bg-slate-700 p-2 rounded-lg" >تایید</button></td>
        <td class=" my-auto"><button type="button"  onclick=denyComment("${comment._id}")  class="del-btn text-white bg-gray-400 p-2 rounded-lg" >رد</button></td>
        <td class=" my-auto"><button type="button"  onclick=deleteComment("${comment._id}")  class="del-btn text-white bg-rose-500 p-2 rounded-lg" >حذف</button></td>
        
        </tr>
        `)

    })
    const getCommentShowBtn  =document.querySelectorAll(".showComment")
    getCommentShowBtn.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            showComment(btn.ariaLabel)
        })
    })
    console.log(getCommentShowBtn);

}


const showComment = async(commentBody) =>{
    console.log(commentBody);
  await  Swal.fire({
        title: "متن کامنت",
        text: `${commentBody}`,
        icon: "success"
      });
}

const answerComment = async (commentId) => {
    const { value: body } = await Swal.fire({
        input: "textarea",
        inputLabel: "لطفا پاسخ کامنت را بنویسید",
        inputPlaceholder: "پاسخ...",
        inputAttributes: {
          "aria-label": "Type your message here"
        },
        showCancelButton: true
      });
      if (body) {
        const fetchAccept = await fetch(`http://localhost:4000/v1/comments/answer/${commentId}`,{
          method:"POST",
          headers:{
              Authorization: `Berear ${getToken()}`,
              "Content-Type": "application/json"
          },
          body :JSON.stringify({body})
          })
          const getRes = await fetchAccept.json();
          if(fetchAccept.ok){
            await  Swal.fire({
                title: "موفقیت آمیز !",
                text: "پاسخ با موفقیت ارسال شد",
                icon: "success",
            });  
              location.reload();
          }
        }
      }

const acceptComment = async (commentId) =>{
    console.log(commentId);
    await Swal.fire({
        title: "آیا مطمئن هستید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "خیر منصرف شدم",
        confirmButtonText: "بله تایید شود",
      }).then(async (result) => {
        if (result.isConfirmed) {
            await  Swal.fire({
                title: "موفقیت آمیز !",
                text: "کامنت مورد نظر تایید گردید",
                icon: "success",
            });  
            const fetchAccept = await fetch(`http://localhost:4000/v1/comments/accept/${commentId}`,{
              method:"PUT",
              headers:{
                  Authorization: `Berear ${getToken()}`
              }
              })
              const getRes = await fetchAccept.json();
          location.reload();
        }
      });
}
const denyComment = async (commentId) =>{
    console.log(commentId);
    await Swal.fire({
        title: "آیا مطمئن هستید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "خیر منصرف شدم",
        confirmButtonText: "بله رد شود",
      }).then(async (result) => {
        if (result.isConfirmed) {
            await  Swal.fire({
                title: "موفقیت آمیز !",
                text: "کامنت مورد نظر رد شد",
                icon: "success",
            });  
            const fetchAccept = await fetch(`http://localhost:4000/v1/comments/reject/${commentId}`,{
              method:"PUT",
              headers:{
                  Authorization: `Berear ${getToken()}`
              }
              })
              const getRes = await fetchAccept.json();
          location.reload();
        }
      });
}
const deleteComment = async (commentId)=>{
    await Swal.fire({
        title: "آیا مطمئن هستید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "خیر منصرف شدم",
        confirmButtonText: "بله حذف شود",
      }).then(async (result) => {
        if (result.isConfirmed) {
            await  Swal.fire({
                title: "موفقیت آمیز !",
                text: "کامنت مورد نظر حذف شد",
                icon: "success",
            });  
            const fetchAccept = await fetch(`http://localhost:4000/v1/comments/${commentId}`,{
              method:"DELETE",
              headers:{
                  Authorization: `Berear ${getToken()}`
              }
              })
              const getRes = await fetchAccept.json();
          location.reload();
        }
      });
}
window.showComment = showComment
window.denyComment = denyComment
window.acceptComment = acceptComment
window.deleteComment = deleteComment
window.answerComment = answerComment
window.addEventListener("load",()=>{
    getAllComments();

})
window.customElements.define("header-tg",HeaderTemplate)
window.customElements.define("aside-tg",Aside);