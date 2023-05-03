import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Header = () => {

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar bg-base-300 flex justify-between p-4">
        <Link to="/" className="btn btn-ghost normal-case text-6xl my-2"><span className="text-rose-600">Master</span>Chef</Link>
        <div>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          {/* <Link className="btn btn-ghost normal-case text-xl" to="/categories">
            Categories
          </Link> */}
          <Link className="btn btn-ghost normal-case text-xl" to="/blog">
            Blog
          </Link>
        </div>
        <div>
          {user ? ( 
          <>
            <span className="btn btn-ghost">{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-warning">
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
    //   <nav>
    //     <Link to="/home">Home</Link>
    //     <Link to="/login">Login</Link>
    //     <Link to="/register">Register</Link>
    //     <Link to="/categories">Categories</Link>
    //     <Link to="/blog">Blog</Link>
    //  </nav>
  );
};

export default Header;
