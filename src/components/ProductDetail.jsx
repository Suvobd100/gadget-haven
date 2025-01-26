import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SubHeading from "./SubHeading";

const ProductDetail = () => {
  const { product_id } = useParams();
  //   call gadget all data
  const data = useLoaderData();
  //   console.log(data);
  const [gadget, setGadget] = useState({});
  useState(() => {
    const singleData = data.find((g) => g.product_id === parseInt(product_id));
    setGadget(singleData);
  }, [data, product_id]);

  return (
    <div>
      <div className="w-full h-[54px] text-center p-4 mt-2">
        <SubHeading
          title={"Product Detail"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories,we have it all!"
          }
        />
      </div>
      ProductDetail
      <h2>Product Info:</h2>
      <p>{gadget.product_title}</p>
      {gadget.description}
    </div>
  );
};

export default ProductDetail;
