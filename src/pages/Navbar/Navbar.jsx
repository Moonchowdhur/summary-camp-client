import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../../provider/Authprovider";

const Navbar = () => {
  const { user } = useContext(Authcontext);

  return (
    <div className="bg-[#898121] flex items-center justify-between font-medium  h-[70px] p-4 md:px-12  text-white">
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
        <ul className="flex items-center justify-evenly gap-3">
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
          <li className="text-2xl">
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
          {user ? (
            <div className="flex items-center text-xl gap-3">
              <img
                src={user?.photoURL}
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <button>Logout</button>
            </div>
          ) : (
            <li className="text-2xl">
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
    </div>
  );
};

export default Navbar;
