// import React from "react"
// import { useState } from "react"
// import { Form } from "react-router-dom"

// function CommentsForm({ videoId }) {
//   const [comments, setComments] = useState("")
//   const [commenter, setCommenter] = useState("")
//   const [newComment, setNewComment] = useState([])

//   function addNewComment() {
//     const commentObj = { ...comments, Commenter: commenter, Comment: comments }
//     newComment.push(commentObj)
//   }

//   function resetForm() {
//     setNewComment({ Commenter: "", Comment: "" })
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//     resetForm()
//     addNewComment()
//   }

//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <label htmlFor="commenter">
//           Commenter
//           <input
//             type="text"
//             name="commenter"
//             onChange={(e) => setCommenter(e.target.value)}
//             value={commenter}
//           />
//         </label>
//         <label htmlFor="comment">
//           comment
//           <input
//             type="text"
//             name="comment"
//             onChange={(el) => setComments(el.target.value)}
//             value={comments}
//           />
//         </label>
//         <br></br>
//         <input type="submit" />
//       </Form>
//       <div className="comment_list">
        
//         {
//          comments.map((e)=>{

//           return(
//             <li>
//               <p>{e.commenter}</p>
//               <p>{e.comment}</p>
//             </li> 
//           )
//         }) 
        
//         }
        
  
//       </div>
//     </div>
//   )
// }

// export default CommentsForm
