import SubHeading from "../components/SubHeading";

const Dashboard = () => {
  return (
    <div>
      
      <div>
        <SubHeading
          title={"Dashboard"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
        <div className="flex justify-center items-center gap-12 -mt-20">
          <button className="btn bg-stone-300 text-purple-500 rounded-full p-5 w-32 h-12 font-bold text-xl">Cart</button>
          <button className="btn bg-purple-500 text-white rounded-full outline-1 p-5 w-32 h-12 text-xl">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
