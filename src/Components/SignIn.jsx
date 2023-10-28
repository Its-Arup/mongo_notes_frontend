import axios from 'axios';
import React, { useState } from 'react'

function SignIn() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
  
    const registertion = () => {
      let payload = {
         email,
         pass,
      };
     
      axios
        .post("http://localhost:4500/user/login", payload)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
        })
        .catch((err) => console.log(err));
    };

  return (
    <div>
      <h3>LogIn Page</h3>
      <input
        type="text"
        placeholder="Enter Email...."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Password..."
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button
        onClick={() => {
          registertion();
        }}
      >
        LogIn!
      </button>
    </div>
  )
}

export default SignIn
