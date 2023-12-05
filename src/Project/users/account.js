import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchAccount = async () => {
    const account = await client.account();
    if (account && account.dob) {
      // convert the Date object to a YYYY-MM-DD string format
      account.dob = account.dob.split("T")[0];
    }
    setAccount(account);
  };

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    // convert the dob to YYYY-MM-DD string format
    if (user && user.dob) {
      user.dob = user.dob.split("T")[0];
    }
    setAccount(user);
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  const save = async () => {
    await client.updateUser(account);
  };

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input
            className="form-control mb-1"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            className="form-control mb-1"
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            className="form-control mb-1"
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            className="form-control mb-1"
            type="date"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            className="form-control mb-1"
            type="email"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            className="form-select mb-1"
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <div className="d-grid">
            <button className="btn btn-primary mb-1" onClick={save}>
              Save
            </button>
            <button className="btn btn-danger mb-1" onClick={signout}>
              Signout
            </button>
            <Link className="btn btn-warning" to={"/project/admin/users"}>
              Users
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default Account;
