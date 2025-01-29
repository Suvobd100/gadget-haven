import PropTypes from "prop-types";
import cancelIcon from "../assets/image/icons8-cancel-50.png";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import { LocalStorageDataContext } from "../components/utils/LocalStorageContext";
// import { getAllFavorites, removeFavorite } from "../components/utils/LocalStorageContext";

const Card = ({ cartData, activeTab }) => {
  // local storage data by array
  const { data: products,removeFavorite,sortProductsDesc : handelSort } = useContext(LocalStorageDataContext);
  // console.log('local storage:---',data);

  const { description, price } = cartData;
  //   console.log('frm card which btn clked--?',activeTab);
  // set price from local storage
  const [totalCost, setTotalcost] = useState(0);
  // get price from local storage & cal
  const handelCost = () => {
    const data = JSON.parse(localStorage.getItem("wishes"));
    // console.log(data);
    const totalPrice = data.reduce((sum, item) => sum + (item.price || 0), 0);
    // console.log(totalPrice);
    setTotalcost(totalPrice); // Update state

    Swal.fire({
      title: "Payment Successful!",
      html: `
        <p>Thanks for purchasing!</p>
        <br>
        <p><strong>Total Cost:</strong> ${totalPrice}</p>
      `,
      iconHtml: `<img src="https://i.ibb.co.com/Yt97tjt/Group.png" alt="Custom Icon" style="width: 80px; height: 80px;" />`, // Custom icon
      customClass: {
        // popup: "rounded-lg shadow-lg p-6",
        // icon: " ", // Custom class for the icon
        confirmButton:
          "w-full bg-blue-500 bg-stone-400 text-black font-bold py-2 px-4 rounded", // Custom class for the button
      },
      showConfirmButton: true,
      confirmButtonText: "Close",
      confirmButtonColor: "#cfdae6",
    });
  };


  // handel remove fun
  const handelRemove = (id) => {
    // console.log('cards--',id);
    removeFavorite(id);  };

  //   // Auto sort in descending order when render
  // useEffect(() => {
  //   handelSort();
  // }, []);



  return (
    <div>
      {activeTab === "Cart" && (
        <div className="bg-white p-6 rounded-lg shadow-lg lg:w-full lg:max-w-full">
          <h2 className="lg:text-4xl font-bold mb-4">Cart</h2>
          <div className="">
            <div className="flex justify-end gap-4 mt-4 font-bold ">
              <div className="mt-2 lg:text-2xl">
                <span>Total Cost:</span>
                {/* <img src="../assets/image/Group.png" alt="" srcset="" /> */}
                <span>{totalCost}</span>
              </div>
              <button
                onClick={() => {
                  handelSort();
                }}
                className="lg:px-4 py-2 bg-stone-300 text-purple-500 lg:rounded-full 
              rounded-2xl lg:text-xl cursor-pointer"
              >
                Sort by Price
              </button>
              <button
                onClick={() => handelCost()}
                className="lg:px-4 px-2 lg:py-2 bg-purple-500 text-white 
                lg:rounded-full rounded-2xl outline-1 
                lg:text-xl cursor-pointer"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      )}
      {
       
        // products.map((product)=>)
        products.map((i, indx) => (
          <div
            key={indx}
            className="card card-compact bg-base-100 lg:w-[800px] w-[300px] lg:h-[250px] shadow-xl rounded-2xl mt-6">

            {/* {i.product_title} */}
            <img
             className="absolute w-6 right-[20px] top-[20px] cursor-pointer"
             onClick={()=>handelRemove(i.product_id)}
             src={cancelIcon}
             alt=""  />
            <div className="flex lg:p-4 items-center justify-center">
              <figure className="w-[200px] h-[124px] mt-4 lg:mt-0">
                <img
                  className="bg-stone-100 p-2 rounded-2xl"
                  src={i.product_image} // Access product_image from the current item
                  alt="product_image"
                />
              </figure>

              <div className="card-body text-center lg:text-left">
                <h2 className="card-title">{i.product_title}</h2>

                <div className="flex flex-col lg:flex-row gap-2">
                  <p className="font-bold">Description:</p>

                  <p>{description}</p>
                </div>
                <div className=" lg:flex gap-2 justify-center lg:justify-start ">
                  <span className="font-bold">
                    Price: <span>$</span>
                  </span>
                  <p className="text-sm">{i.price}</p>
                </div>
                <div className="card-actions justify-center lg:justify-start mt-4">
                  <button className="btn bg-purple-400 rounded-3xl text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))

        // new end
      }
    </div>
  );
};
Card.propTypes = {
  cartData: PropTypes.object,
};
export default Card;
