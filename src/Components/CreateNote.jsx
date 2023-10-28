import axios from 'axios'
import React, { useState } from 'react'

function CreateNote() {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    
    
    const handelCreat = ()=>{
        let payload ={
            title,
            body
        }

        let token = localStorage.getItem("token") || null 
  
        axios.post("http://localhost:4500/notes/create",payload,{
          headers:{
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
          }
        })
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err)=>{
          console.log(err);
        })
    }
  return (
    <div>
      <h3>Create Notes</h3>
      <input type="text" value={title} placeholder='Enter Your Title' onChange={(e)=>{
        setTitle(e.target.value)
      }}/>
      <textarea cols="30" rows="10" value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
      <button onClick={()=>{handelCreat()}}>Add Note</button>
    </div>
  )
}

export default CreateNote
