import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-300 flex justify-between p-4">
      <div className="flex items-center">
        <Link to="/" className="btn btn-ghost normal-case text-2xl my-2">
          <span className="text-rose-600">Master</span>Chef
        </Link>
        <button
          className="block md:hidden ml-auto btn btn-ghost"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          {isMobileNavOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`flex-grow md:flex md:items-center md:w-auto ${
          isMobileNavOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm md:flex-grow">
          <Link
            to="/"
            className="block mt-4 md:inline-block md:mt-0 btn btn-ghost normal-case text-xl md:text-base mr-4"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="block mt-4 md:inline-block md:mt-0 btn btn-ghost normal-case text-xl md:text-base"
          >
            Blog
          </Link>
        </div>

        <div className="md:ml-4">
          {user ? (
            <>
              <span className="btn btn-ghost">{user.email}</span>
              <button
                onClick={handleLogOut}
                className="btn btn-warning ml-4 md:ml-0 mt-4 md:mt-0"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-warning">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
