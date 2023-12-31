import React, { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import { FaGuitar, FaUsers } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineClass } from "react-icons/md";
import Footer from "../pages/Footer/Footer";
import { Authcontext } from "../provider/Authprovider";
import { GiViolin } from "react-icons/gi";
import { MdPayments } from "react-icons/md";
import { BiBook } from "react-icons/bi";
import useUser from "../hooks/useUser";
const Dashboard = () => {
  const isAdmin = true;
  const role = "admin";
  // const { user } = useContext(Authcontext);

  const [isUser] = useUser();
  console.log(isUser);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer mt-44 md:mt-3 pb-16 lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button mx-auto lg:hidden"
          >
            Open drawer
          </label>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#FFD95A] text-base-content">
            <p className="text-2xl">
              <span className="font-bold tracking-wider">Instrument</span>
              <br></br>
              <span className="font-bold tracking-widest"> Academy</span>
            </p>
            {isUser?.role === "admin" ? (
              <>
                <li className="text-black font-medium text-xl mt-5 ">
                  <NavLink
                    to="/dashboard/manageclass"
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
            ) : isUser?.role === "instructor" ? (
              <div>
                <li className="text-black font-medium text-xl mt-5 ">
                  <NavLink
                    to="/dashboard/addclass"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <FaGuitar />
                    Add Class
                  </NavLink>
                </li>

                <li className="text-black text-xl font-medium ">
                  <NavLink
                    to="/dashboard/myclass"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-violet-500" : ""
                    }
                  >
                    <MdOutlineClass />
                    My Classes
                  </NavLink>
                </li>
                <li className="text-black text-xl font-medium ">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-violet-500" : ""
                    }
                  >
                    <AiFillHome />
                    Home
                  </NavLink>
                </li>
              </div>
            ) : (
              <div>
                {" "}
                <li className="text-black font-medium text-xl mt-5 ">
                  <NavLink
                    to="/dashboard/selectedclass"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <GiViolin />
                    My Selected Classes
                  </NavLink>
                </li>
                <li className="text-black font-medium text-xl mt-5 ">
                  <NavLink
                    to="/dashboard/enrolledclass"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <BiBook />
                    My Enrolled Classes
                  </NavLink>
                </li>
                <li className="text-black font-medium text-xl mt-5 ">
                  <NavLink
                    to="/dashboard/payment"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <MdPayments />
                    Payment History
                  </NavLink>
                </li>
              </div>
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
