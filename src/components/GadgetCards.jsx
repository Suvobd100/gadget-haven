import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "./SingleCard";
import { useEffect, useState } from "react";

const GadgetCards = () => {
  const { category } = useParams();
  // load gadget data
  const data = useLoaderData();
//   filtered category wise data
  const [gadget, setGadget] = useState([]);
  useEffect(() => {
    const filterByGadget = [...data].filter(
      (gadget) => gadget.category == category
    );
    setGadget(filterByGadget);
  }, [category, data]);

  console.log(data);
  return (
    <div className="grid grid-cols-3">
      {gadget.map((item) => (
        <SingleCard key={item.product_id} gadget={item} />
      ))}
    </div>
  );
};

export default GadgetCards;
