import { createContext, useState, useContext } from "react";
import SubHeading from "../components/SubHeading";
import Card from "../components/Card";
import PropTypes from "prop-types";

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
  // Get wish list data from local storage
  const hendelWish = () => {
    const storedData = JSON.parse(localStorage.getItem("wishes"));
    if (storedData) {
      setData(storedData);
    } else {
      setData("no data");
    }
  };
  // for Active button Cart & functionality
  const [activeTab, setActiveTab] = useState("");
const []=useContext();


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
            onClick={() => {
              handleGetData();
              setActiveTab("Cart");
            }}
            className={`btn bg-stone-300 text-purple-500 rounded-full p-5 lg:w-32 lg:h-12 font-bold lg:text-xl
              ${
                activeTab === "Cart"
                  ? "bg-stone-300 text-purple-500 rounded-full p-5 lg:w-32 lg:h-12 font-bold lg:text-xl"
                  : " "
              }
              `}
          >
            Cart
          </button>
          <button
            onClick={() => {
              hendelWish();
              setActiveTab("Wishlist");
            }}
            className={`btn bg-purple-500 text-white rounded-full outline-1 p-5 lg:w-32 lg:h-12 lg:text-xl
            ${
              activeTab === "Wishlist"
                ? "bg-stone-300 text-purple-500 rounded-full p-5 lg:w-32 lg:h-12 font-bold lg:text-xl"
                : " "
            }
          `}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* <div className="mt-11 grid grid-cols-1 lg:gap-5">
        {data.map((p) => (
          <Card key={p.product_id} cartData={p} activeTab={activeTab}></Card>
        ))}
      </div> */
      <div className="mt-11 grid grid-cols-1 lg:gap-5">
        <Card key={data.product_id} cartData={data} activeTab={activeTab}></Card>
        </div>
      }
    </div>
  );
};
Dashboard.propTypes = {
  LocalStorageDataContext: PropTypes.array,
};
export default Dashboard;
