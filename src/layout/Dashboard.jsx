import React, { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import { FaGuitar, FaUsers } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import Footer from "../pages/Footer/Footer";
import { Authcontext } from "../provider/Authprovider";
const Dashboard = () => {
  const isAdmin = true;
  const role = "admin";
  // const { user } = useContext(Authcontext);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer pb-16 lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#FFD95A] text-base-content">
            <p className="text-2xl">
              <span className="font-bold tracking-wider">Instrument</span>
              <br></br>
              <span className="font-bold tracking-widest"> Academy</span>
            </p>
            {role === "admin" ? (
              <>
                <li className="text-black font-medium text-xl mt-5 ">
                  <NavLink
                    to="/dashboard/manageitems"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <FaGuitar />
                    Manage Class
                  </NavLink>
                </li>

                <li className="text-black text-xl font-medium ">
                  <NavLink
                    to="/dashboard/allusers"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-violet-500" : ""
                    }
                  >
                    <FaUsers />
                    Manage Users
                  </NavLink>
                </li>
                <li className="text-black text-xl font-medium">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <AiFillHome />
                    Home
                  </NavLink>
                </li>
              </>
            ) : role === "instructor" ? (
              <div>instructor</div>
            ) : (
              <div>student</div>
            )}

            {/* {role === "admin" ? (
              <>
                <li className="text-black font-medium text-xl mt-5 ">
                  <NavLink
                    to="/dashboard/manageitems"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <FaGuitar />
                    Manage Class
                  </NavLink>
                </li>

                <li className="text-black text-xl font-medium ">
                  <NavLink
                    to="/dashboard/allusers"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-violet-500" : ""
                    }
                  >
                    <FaUsers />
                    Manage Users
                  </NavLink>
                </li>
                <li className="text-black text-xl font-medium">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <AiFillHome />
                    Home
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="text-black text-xl font-medium">
                  <NavLink
                    to="/paymenthistory"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <AiFillWallet />
                    Payment History
                  </NavLink>
                </li>
                <li className="text-black text-xl font-medium">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <AiFillWallet />
                    Home
                  </NavLink>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
