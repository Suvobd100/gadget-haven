import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SubHeading from "./SubHeading";
import singleStar from "../assets/image/icons8-star-48.png";
import Iconheart from "../assets/image/icons8-heart-50.png"

const ProductDetail = () => {
  const { product_id } = useParams();
  //   call gadget all data
  const data = useLoaderData();
  //   console.log(data);
  const [gadget, setGadget] = useState({});
  useState(() => {
    const singleData = data.find((g) => g.product_id === parseInt(product_id));
    setGadget(singleData);
    // console.log(gadget);
  }, [data, product_id]);

  //   {
  //     "product_id": 1,
  //     "product_title": "Dell XPS 15",
  //     "product_image": "https://i.ibb.co.com/RQ5tgXx/Dell-XPS-15-notebook-xps-15-9530-t-black-gallery.jpg",
  //     "category": "laptop",
  //     "price": 1299.99,
  //     "description": "A powerful and compact laptop with a stunning display and high performance.",
  //     "specification": [
  //         "Intel Core i7",
  //         "16GB RAM",
  //         "512GB SSD",
  //         "15.6-inch 4K display"
  //     ],
  //     "availability": true,
  //     "rating": 4.7
  // }
  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    rating,
  } = gadget;

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
                <img className="rounded-2xl w-full mt-5" src={product_image} alt="" />
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
                  <div className="flex items-center justify-start gap-2">
                  <button className="btn bg-purple-500 text-white rounded-full mt-4">Add To Card</button>
                  <div className="p-2 border-1 border-gray-400 rounded-full mt-2 cursor-pointer">
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
