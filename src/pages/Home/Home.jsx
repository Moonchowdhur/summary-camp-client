import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import PopularInstrcutor from "../PopularInstrcutor/PopularInstrcutor";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
const Home = () => {
  return (
    <div className="md:mx-12 p-4">
      {/* banner section */}
      <div>
        <Banner></Banner>
      </div>

      <div className="py-7">
        <h2 className="mb-5 text-center my-12 text-4xl font-bold tracking-wider">
          Popular Class
        </h2>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PopularClass></PopularClass>
        </motion.div>
      </div>

      {/* slider end */}
      {/* instrument section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="text-center my-16 text-4xl font-bold tracking-wider">
          <h2 className="mb-5">Instrument Section</h2>
          <div className="grid py-5 md:mx-8 grid-cols-1 gap-3 mx-auto mt-5 md:grid-cols-3">
            <img
              src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="w-[350px] h-[350px] rounded-xl"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1573871667648-5e8c11fba585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="w-[350px] h-[350px] rounded-xl"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1620045490673-e3d3557a8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="w-[350px] h-[350px] rounded-xl"
              alt=""
            />

            <img
              src="https://m.media-amazon.com/images/I/71qUsiEelbL._AC_UF1000,1000_QL80_.jpg"
              className="w-[350px] h-[350px] rounded-xl"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1603093509046-1917e4037c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              className="w-[350px] h-[350px] rounded-xl"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/46/Celesta_Schiedmayer_Studio.jpg"
              className="w-[380px] h-[380px] rounded-xl"
              alt=""
            />
          </div>
        </div>
      </motion.div>

      <div className="my-16">
        <h2 className="mb-5 text-center my-12 text-4xl font-bold tracking-wider">
          Popular Instrcutor
        </h2>
        <PopularInstrcutor></PopularInstrcutor>
      </div>
    </div>
  );
};

export default Home;
