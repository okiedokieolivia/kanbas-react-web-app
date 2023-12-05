import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };
  return (
    <div>
      <h1>Signin</h1>
      <div className="form-floating mb-3 w-50">
        <input
          id="username"
          value={credentials.username}
          className="form-control"
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <label for="username">Username</label>
      </div>
      <div className="form-floating mb-3 w-50">
        <input
          id="password"
          value={credentials.password}
          className="form-control"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <label for="password">Password</label>
      </div>
      <div className="w-50 d-grid">
        <button onClick={signin} className="btn btn-primary">
          Signin
        </button>
      </div>
    </div>
  );
}
export default Signin;
