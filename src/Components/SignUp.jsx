import axios from "axios";
import React, { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const registertion = () => {
    let payload = {
       username,
       email,
       pass,
    };
   
    axios
      .post("http://localhost:4500/user/register", payload)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Registration Page</h3>
      <input
        type="text"
        placeholder="Enter UserName..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
        Register!
      </button>
    </div>
  );
}

export default SignUp;
