import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[80vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero h-[80vh]"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1536594527669-2f555de54e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-3xl text-white font-medium tracking-widest">
                  It's easy to play any{" "}
                  <span className="  font-bold text-orange-500 ">
                    musical instrument
                  </span>
                  , all you have to do is touch the right key at the right time
                  and the instrument will play itself.
                </h1>

                <button className="px-3 py-3 rounded-xl text-lg font-bold bg-orange-600 ">
                  Book Online
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero h-[80vh]"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-3xl text-white font-medium tracking-widest">
                  It's easy to play any{" "}
                  <span className="  font-bold text-orange-500 ">
                    musical instrument
                  </span>
                  , Music produces a kind of pleasure which human nature cannot
                  do without.
                </h1>

                <button className="px-3 py-3 rounded-xl text-lg font-bold bg-orange-600 ">
                  Book Online
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero h-[80vh]"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=998&q=80")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl md:text-3xl text-white font-medium tracking-widest">
                  It's easy to play any{" "}
                  <span className="  font-bold text-orange-500 ">
                    musical instrument
                  </span>
                  .The best music is essentially there to provide you something
                  to face the world with.
                </h1>

                <button className="px-3 py-3 rounded-xl text-lg font-bold bg-orange-600 ">
                  Book Online
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
