import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import {
  AiFillPhone,
  AiOutlineMail,
  AiFillHome,
  AiFillGithub,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#4C4C6D] md:px-14  p-4 text-neutral-content">
      <footer className="footer ">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <span className="footer-title text-3xl font-bold">
              Instrument Academy
            </span>
          </div>

          <p>This website is different kind of instruments.</p>
          <div className="flex text-3xl items-center gap-4 my-5">
            <a href="https://www.facebook.com/meema.chowdhury.5?mibextid=ZbWKwL">
              <BsFacebook className="text-blue-500" />
            </a>
            <a href="https://www.instagram.com/meema.chowdhury/?igshid=MzRlODBiNWFlZA%3D%3D">
              <BsInstagram className="text-orange-600" />
            </a>
            <a href="https://github.com/Moonchowdhur">
              <AiFillGithub className="text-blue-500 text-4xl" />
            </a>
          </div>
        </div>

        <div>
          <span className="footer-title">About</span>
          <a className="link link-hover">Best Instrument by Age</a>
          <a className="link link-hover">More Search</a>
          <a className="link link-hover">Top Instrument</a>
        </div>
        <div>
          <span className="footer-title">Helpful Links</span>

          <a className="link link-hover">Join Our Team</a>
          <a className="link link-hover">Instrument Info</a>
          <a className="link link-hover">Terms & Conditons</a>
          <a className="link link-hover">Privacy Policy</a>
        </div>
        <div className="mb-10">
          <span className="footer-title">Contact Us</span>
          <div className="flex items-center gap-2">
            <AiFillPhone className="text-blue-500 text-3xl" />
            <p>+919836684123</p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineMail className="text-red-500 text-3xl" />
            <p>instrumentac12@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <AiFillHome className="text-blue-500 text-3xl" />
            <p>2,A.M BOSE ROAD, Kolkata-700028</p>
          </div>
        </div>
      </footer>
      <hr />
      <div className="flex  justify-around md:px-14 p-10 items-center py-5">
        <p>&copy;2023 Instrument Academy. All Rights Reserved</p>
        <p>Powered by Instrument Academy</p>
      </div>
    </div>
  );
};

export default Footer;
