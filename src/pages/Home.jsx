import { Outlet } from "react-router-dom";

import bgPic from "../assets/image/banner.jpg";

const Home = () => {
  return (
    <div className="container justify-center ">
      Home
      <h1>This is home.........</h1>
      {/* Banner */}
      <div className="bg-stone-100 p-4">
      <div className="hero bg-purple-500 p-4 rounded-2xl">
        <div className="hero-content text-center">
          <div className="max-w-full">
            <h1 className="text-5xl font-bold">
              Upgrade Your Tech Accessorize with <br /> Gadget Heaven
              Accessories
            </h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices <br /> to the coolest accessories,
              we have it all!
            </p>
            <button className="btn bg-stone-300 text-purple-800 rounded-2xl">
              Shope Now
            </button>
            <div className="bg-purple-200 rounded-2xl mt-12">
              <img className="rounded-3xl p-4" src={bgPic} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Heading */}
      {/* Dynamic nested component with category list by grid */}
      <Outlet />
    </div>
  );
};

export default Home;
