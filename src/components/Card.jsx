import PropTypes from "prop-types";
import cancelIcon from "../assets/image/icons8-cancel-50.png";
import { useEffect, useState } from "react";

const Card = ({ cartData, activeTab }) => {
  const { product_image, product_title, description, price } = cartData;
  //   console.log('frm card which btn clked--?',activeTab);
  // set price from local storage
  const [totalCost, setTotalcost] = useState(0);
  // get price from local storage & cal
  const handelCost = () => {
    const data = JSON.parse(localStorage.getItem("wishes"));
    console.log(data);
    const totalPrice = data.reduce((sum, item) => sum + (item.price || 0), 0);
    console.log(totalPrice);
    setTotalcost(totalPrice); // Update state
  };
    console.log(totalCost);

 
  return (
    <div>
      {activeTab === "Cart" && (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-full">
          <h2 className="lg:text-4xl font-bold mb-4">Cart</h2>
          <div className="">
            <div className="flex justify-end gap-4 mt-4 font-bold ">
              <div className="mt-2 lg:text-2xl">
              <span>Total Cost:</span>
              <span>{totalCost}</span>
              </div>
              <button className="lg:px-4 py-2 bg-stone-300 text-purple-500 lg:rounded-full rounded-2xl lg:text-xl">
                Sort by Price
              </button>
              <button
                onClick={() => handelCost()}
                className="lg:px-4 px-2 lg:py-2 bg-purple-500 text-white lg:rounded-full rounded-2xl outline-1  lg:text-xl"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      )}
      {
        <div className="card card-compact bg-base-100 w-[800px] h-[250px] shadow-xl rounded-2xl">
          <img
            className="absolute w-6 right-[20px] top-[20px]"
            src={cancelIcon}
            alt=""
          />
          <div className="flex p-4 items-center justify-center">
            <figure className="w-[200px] h-[124px] -mt-4">
              <img
                className="bg-stone-100 p-2 rounded-2xl"
                src={product_image}
                alt="product_image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product_title}</h2>

              <div className="flex gap-2">
                <p className="font-bold">Description:</p>

                <p>{description}</p>
              </div>
              <div className="flex gap-2 ">
                <span className="font-bold">
                  Price: <span>$</span>
                </span>
                <p>{price}</p>
              </div>
              <div className="card-actions justify-start">
                <button className="btn bg-purple-400 rounded-3xl text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};
Card.propTypes = {
  cartData: PropTypes.object,
};
export default Card;
