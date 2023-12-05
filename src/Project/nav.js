import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();

  return (
    <div className="list-group">
      <Link
        to={"/project/home"}
        className={`list-group-item list-group-item-action ${
          pathname.includes("home") ? "active" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to={"/project/search"}
        className={`list-group-item list-group-item-action ${
          pathname.includes("search") ? "active" : ""
        }`}
      >
        Search
      </Link>
      <Link
        to={"/project/signin"}
        className={`list-group-item list-group-item-action ${
          pathname.includes("signin") ? "active" : ""
        }`}
      >
        Signin
      </Link>
      <Link
        to={"/project/signup"}
        className={`list-group-item list-group-item-action ${
          pathname.includes("signup") ? "active" : ""
        }`}
      >
        Signup
      </Link>
      <Link
        to={"/project/account"}
        className={`list-group-item list-group-item-action ${
          pathname.includes("account") ? "active" : ""
        }`}
      >
        Account
      </Link>
    </div>
  );
}

export default Nav;
