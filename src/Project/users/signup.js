import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <div className="w-50 form-floating mb-2">
        <input
          id="username"
          value={credentials.username}
          className="form-control"
          onChange={(e) =>
            setCredentials({
              ...credentials,
              username: e.target.value,
            })
          }
        />
        <label for="username">Username</label>
      </div>
      <div className="form-floating w-50 mb-1">
        <input
          type="password"
          id="password"
          className="form-control"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          }
        />
        <label for="password">Password</label>
      </div>
      <div className="w-50 d-grid">
        <button className="btn btn-primary" onClick={signup}>
          Signup
        </button>
      </div>
    </div>
  );
}
export default Signup;
