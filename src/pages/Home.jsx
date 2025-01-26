import { Outlet, useLoaderData } from "react-router-dom";

import bgPic from "../assets/image/banner.jpg";
import CategoriesGadget from "../components/CategoriesGadget";

const Home = () => {
  const categoriesGadget = useLoaderData();
  // console.log(categoriesGadget);
  return (
    <div className="container justify-center ">
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
                next level. From smart devices <br /> to the coolest
                accessories, we have it all!
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
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
        <div>
          <CategoriesGadget categoriesGadget={categoriesGadget} />
        </div>
        {/* Dynamic nested component with category list by grid */}
        <div className="">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Home;
