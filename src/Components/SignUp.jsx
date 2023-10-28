import React, { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const registertion = () => {
    let payload = {
      username: username,
      email: email,
      password: pass,
    };

    fetch("Backend Deploy Link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
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
      <button>Register!</button>
    </div>
  );
}

export default SignUp;
