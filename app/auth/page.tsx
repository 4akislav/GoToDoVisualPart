"use client"
import { useState } from "react";
import { authenticateUser } from "./getKey";

export default function authPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginLogic = async () => {
    try {
      const apiKey = await authenticateUser(username, password);

      //обробка успішної аутентифікації 
      console.log('Authentication successful', apiKey);
  }
    catch (error) {
      console.error('Authentication failed', error);
    }
  }

  return (
    <div>
      <h2 className="centrify">Login</h2>
      <label className="centrify">
        Username:
        <input
          className="border"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label className="centrify">
        Password:
        <input
          className="border"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <span className="centrify">
        <button onClick={loginLogic}>Login</button>
      </span>
    </div>
  );
}
