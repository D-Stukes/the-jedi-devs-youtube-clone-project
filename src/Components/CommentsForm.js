import React from "react"
import { useState } from "react"
import { Form } from "react-router-dom"

function CommentsForm() {
  const [comment, setComment] = useState("")
  const [newcomment, setNewComment] = useState({
    commenter: "",
    comment: "",
  })

  function addNewComment() {
    setComment()
  }

  function resetForm() {
    setNewComment({ commenter: "", comment: "" })
  }

  return (
    <div>
      <Form></Form>
    </div>
  )
}

export default CommentsForm
