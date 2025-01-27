import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SubHeading from "./SubHeading";
import singleStar from "../assets/image/icons8-star-48.png";
import Iconheart from "../assets/image/icons8-heart-50.png";
import { addFavorite, addWish, getAllWishes } from "./utils";
import cartIcon from "../assets/image/icons8-cart-24-white.png"

const ProductDetail = () => {
  const { product_id } = useParams();
  //   call gadget all data
  const data = useLoaderData();
  //   console.log(data);
  const [gadget, setGadget] = useState({});

  // Add Cart Button Disabled function when data found in local storage
  const [isHeart, setIsHeart] = useState(false);

  useEffect(() => {
    const singleData = data.find((g) => g.product_id === parseInt(product_id));
    setGadget(singleData);
    // console.log(gadget);
    // Cart button checked from local storage getAllFavorite function
    const favorites = getAllWishes();
    const isExist = favorites.find(
      (item) => parseInt(item.product_id) === parseInt(product_id)
    );
    if (isExist) {
      setIsHeart(true);
    }
  }, [data, product_id]);

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    rating,
  } = gadget;
  // Add cart local storage fun
  const handelAddCard = (gadget) => {
    addFavorite(gadget);
    
  };

// wish fun local storage
  const handelWish=(gadget)=>{
    addWish(gadget);
    setIsHeart(true)
  }

  return (
    <div className="">
      <div className="w-full h-[5px] text-center">
        <SubHeading
          title={"Product Detail"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories,we have it all!"
          }
        />
      </div>

      {
        <div className="flex justify-center">
          <div className="w-[800px] h-[800px] bg-white mt-56 rounded-2xl ">
            <div className="flex justify-start p-4 gap-6">
              <div className="w-[600px] h-[500px] rounded">
                <img
                  className="rounded-2xl w-full mt-5"
                  src={product_image}
                  alt=""
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">{product_title}</h2>
                <h2 className="font-bold">
                  {" "}
                  Price: <span>{"$"}</span> {price}
                </h2>
                <button className="rounded-full btn btn-outline bg-green-100">
                  In Stock
                </button>
                <p>{description}</p>
                <p className="font-bold">Specification:</p>
                {/* specification start */}

                <ul className="ml-4">
                  {specification &&
                    specification.map((i, indx) => (
                      <li key={indx}>
                        <span className="mr-2">{indx + 1}.</span>
                        {i}
                      </li>
                    ))}
                </ul>
                {/* specification end */}
                <div className="flex gap-1">
                  <p className="font-bold">Rating</p>
                  <img className="w-4" src={singleStar} alt="" />
                </div>
                <div>
                  <div className=" flex gap-2 items-center">
                    <div className="rating rating-xs">
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                        // defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-stone-400"
                      />
                    </div>
                    <p className="bg-stone-100 p-2 rounded-xl">{rating}</p>
                  </div>
                  {/* Add to card btn */}
                  <div className="flex items-center justify-start gap-2">
                    <div
                      
                      onClick={() => handelAddCard(gadget)}
                      className="btn bg-purple-500 text-white text-left rounded-full mt-4 p-6"
                    >
                      Add To Cart {<img className="w-4 absolute ml-26 " src={cartIcon} />}
                    </div>
                     

                    <div 
                    disabled={isHeart}
                    onClick={()=>handelWish(gadget)}
                    className="p-2 border-1 border-gray-400 rounded-full mt-2 cursor-pointer">
                      <img className="w-6" src={Iconheart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ProductDetail;
