import { useState } from "react";
import SubHeading from "../components/SubHeading";
import Card from "../components/Card";


const Dashboard = () => {
  // State to store retrieved data
  const [data, setData] = useState([]);

  // Function to handle click event and get data from localStorage
  const handleGetData = () => {
    const storedData = JSON.parse(localStorage.getItem("carts"));
    if (storedData) {
      setData(storedData);
    } else {
      setData("No data found in localStorage.");
    }
  };

  console.log(data);
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
          <button
            onClick={() => handleGetData()}
            className="btn bg-stone-300 text-purple-500 rounded-full p-5 w-32 h-12 font-bold text-xl"
          >
            Cart
          </button>
          <button className="btn bg-purple-500 text-white rounded-full outline-1 p-5 w-32 h-12 text-xl">
            Wishlist
          </button>
        </div>
      </div>

      <div className="mt-11 grid grid-cols-1 gap-5">
        {data.map((p) => (
          <Card key={p.product_id} cartData={p}></Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
