import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../../provider/Authprovider";
import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import useUser from "../../hooks/useUser";
import { BsToggle2Off, BsToggleOn } from "react-icons/bs";

const Navbar = ({ isDarkMode, onToggle }) => {
  const { user, logOut } = useContext(Authcontext);
  const [open, setOpen] = useState(false);

  const [isUser] = useUser();
  console.log(isUser);

  const logoutBtn = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="bg-[#40128B] flex items-center justify-between font-medium  h-[70px] p-4 md:px-12  text-white">
      <div className="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          className="w-12 h-10 rounded-full"
          alt=""
        />
        <h2 className="text-3xl">
          <span>Instrument</span> Academy{" "}
        </h2>
      </div>
      <div>
        <ul
          className={`md:flex gap-8 z-10 md:bg-transparent text-white  font-bold md:static absolute text-xl items-center  ${
            open
              ? "top-20 right-7 p-3 bg-[#C4B0FF] text-black"
              : "-top-48 right-0"
          }`}
        >
          <li className="text-xl">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? " text-[#F7C04A]" : ""
              }
            >
              Home
              {/* other code */}
            </NavLink>
          </li>

          <li className="text-xl">
            <NavLink
              to="/instructors"
              className={({ isActive, isPending }) =>
                isActive ? " text-[#F7C04A]" : ""
              }
            >
              Instructors
              {/* other code */}
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/classes"
              className={({ isActive, isPending }) =>
                isActive ? " text-[#F7C04A]" : ""
              }
            >
              Classes
              {/* other code */}
            </NavLink>
          </li>
          <li>
            <button
              className="theme-toggle bg-orange-500 px-2 py-2 rounded-full"
              onClick={onToggle}
            >
              {isDarkMode ? (
                <BsToggle2Off className="text-3xl text-black" />
              ) : (
                <BsToggleOn className="text-3xl " />
              )}
            </button>
          </li>

          {/* dashboard conditional */}
          {user && isUser?.role === "admin" && (
            <div>
              <li className="text-xl">
                <NavLink
                  to="/dashboard/allusers"
                  className={({ isActive, isPending }) =>
                    isActive ? " text-[#F7C04A]" : ""
                  }
                >
                  Dashboard
                  {/* other code */}
                </NavLink>
              </li>
            </div>
          )}
          {user && isUser?.role === "instructor" && (
            <div>
              <li className="text-xl">
                <NavLink
                  to="/dashboard/myclass"
                  className={({ isActive, isPending }) =>
                    isActive ? " text-[#F7C04A]" : ""
                  }
                >
                  Dashboard
                  {/* other code */}
                </NavLink>
              </li>
            </div>
          )}
          {user && isUser?.role === "student" && (
            <div>
              <li className="text-xl">
                <NavLink
                  to="/dashboard/selectedclass"
                  className={({ isActive, isPending }) =>
                    isActive ? " text-[#F7C04A]" : ""
                  }
                >
                  Dashboard
                  {/* other code */}
                </NavLink>
              </li>
            </div>
          )}
          {/* dashboard conditional end */}

          {/* if user exist */}
          {user ? (
            <div className="flex items-center text-xl gap-3">
              <img
                src={user?.photoURL}
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <button onClick={logoutBtn}>Logout</button>
            </div>
          ) : (
            <li className="text-xl">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isActive ? " text-[#F7C04A]" : ""
                }
              >
                Login
                {/* other code */}
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      {/* hambarg menu */}
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open ? <ImCross /> : <FaHamburger />}
      </div>
    </div>
  );
};

export default Navbar;
