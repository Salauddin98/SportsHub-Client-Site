// import banner1 from "../../../image/banner1.jpg";
// import banner2 from "../../../image/banner2.jpg";
// import banner3 from "../../../image/banner3.jpg";
// import banner4 from "../../../image/banner4.jpg";
import img1 from "../../../image/lan1.jpg";
const Banner = () => {
  return (
    <section>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          {" "}
          <img src={img1} className="w-full object-cover" />
          <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0))] mx-auto w-full">
            <div className="text-white space-y-7 flex flex-col items-center justify-center px-6 md:px-0 md:w-3/4 lg:w-3/6 mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Science based toys are a great way to teach.
              </h1>
              <p>
                What are scientific toys? Science based toys are a great way to
                teach kids about basic scientific principles. The most
                interesting and engaging science toys are usually based on
                principles in the branch of science known as physics.
              </p>

              <div>
                <button className="btn btn-outline btn-warning">
                  Learn More
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
          <img src={img1} className="w-full object-cover " />
          <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0))] mx-auto w-full">
            <div className="text-white space-y-7 flex flex-col items-center justify-center px-6 md:px-0 md:w-3/4 lg:w-3/6 mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Science based toys are a great way to teach.
              </h1>
              <p>
                What are scientific toys? Science based toys are a great way to
                teach kids about basic scientific principles. The most
                interesting and engaging science toys are usually based on
                principles in the branch of science known as physics.
              </p>

              <div>
                <button className="btn btn-outline btn-warning">
                  Learn More
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
          <img src={img1} className="w-full object-cover" />
          <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0))] mx-auto w-full">
            <div className="text-white space-y-7 flex flex-col items-center justify-center px-6 md:px-0 md:w-3/4 lg:w-3/6 mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Science based toys are a great way to teach.
              </h1>
              <p>
                What are scientific toys? Science based toys are a great way to
                teach kids about basic scientific principles. The most
                interesting and engaging science toys are usually based on
                principles in the branch of science known as physics.
              </p>

              <div>
                <button className="btn btn-outline btn-warning">
                  Learn More
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
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img1} className="w-full object-cover" />
          <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0))] mx-auto w-full">
            <div className="text-white space-y-7 flex flex-col items-center justify-center px-6 md:px-0 md:w-3/4 lg:w-3/6 mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Science based toys are a great way to teach.
              </h1>
              <p>
                What are scientific toys? Science based toys are a great way to
                teach kids about basic scientific principles. The most
                interesting and engaging science toys are usually based on
                principles in the branch of science known as physics.
              </p>

              <div>
                <button className="btn btn-outline btn-warning">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
