import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { ContextProvider } from "../../AuthContext/AuthContext";


const Navbar = () => {

  const {user,logOut} = useContext(ContextProvider)


  const handleLogOut = () =>{

    logOut()
    .then (()=>{
      console.log('succussfully log out')
    })
    .catch(()=>{
      console.log('logout not successful')
    })
  }
    
    const navLinks = (
      <>
        <li>
          {" "}
          <NavLink to="/">Home</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/products">Products</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/collection">New Collection</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/contact">Contact</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/about">About us</NavLink>{" "}
        </li>
        {user && (
          <li>
            {" "}
            <NavLink to="/orders">Orders</NavLink>{" "}
          </li>
        )}
      </>
    );
    
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">SunGlass</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/login" className="btn">
            Login
          </NavLink>
        </div>
        {user && (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between text-cyan-700 font-bold">
                    {user.displayName}
                    <span className="badge"></span>
                  </a>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    );
};

export default Navbar;