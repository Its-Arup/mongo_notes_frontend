import React, { useState } from 'react'

function CreateNote() {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    
    
    const handelCreat = ()=>{
        let payload ={
            title,
            body
        }

    }
  return (
    <div>
      <h3>Create Notes</h3>
      <input type="text" value={title} placeholder='Enter Your Title' onChange={(e)=>{
        setTitle(e.target.value)
      }}/>
      <textarea cols="30" rows="10" value={body} ></textarea>
    </div>
  )
}

export default CreateNote
